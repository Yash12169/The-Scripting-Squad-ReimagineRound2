import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Franchise.css';
import img1 from '../../images/img1.webp';
import img2 from '../../images/img2.webp';
import img3 from '../../images/img3.webp';
import img4 from '../../images/img4.webp';

gsap.registerPlugin(ScrollTrigger);

function Franchise2() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);
    const img4Ref = useRef(null);
    const text2Ref = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const text = textRef.current;
        const image1 = img1Ref.current;
        const image2 = img2Ref.current;
        const image3 = img3Ref.current;
        const image4 = img4Ref.current;
        const text2 = text2Ref.current;
        const button = buttonRef.current;

        gsap.fromTo(text,
            { x: '-100%' },
            {
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 100%',
                    end: 'top 20%',
                    scrub: 1,
                }
            }
        );

        gsap.fromTo([image1, image2],
            { x: '100%' },
            {
                x: 0,
                duration: 1,
                stagger: 0,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 100%',
                    end: 'top 20%',
                    scrub: 1,
                }
            }
        );

        gsap.fromTo([image3, image4],
            { x: '-100%' },
            {
                x: 0,
                duration: 0.5,
                stagger: 0,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 90%',
                    end: 'top 20%',
                    scrub: 1,
                }
            }
        );

        gsap.fromTo([text2, button],
            { x: '100%' },
            {
                x: 0,
                duration: 1,
                stagger: 0,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 90%',
                    end: 'top 20%',
                    scrub: 1,
                }
            }
        );
    }, []);

    return (
        <div ref={containerRef} className={'fran-container z-[10]'}>
            <div className={'fran-container-inner'}>
                <div className={'fran-text-container'}>
                    <p ref={textRef} className={'fran-text poppins-medium'}>Be a BR Boss</p>
                </div>
                <div className={'fran-image-container'}>
                    <img ref={img1Ref} className={'img-fran z-[0]'} src={img1} alt="Franchise 1"/>
                    <img ref={img2Ref} className={'img-fran'} src={img2} alt="Franchise 2"/>
                </div>
            </div>
            <div className={'fran-container-inner lessspacer'}>
                <div className={'fran-image-container'}>
                    <img ref={img3Ref} className={'img-fran'} src={img3} alt="Franchise 3"/>
                    <img ref={img4Ref} className={'img-fran'} src={img4} alt="Franchise 4"/>
                </div>
                <div ref={text2Ref} className={'fran-text-container'}>
                    <p className={'fran-text-small poppins-medium'}>Baskin-Robbins is a global brand famous for our
                        innovative flavours and commitment to fun, creativity and community. The result of 60+ years
                        of growth, training and support—we know our business model works. Your opportunity to own a
                        successful business starts here.</p>
                    <div className="l-btn-rew topspace">
                        <span>Become a Franchise</span>
                        <div className="icon-container-rew">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="text-white rotate-90 h-6">
                                <path
                                    d="M12 3.25C12 4.17577 12.9164 5.55921 13.8432 6.72158C15.0364 8.21813 16.4612 9.52593 18.0953 10.524C19.3189 11.2713 20.8055 11.9894 22 11.9894M12 20.75C12 19.8242 12.9164 18.4408 13.8432 17.2784C15.0364 15.7819 16.4612 14.4741 18.0953 13.476C19.3189 12.7287 20.8055 12.0106 22 12.0106M22 12H2"
                                    stroke="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Franchise2;