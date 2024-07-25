import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './MovingText.css';

const MovingTextPausedReverse = ({text}) => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        function horizontalLoop(items, config) {
            items = gsap.utils.toArray(items);
            config = config || {};
            let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
                length = items.length,
                startX = items[0].offsetLeft,
                times = [],
                widths = [],
                xPercents = [],
                curIndex = 0,
                pixelsPerSecond = (config.speed || 1) * 100,
                snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
                totalWidth, curX, distanceToStart, distanceToLoop, item, i;
            gsap.set(items, {
                xPercent: (i, el) => {
                    let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                    xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
                    return xPercents[i];
                }
            });
            gsap.set(items, {x: 0});
            totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
            for (i = 0; i < length; i++) {
                item = items[i];
                curX = xPercents[i] / 100 * widths[i];
                distanceToStart = item.offsetLeft + curX - startX;
                distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
                tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
                    .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
                    .add("label" + i, distanceToStart / pixelsPerSecond);
                times[i] = distanceToStart / pixelsPerSecond;
            }
            function toIndex(index, vars) {
                vars = vars || {};
                (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
                let newIndex = gsap.utils.wrap(0, length, index),
                    time = times[newIndex];
                if (time > tl.time() !== index > curIndex) {
                    vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
                    time += tl.duration() * (index > curIndex ? 1 : -1);
                }
                curIndex = newIndex;
                vars.overwrite = true;
                return tl.tweenTo(time, vars);
            }
            tl.next = vars => toIndex(curIndex+1, vars);
            tl.previous = vars => toIndex(curIndex-1, vars);
            tl.current = () => curIndex;
            tl.toIndex = (index, vars) => toIndex(index, vars);
            tl.times = times;
            tl.progress(1, true).progress(0, true);
            if (config.reversed) {
                tl.vars.onReverseComplete();
                tl.reverse();
            }
            return tl;
        }

        const initializeMarquee = () => {
            if (marqueeRef.current) {
                const lines = gsap.utils.toArray('.text-single');
                const loops = lines.map((line, i) => {
                    const links = line.querySelectorAll(".js-text");
                    return horizontalLoop(links, {
                        repeat: -1,
                        speed: 1.5 + i * 0.5,
                        reversed: true, // Start reversed
                        paused: true, // Start paused
                        paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px"))
                    });
                });

                let currentScroll = 0;
                let scrollDirection = 1;

                const handleScroll = () => {
                    let direction = (window.pageYOffset > currentScroll) ? 1 : -1;
                    if (direction !== scrollDirection) {
                        console.log("change", direction);
                        scrollDirection = direction;
                    }

                    // Move the text based on scroll amount
                    const scrollDelta = window.pageYOffset - currentScroll;
                    loops.forEach(tl => {
                        tl.timeScale(direction);
                        tl.progress(tl.progress() - (scrollDelta * 0.0005)); // Negative to reverse direction
                    });

                    currentScroll = window.pageYOffset;
                };

                window.addEventListener("scroll", handleScroll);

                // Cleanup function
                return () => {
                    window.removeEventListener("scroll", handleScroll);
                    loops.forEach(loop => loop.kill());
                };
            }
        };

        // Initialize the marquee after a short delay to ensure DOM is ready
        const timeoutId = setTimeout(initializeMarquee, 100);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className="scroll"></div>
            <div className="text-marquee" ref={marqueeRef}>
                <div className="text-single merriweather-bold">
                    <span className="text js-text lobster-two-bold">{text} • </span>
                    <span className="text js-text lobster-two-bold">{text} • </span>
                    <span className="text js-text lobster-two-bold">{text} • </span>
                    <span className="text js-text lobster-two-bold">{text} • </span>
                    <span className="text js-text lobster-two-bold">{text} • </span>
                    <span className="text js-text lobster-two-bold">{text} • </span>
                </div>
            </div>
            <div className="scroll"></div>
        </>
    );
};

export default MovingTextPausedReverse;