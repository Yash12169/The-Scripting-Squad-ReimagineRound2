import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Lander.css';
import logo from './images/baskin-robbins-logo.png';
import ice from './images/icecream.png';
import caramel from './images/caramel1.png';
import caramel2 from './images/caramel2.png';

gsap.registerPlugin(ScrollTrigger);

const Lander = () => {
    const logoRef = useRef(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);
    const img4Ref = useRef(null);

    useEffect(() => {
        const logo = logoRef.current;
        const img1 = img1Ref.current;
        const img2 = img2Ref.current;
        const img3 = img3Ref.current;
        const img4 = img4Ref.current;

        gsap.set(logo, {
            yPercent: -50,
            top: '300px',
            left: '104vh',
        });

        gsap.to(logo, {
            yPercent: 0,
            top: '-70px',
            scale: 0.25,
            scrollTrigger: {
                trigger: '.content',
                start: 'top bottom',
                end: 'top top',
                scrub: true,
            },
        });

        const animateFromRight = (element, delay = 0) => {
            return gsap.fromTo(element, {
                x: window.innerWidth,
            }, {
                x: 0,
                duration: 1.5,
                ease: 'power2.out',
                delay,
            });
        };

        const addFloatingEffect = (element) => {
            gsap.to(element, {
                y: '+=10',
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        };

        const tl = gsap.timeline({delay: 0.2});

        tl.add(animateFromRight(img4))
            .add(animateFromRight(img3), '-=1.3')
            .add(animateFromRight(img2), '-=1.3')
            .add(animateFromRight(img1), '-=1.3')
            .then(() => {
                addFloatingEffect(img1);
                addFloatingEffect(img2);
                addFloatingEffect(img3);
                addFloatingEffect(img4);
            });

    }, []);

    return (
        <div>
            <div className={'content-lander'}>
                <div>
                    <div className={'flex justify-center'}>
                        <p className={'lobster-two-regular text-white text-[128px]'}><span
                            className={'font-extrabold mr-[-25px]'}>T</span>aste the<span
                            className={'font-extrabold mr-[-8px]'}>W</span>onder</p>
                    </div>
                    <p className={'flex boldL ml-[30px] mb-[30px] text-[24px] text-white'}>Serving happiness since 1945</p>

                    <div className="l-btn ml-[30px]">
                        <span>Order Now</span>
                        <div className="icon-container">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="text-white h-6">
                                <path
                                    d="M12 3.25C12 4.17577 12.9164 5.55921 13.8432 6.72158C15.0364 8.21813 16.4612 9.52593 18.0953 10.524C19.3189 11.2713 20.8055 11.9894 22 11.9894M12 20.75C12 19.8242 12.9164 18.4408 13.8432 17.2784C15.0364 15.7819 16.4612 14.4741 18.0953 13.476C19.3189 12.7287 20.8055 12.0106 22 12.0106M22 12H2"
                                    stroke="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'background-land z-[1]'}>

                {/*<img className={'absolute h-[150px] w-[150px] top-[20px] left-[50px]'} src={logo}/>*/}
                <div className={'flex'}>
                    <img className={'img1'} src={caramel} ref={img1Ref}/>
                    <img className={'img2'} src={caramel} ref={img2Ref}/>
                    <img className={'img3'} src={caramel2} ref={img3Ref}/>
                    <img className={'img4'} src={caramel2} ref={img4Ref}/>
                </div>
                <img src={ice} className={'z-[0]'}/>
            </div>
        </div>
    );
};

export default Lander;