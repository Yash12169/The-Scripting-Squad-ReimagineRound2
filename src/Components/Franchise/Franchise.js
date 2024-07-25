import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Franchise.css';
import globe from '../../images/globe.png';

// Import or define your 5 images here
import image1 from '../../images/franimg1.webp';
import image2 from '../../images/franimg3.webp';
import image3 from '../../images/franimage2.webp';
import image4 from '../../images/franimg1.webp';
import image5 from '../../images/franimage2.webp';
import image6 from '../../images/img6.webp';
import image7 from '../../images/img7.webp';
import image8 from '../../images/img8.webp';
import image9 from '../../images/img9.webp';
import image10 from '../../images/img10.webp';

gsap.registerPlugin(ScrollTrigger);

function Franchise() {
    const containerRef = useRef(null);
    const pinkRef = useRef(null);
    const purpleRef = useRef(null);
    const blueRef = useRef(null);
    const globeRef = useRef(null);
    const textRef = useRef(null);

    const images = [
        { src: image10, position: { top: '25%', left: '10%' } },
        { src: image2, position: { top: '15%', left: '25%' } },
        { src: image9, position: { top: '10%', left: '40%' } },
        { src: image4, position: { top: '15%', left: '55%' } },
        { src: image5, position: { top: '25%', left: '70%' } },



        { src: image6, position: { top: '55%', left: '10%' } },
        { src: image7, position: { top: '65%', left: '25%' } },
        { src: image8, position: { top: '70%', left: '40%' } },
        { src: image3, position: { top: '65%', left: '55%' } },
        { src: image1, position: { top: '55%', left: '70%' } },
        // { src: image6, position: { top: '50%', left: '30%' } },
        // { src: image7, position: { top: '50%', left: '30%' } },
    ];

    useEffect(() => {
        const container = containerRef.current;
        const pink = pinkRef.current;
        const purple = purpleRef.current;
        const blue = blueRef.current;

        if (!container || !pink || !purple || !blue) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "top top-=200%",
                scrub: 1,
                markers: true, // for debugging, remove in production
            }
        });

        tl.fromTo(pink, { scale: 1 }, { scale: 10, duration: 3 }, 0)
            .to(pink, { scale: 1, duration: 1 })
            .fromTo(purple, { scale: 1 }, { scale: 1, duration: 3 }, 0)
            .to(purple, { scale: 1, duration: 1 })
            .fromTo(blue, { scale: 1 }, { scale: 0.4, duration: 3 }, 0)
            .to(blue, { scale: 1, duration: 1 });

        // Animate images
        images.forEach((img, index) => {
            tl.fromTo(
                `#image-${index}`,
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 1 },
                index * 0.2 // Stagger the start time of each image animation
            );
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className={'globe-container z-[40]'}>
            <div ref={pinkRef} className={'pink-container z-[40]'}>
                <div ref={purpleRef} className={'purple-container z-[40]'}>
                    <div ref={blueRef} className={'blue-container'}>
                        <div ref={textRef} className={'text-overlay poppins-medium'}>Franchise opportunity</div>
                        {images.map((img, index) => (
                            <img
                                key={index}
                                id={`image-${index}`}
                                src={img.src}
                                alt={`Image ${index + 1}`}
                                className="fixed-image"
                                style={{
                                    ...img.position,
                                    transform: 'translate(-50%, -50%)',
                                    opacity: 0, // Start with opacity 0
                                    scale: 0, // Start with scale 0
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Franchise;