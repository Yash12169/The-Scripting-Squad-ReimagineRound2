import React, { useEffect, useRef } from 'react';
import MovingTextPaused from "../MovingText/MovingTextPaused";
import MovingTextPausedReverse from "../MovingText/MovingTextPausedReverse";
import './Franchise.css'
import mover from '../../images/3text.gif'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function FranMovingText() {
    const moverRef = useRef(null);

    useEffect(() => {
        const moverElement = moverRef.current;

        gsap.to(moverElement, {
            scrollTrigger: {
                trigger: moverElement,
                start: "top center",
                end: "bottom center",
                scrub: 2,  // Add smoothing to the animation
            },
            scale: 0.6,
            y: 40,
            ease: "power2.out",  // Add easing for smoother animation
            duration: 2,  // Set duration for smoother animation
        });
    }, []);

    return (
        <div className={'fran-moving-text-container'}>
            <MovingTextPaused text={'Nom'}/>
            <MovingTextPausedReverse text={'Swirl'}/>
            <MovingTextPaused text={'Dunk'}/>
            <img ref={moverRef} id={'mover'} src={mover} alt="Moving text" />
        </div>
    );
}

export default FranMovingText;