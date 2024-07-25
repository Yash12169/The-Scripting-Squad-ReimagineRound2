import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import flavour from '../../images/flavour2.gif'
import './Flavours.css'
import scoop1 from '../../images/scoop1.webp'
import scoop2 from '../../images/scoop2.webp'
import scoop3 from '../../images/scoop3.webp'
import scoop4 from '../../images/scoop4.webp'
import cone from '../../images/scoop-wafflecone.png'
import Rellax from "rellax";
gsap.registerPlugin(ScrollTrigger);

function Flavours() {
    const componentRef = useRef(null);
    const coneRef = useRef(null);
    const scoop1Ref = useRef(null);
    const scoop2Ref = useRef(null);
    const scoop3Ref = useRef(null);
    const scoop4Ref = useRef(null);

    useEffect(() => {
        const componentElement = componentRef.current;
        const coneElement = coneRef.current;
        const scoop1Element = scoop1Ref.current;
        const scoop2Element = scoop2Ref.current;
        const scoop3Element = scoop3Ref.current;
        const scoop4Element = scoop4Ref.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: componentElement,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                pin: true,
                pinSpacing: false,
            }
        });

        tl.fromTo(coneElement, { x: '100vw' }, { x: '65vw', duration: 1 })
            .fromTo(scoop1Element, { x: '100vw' }, { x: '65vw', duration: 1 }, '-=0.8')
            .fromTo(scoop2Element, { x: '100vw' }, { x: '65vw', duration: 1 }, '-=0.8')
            .fromTo(scoop3Element, { x: '100vw' }, { x: '65vw', duration: 1 }, '-=0.8')
            .fromTo(scoop4Element, { x: '100vw' }, { x: '65vw', duration: 1 }, '-=0.8')
            .to([coneElement, scoop1Element, scoop2Element], {
                y: -420,
                duration: 4,
                ease: 'power2.inOut'
            })
            .to(componentElement, {
                y: () => -(componentElement.offsetHeight - window.innerHeight),
                ease: 'none',
                duration: 10
            }, '-=2');

    }, []);

    return (
        <div ref={componentRef} className="flavours-wrapper">
            <div className={'w-screen h-screen flavour-container'}>
                {/*<div className={'circle'}></div>*/}
                {/*<div className={'circle2'}></div>*/}
                <div>
                    <div className={'text-white font-extrabold mb-[50px] text-[96px] w-[1000px] lh poppins-medium ml-[150px] pt-[300px]'}>Explore the BR Range</div>
                    <div className={'text-white ml-[150px] text-[24px] w-[800px]'}>Feast your eyes on fantastical flavours, sundaes, cakes, desserts, beverages and take home
                        packs.
                    </div>
                </div>
                <div ref={coneRef} className="ice-cream-item-cone  cone-container" >
                    <img src={cone} alt="Ice cream cone"/>
                </div>
                <div ref={scoop1Ref} className="ice-cream-item-scoop1 scoop-container scoop1">
                    <img src={scoop1} alt="Ice cream scoop 1"/>
                </div>
                <div ref={scoop2Ref} className="ice-cream-item scoop-container scoop2">
                    <img src={scoop2} alt="Ice cream scoop 2"/>
                </div>
            </div>
            <div className={'smae-bg'}>
                <div className={'yellow-spacer'}></div>
            </div>
        </div>
    );
}

export default Flavours;