import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Lander.css';
import ice from './images/icecream.png';
import caramel from './images/caramel1.png';
import caramel2 from './images/caramel2.png';
import newImage from './images/dessert.png';
import newCaramel1 from './images/chocoChip.png';
import newCaramel2 from './images/chocoChip.png';
import newCaramel3 from './images/moose.png';
import newCaramel4 from './images/moose.png';
import thirdImage from './images/shakes.png';

const Lander = () => {
    const logoRef = useRef(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);
    const img4Ref = useRef(null);
    const iceRef = useRef(null);
    const newImageRef = useRef(null);
    const textContentRef = useRef(null);
    const newTextContentRef = useRef(null);
    const newImg1Ref = useRef(null);
    const newImg2Ref = useRef(null);
    const newImg3Ref = useRef(null);
    const newImg4Ref = useRef(null);
    const backgroundRef = useRef(null);
    const thirdImageRef = useRef(null);
    const thirdTextContentRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [bgState, setBgState] = useState('initial');

    const addFloatingEffect = (element) => {
        gsap.to(element, {
            y: '+=10',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });
    };

    useEffect(() => {
        const logo = logoRef.current;
        const img1 = img1Ref.current;
        const img2 = img2Ref.current;
        const img3 = img3Ref.current;
        const img4 = img4Ref.current;



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

    const animateTransition = (newState) => {
        const tl = gsap.timeline({
            onComplete: () => setIsAnimating(false)
        });

        const transitionDuration = 1;

        tl.to(backgroundRef.current, {
            duration: transitionDuration,
            backgroundImage:
                newState === 'initial'
                    ? 'linear-gradient(220deg, hsl(190deg 67% 63%) 0%, hsl(196deg 68% 61%) 10%, hsl(203deg 64% 61%) 20%, hsl(212deg 55% 62%) 30%, hsl(228deg 40% 62%) 40%, hsl(256deg 29% 58%) 50%, hsl(276deg 32% 57%) 60%, hsl(296deg 33% 55%) 70%, hsl(314deg 47% 56%) 80%, hsl(325deg 64% 58%) 90%, hsl(333deg 81% 59%) 100%)'
                    : newState === 'clicked'
                        ? 'linear-gradient(90deg, #031B1B 0%, #1C0B0D 20%, #31010D 40%, #46070C 60%, #673116 80%, #784724 100%)'
                        : 'linear-gradient(108deg, #00749F, #EFA30E )',
            ease: 'power2.inOut',
        }, 0);

        if (newState === 'clicked') {
            tl.to([img1Ref.current, img2Ref.current, img3Ref.current, img4Ref.current], {
                x: '-100vw',
                duration: transitionDuration,
                ease: 'power2.inOut',
            }, 0);

            tl.to(iceRef.current, {
                opacity: 0,
                duration: transitionDuration / 2,
                ease: 'power2.inOut',
            }, 0);

            tl.to(textContentRef.current, {
                opacity: 0,
                duration: transitionDuration / 2,
                ease: 'power2.inOut',
            }, 0);

            tl.fromTo(newImageRef.current, {
                x: '100vw',
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                duration: transitionDuration,
                ease: 'power2.out',
            }, 0);

            tl.fromTo(newTextContentRef.current, {
                opacity: 0,
                y: 20,
            }, {
                opacity: 1,
                y: 0,
                duration: transitionDuration / 2,
                ease: 'power2.out',
            }, transitionDuration / 2);

            tl.fromTo([newImg1Ref.current, newImg2Ref.current, newImg3Ref.current, newImg4Ref.current], {
                x: (index) => index % 2 === 0 ? '100vw' : '-100vw',
                y: (index) => index < 2 ? '-100vh' : '100vh',
                opacity: 0,
            }, {
                x: 0,
                y: 0,
                opacity: 1,
                duration: transitionDuration,
                ease: 'power2.out',
                stagger: 0.2,
            }, 0);

            tl.add(() => {
                addFloatingEffect(newImg1Ref.current);
                addFloatingEffect(newImg2Ref.current);
                addFloatingEffect(newImg3Ref.current);
                addFloatingEffect(newImg4Ref.current);
            }, transitionDuration);
        } else if (newState === 'thirdState') {
            tl.to(newImageRef.current, {
                x: '-100vw',
                duration: transitionDuration,
                ease: 'power2.inOut',
            }, 0);

            tl.to(newTextContentRef.current, {
                opacity: 0,
                duration: transitionDuration / 2,
                ease: 'power2.inOut',
            }, 0);

            tl.to([newImg1Ref.current, newImg2Ref.current, newImg3Ref.current, newImg4Ref.current], {
                x: '-100vw',
                duration: transitionDuration,
                ease: 'power2.inOut',
            }, 0);

            tl.fromTo(thirdImageRef.current, {
                x: '100vw',
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                duration: transitionDuration,
                ease: 'power2.out',
            }, 0);

            tl.fromTo(thirdTextContentRef.current, {
                opacity: 0,
                y: 20,
            }, {
                opacity: 1,
                y: 0,
                duration: transitionDuration / 2,
                ease: 'power2.out',
            }, transitionDuration / 2);
        } else {
            tl.to([newImageRef.current, thirdImageRef.current], {
                x: '100vw',
                duration: transitionDuration,
                ease: 'power2.inOut',
            }, 0);

            tl.to([newTextContentRef.current, thirdTextContentRef.current], {
                opacity: 0,
                duration: transitionDuration / 2,
                ease: 'power2.inOut',
            }, 0);

            tl.to([img1Ref.current, img2Ref.current, img3Ref.current, img4Ref.current], {
                x: 0,
                duration: transitionDuration,
                ease: 'power2.inOut',
            }, 0);

            tl.to(iceRef.current, {
                opacity: 1,
                duration: transitionDuration / 2,
                ease: 'power2.inOut',
            }, transitionDuration / 2);

            tl.to(textContentRef.current, {
                opacity: 1,
                duration: transitionDuration / 2,
                ease: 'power2.inOut',
            }, transitionDuration / 2);
        }
    };

    const handleClick = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        setBgState(prevState => {
            const newState = prevState === 'initial' ? 'clicked' : prevState === 'clicked' ? 'thirdState' : 'initial';
            animateTransition(newState);
            return newState;
        });
    };

    return (
        <div onClick={handleClick} className={'bg'}>
            <div className={'content-lander'}>
                <div ref={textContentRef}>
                    <div className={'flex justify-center'}>
                        <p className={'lobster-two-regular text-white text-[128px]'}>
                            <span className={'font-extrabold mr-[-25px]'}>T</span>aste the
                            <span className={'font-extrabold mr-[-8px]'}>W</span>onder
                        </p>
                    </div>
                    <p className={'flex boldL ml-[30px] mb-[30px] text-[24px] text-white'}>
                        Serving happiness since 1945
                    </p>

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
                <div ref={newTextContentRef} style={{opacity: 0, position: 'absolute', top: 0, left: 0}}>
                    <div className={'flex justify-center'}>
                        <p className={'lobster-two-regular text-white lh text-[128px] w-[1200px]'}>
                            <span className={'font-extrabold'}>I</span>ndulge in <span
                            className={'font-extrabold'}>O</span>ur <span className={'font-extrabold'}>S</span>weet
                            <span className={'font-extrabold mr-[-25px]'}> T</span>reets
                        </p>
                    </div>
                    <p className={'flex boldL  ml-[30px] mb-[30px] text-[24px] text-white w-[800px]'}>
                        Goey, chewy, munchy or melty, our yumalicious desserts put the cherry on top of treat time.
                    </p>

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
                <div ref={thirdTextContentRef} style={{opacity: 0, position: 'absolute', top: 0, left: 0}}>
                    <div className={'flex justify-center'}>
                        <p className={'lobster-two-regular ml-[20px] text-white lh text-[128px] w-[1200px]'}>
                            <span className={'font-extrabold'}>C</span>hill <span className={'font-extrabold'}>O</span>ut with <span className={'font-extrabold'}>O</span>ur<span className={'font-extrabold'}> S</span>hakes
                        </p>
                    </div>
                    <p className={'flex boldL  ml-[30px] mb-[30px] text-[24px] text-white w-[800px]'}>
                        Perfect treat for a hot summer day
                    </p>

                    <div className="l-btn ml-[30px]">
                        <span>Order Now</span>
                        <div className="icon-container">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="text-white h-6">
                                <path
                                    d="M12 3.25C12 4.17577 12.912.9164 5.55921 13.8432 6.72158C15.0364 8.21813 16.4612 9.52593 18.0953 10.524C19.3189 11.2713 20.8055 11.9894 22 11.9894M12 20.75C12 19.8242 12.9164 18.4408 13.8432 17.2784C15.0364 15.7819 16.4612 14.4741 18.0953 13.476C19.3189 12.7287 20.8055 12.0106 22 12.0106M22 12H2"
                                    stroke="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`background-land`} ref={backgroundRef}>
                <div className={'flex'}>
                    <img className={'img1'} src={caramel} ref={img1Ref}/>
                    <img className={'img2'} src={caramel} ref={img2Ref}/>
                    <img className={'img3'} src={caramel2} ref={img3Ref}/>
                    <img className={'img4'} src={caramel2} ref={img4Ref}/>
                    <img className={'new-image z-[3]'}  src={newImage} ref={newImageRef} style={{opacity: 0, position: 'absolute'}}/>
                    <img className={'new-caramel1'} src={newCaramel1} ref={newImg1Ref} style={{opacity: 0, position: 'absolute'}}/>
                    <img className={'new-caramel2'} src={newCaramel2} ref={newImg2Ref} style={{opacity: 0, position: 'absolute'}}/>
                    <img className={'new-caramel3'} src={newCaramel3} ref={newImg3Ref} style={{opacity: 0, position: 'absolute'}}/>
                    <img className={'new-caramel4'} src={newCaramel4} ref={newImg4Ref} style={{opacity: 0, position: 'absolute'}}/>
                    <img className={'third-image z-[3]'} src={thirdImage} ref={thirdImageRef} style={{opacity: 0, position: 'absolute'}}/>
                </div>
                <img src={ice} className={'z-[0]'} ref={iceRef}/>
            </div>
        </div>
    );
};
export default Lander;



























