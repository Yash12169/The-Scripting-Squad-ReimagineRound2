import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

const ShapeOverlays = () => {
    const overlayRef = useRef(null);
    const pathRefs = useRef([]);
    const [isOpened, setIsOpened] = useState(false);
    const [isIntersecting, setIsIntersecting] = useState(false);

    const numPoints = 10;
    const numPaths = 3;
    const delayPointsMax = 0.3;
    const delayPerPath = 0.25;

    const pointsDelay = useRef([]);
    const allPoints = useRef([]);
    const tl = useRef(null);

    useEffect(() => {
        // Initialize GSAP with ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        for (let i = 0; i < numPaths; i++) {
            let points = [];
            allPoints.current.push(points);
            for (let j = 0; j < numPoints; j++) {
                points.push(100);
            }
        }

        tl.current = gsap.timeline({
            onUpdate: render,
            defaults: {
                ease: "power2.inOut",
                duration: 0.9
            }
        });

        // Setup ScrollTrigger
        ScrollTrigger.create({
            trigger: overlayRef.current,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
                if (!tl.current.isActive()) {
                    setIsOpened(true);
                    toggle();
                }
            },
            onLeaveBack: () => {
                if (!tl.current.isActive()) {
                    setIsOpened(false);
                    toggle();
                }
            }
        });

        // Initialize IntersectionObserver
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
                if (entry.isIntersecting) {
                    setIsOpened(true);
                    toggle();
                } else {
                    setIsOpened(false);
                    toggle();
                }
            },
            {
                threshold: 0.5 // Adjust threshold as per your needs
            }
        );

        observer.observe(overlayRef.current);

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            observer.disconnect();
        };
    }, []);

    const toggle = () => {
        tl.current.progress(0).clear();

        for (let i = 0; i < numPoints; i++) {
            pointsDelay.current[i] = Math.random() * delayPointsMax;
        }

        for (let i = 0; i < numPaths; i++) {
            let points = allPoints.current[i];
            let pathDelay = delayPerPath * (isOpened ? i : (numPaths - i - 1));

            for (let j = 0; j < numPoints; j++) {
                let delay = pointsDelay.current[j];
                tl.current.to(points, {
                    [j]: 0
                }, delay + pathDelay);
            }
        }
    };

    const render = () => {
        for (let i = 0; i < numPaths; i++) {
            let path = pathRefs.current[i];
            let points = allPoints.current[i];

            let d = "";
            d += isOpened ? `M 0 0 V ${points[0]} C` : `M 0 ${points[0]} C`;

            for (let j = 0; j < numPoints - 1; j++) {
                let p = (j + 1) / (numPoints - 1) * 100;
                let cp = p - (1 / (numPoints - 1) * 100) / 2;
                d += ` ${cp} ${points[j]} ${cp} ${points[j+1]} ${p} ${points[j+1]}`;
            }

            d += isOpened ? ` V 100 H 0` : ` V 0 H 0`;
            path.setAttribute("d", d);
        }
    };

    return (
        <div>
            <div className={'mb-[1000px]'}>Fucking scrolltrigger</div>
            <svg
                className="shape-overlays"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                ref={overlayRef}
                style={{
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer'
                }}
            >
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00c99b"/>
                        <stop offset="100%" stopColor="#ff0ea1"/>
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ffd392"/>
                        <stop offset="100%" stopColor="#ff3898"/>
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#110046"/>
                        <stop offset="100%" stopColor="#32004a"/>
                    </linearGradient>
                </defs>
                <path className="shape-overlays__path" fill="url(#gradient1)"
                      ref={el => pathRefs.current[0] = el}></path>
                <path className="shape-overlays__path" fill="url(#gradient2)"
                      ref={el => pathRefs.current[1] = el}></path>
                <path className="shape-overlays__path" fill="url(#gradient3)"
                      ref={el => pathRefs.current[2] = el}></path>
            </svg>
        </div>
    );
};

export default ShapeOverlays;
