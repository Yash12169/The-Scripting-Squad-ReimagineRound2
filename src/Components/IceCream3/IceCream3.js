import React, { useEffect, useRef,useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './IceCream3.css';

import ice from '../../images/strawberryIce.webp';
import caramel from '../../images/strawberry2.webp';
import caramel2 from '../../images/strawberry1.webp';
import cone from '../../images/scoop-wafflecone.png';
import img1 from "../../images/strawberryLeft.webp";
import img2 from "../../images/cottonRight.webp";
import Rellax from "rellax";

gsap.registerPlugin(ScrollTrigger);

const IceCream3 = () => {
    const textContentRef = useRef(null);
    const [AllergyAns,setAllergyAns] = useState(false)
    const [ingredients,setIngredient] = useState(false)
    const [scrollY, setScrollY] = useState(0);
    const [horizontalMove, setHorizontalMove] = useState(0);
    const containerRef = useRef(null);
    const backgroundRef = useRef(null);
    const iceRef = useRef(null);
    const coneRef = useRef(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);
    const img4Ref = useRef(null);
    const img5Ref = useRef(null);

    const rellaxRef = useRef();
    const imgaRef = useRef();


    useEffect(() => {
        const handleScroll = () => {



        }

        window.addEventListener('scroll', handleScroll);

        new Rellax(".animate", {
            speed: 500,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

        new Rellax(rellaxRef.current, {
            speed: 3,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
        new Rellax(imgaRef.current, {
            speed: -3,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


















    useEffect(() => {
        const container = containerRef.current;
        const background = backgroundRef.current;
        const ice = iceRef.current;
        const coneElement = coneRef.current;

        if (!container || !background || !ice || !coneElement) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                markers: false, // Remove this in production
            }
        });

        tl.to(background, {
            y: '-50%', // Adjust this value to control how much the background moves
            duration: 1,
            ease: 'none',
        }, 0);

        tl.to(ice, {
            scale: 0.4,
            y: 470,
            x: 500,
            duration: 1,
            ease: 'power2.out',
        }, 0);

        tl.to(coneElement, {
            scale: 0.4,
            x: 500,
            y: 0,
            duration: 1,
            ease: 'power2.out',
        }, 0);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

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
        const img1 = img1Ref.current;
        const img2 = img2Ref.current;
        const img3 = img3Ref.current;
        const img4 = img4Ref.current;
        const img5 = img5Ref.current;

        const tl = gsap.timeline({ delay: 0.2 });

        gsap.set([img1, img2, img3, img4, img5], {
            x: '105%',
            y: '-40%',
            xPercent: -50,
            yPercent: -50,
            scale: 0,
            opacity: 0,
        });

        tl.to([img1, img2, img3, img4, img5], {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
        })
            .to(img1, {
                x: '1100px',
                y: '200px',
                rotate: 12,
                duration: 1,
                ease: 'power2.out',
            }, '-=0.3')
            .to(img2, {
                x: '300px',
                y: '-450px',
                rotate: 290,
                duration: 1,
                ease: 'power2.out',
            }, '-=0.9')
            .to(img3, {
                x: '-200px',
                y: '-200px',
                rotate: 40,
                duration: 1,
                ease: 'power2.out',
            }, '-=0.9')
            .to(img4, {
                x: '700px',
                y: '-300px',
                rotate: 60,
                duration: 1,
                ease: 'power2.out',
            }, '-=0.9')
            .to(img5, {
                x: '-400px',
                y: '200px',
                rotate: 60,
                duration: 1,
                ease: 'power2.out',
            }, '-=0.9')
            .then(() => {
                addFloatingEffect(img1);
                addFloatingEffect(img2);
                addFloatingEffect(img3);
                addFloatingEffect(img4);
                addFloatingEffect(img5);
            });
    }, []);

    return (
        <div ref={containerRef} className={'icr-bg'}>
            <div ref={backgroundRef} className={'icr-scrollable-content'}>
                {/*<div className={'circle-icr'}></div>*/}
                {/*<div className={'circle2-icr'}></div>*/}
                <div className={'icr-content-lander'}>
                    <div className={'icr-text-container3'}>
                        <div className={'icr-maintext'}>
                            <p className={'poppins-medium icr-text-inner'}>
                                Strawberry Cheesecake
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`icr-background-land3`}>
                    <div>
                        <img className={'icr-img1'} src={caramel} ref={img1Ref}/>
                        <img className={'icr-img2'} src={caramel} ref={img2Ref}/>
                        <img className={'icr-img3'} src={caramel2} ref={img3Ref}/>
                        <img className={'icr-img4'} src={caramel2} ref={img4Ref}/>
                        <img className={'icr-img5'} src={caramel2} ref={img5Ref}/>
                    </div>
                    <img src={ice} ref={iceRef} className="ice-cream-img"/>
                    <img src={cone} ref={coneRef} className="cone-img"/>
                    <div className={'content-icr'}>
                        <div className={'content-icr-head'}>
                            <p className={'content-icr-head-inner poppins-medium '}>Strawberry Cheesecake</p>
                            <p className={'content-icr-head-des'}>A rich cheesecake flavored ice cream with cheesecake
                                pieces and a strawberry ribbon.</p>
                        </div>
                        <div className={'icr-accordion-container'}>
                            <div
                                className={`icr-allergy-dropdown ${AllergyAns}? 'dropdown-content':'dropdown-content-expanded    ' `}>
                                <div className={`icr-allergy-container`}>
                                    <p className={' icr-allergy-head poppins-medium '}>Allergens</p>
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                         className={`rotate-180 transition-transform  ${AllergyAns ? 'rotate-360 transition-transform' : ''}`}
                                         onClick={() => setAllergyAns(!AllergyAns)}
                                    >

                                        <path d="M17 14L12 9L7 14" stroke="#3F2021" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <div className={`faq-answer ${AllergyAns ? 'open' : ''}`}>
                                    <div className={'icr-allergy-ans'}>
                                        Milk
                                    </div>
                                </div>

                            </div>
                            <div
                                className={`icr-allergy-dropdown ${ingredients}? 'dropdown-content':'dropdown-content-expanded    ' `}>
                                <div className={`icr-allergy-container`}>
                                    <p className={' icr-allergy-head poppins-medium '}>Ingredients</p>
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                         className={`rotate-180 transition-transform  ${ingredients ? 'rotate-360 transition-transform' : ''}`}
                                         onClick={() => setIngredient(!ingredients)}
                                    >

                                        <path d="M17 14L12 9L7 14" stroke="#3F2021" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <div className={`faq-answer ${ingredients ? 'open' : ''}`}>
                                    <div className={'icr-allergy-ans'}>
                                        Cream, Mango Flavoured Ribbon 12.0% [Sugar, Mango Puree, Water, Stabiliser-
                                        Hydroxypropyl Distarch Phosphate, Flavouring, Acidity Regulator- Citric Acid,
                                        Colouring- Beta Carotene], Nonfat (Skim) Milk, Coconut Sticky Rice Flavoured
                                        Base
                                        with Coconut Pieces 8.0% [Water, Sugar, Coconut Cream, Desiccated Coconut
                                        Pieces,
                                        Stabiliser- Hydroxypropyl Distarch Phosphate, Flavouring, Acidity Regulator-
                                        Citric
                                        Acid, Emulsifier- Sunflower Lecithin, Rice Flour], Sugar, Glucose Syrup,
                                        Alphonso
                                        Mango Base 4.5% [Alphonso Mango Puree, Sugar, Water, Flavouring, Colouring- Beta
                                        Carotene, Stabiliser- Pectin, Acidity Regulator- Citric Acid],Sweetened Mango in
                                        Syrup 3.5% [Mango, Sugar, Water, Mango Puree
                                    </div>
                                </div>

                            </div>
                            {/*<div className={`${ingredients}? 'dropdown-content':'dropdown-content-expanded    ' `}>*/}
                            {/*    <div className={`ingredients-ques `}>*/}
                            {/*        <p className={'ingredients-ques-head poppins-medium '}>Ingredients</p>*/}
                            {/*        <svg width="30" height="30" viewBox="0 0 24 24" fill="none"*/}
                            {/*             className={`rotate-180 transition-transform  ${ingredients ? 'rotate-360 transition-transform' : ''}`}*/}
                            {/*             onClick={() => setIngredient(!ingredients)}*/}
                            {/*        >*/}

                            {/*            <path d="M17 14L12 9L7 14" stroke="#3F2021" stroke-width="1.5"*/}
                            {/*                  stroke-linecap="round" stroke-linejoin="round"></path>*/}
                            {/*        </svg>*/}
                            {/*    </div>*/}
                            {/*    <div className={`faq-answer ${ingredients ? 'open' : ''}`}>*/}
                            {/*        <div className={'ingredients-ans'}>*/}
                            {/*            Cream, Mango Flavoured Ribbon 12.0% [Sugar, Mango Puree, Water, Stabiliser-*/}
                            {/*            Hydroxypropyl Distarch Phosphate, Flavouring, Acidity Regulator- Citric Acid,*/}
                            {/*            Colouring- Beta Carotene], Nonfat (Skim) Milk, Coconut Sticky Rice Flavoured*/}
                            {/*            Base*/}
                            {/*            with Coconut Pieces 8.0% [Water, Sugar, Coconut Cream, Desiccated Coconut*/}
                            {/*            Pieces,*/}
                            {/*            Stabiliser- Hydroxypropyl Distarch Phosphate, Flavouring, Acidity Regulator-*/}
                            {/*            Citric*/}
                            {/*            Acid, Emulsifier- Sunflower Lecithin, Rice Flour], Sugar, Glucose Syrup,*/}
                            {/*            Alphonso*/}
                            {/*            Mango Base 4.5% [Alphonso Mango Puree, Sugar, Water, Flavouring, Colouring- Beta*/}
                            {/*            Carotene, Stabiliser- Pectin, Acidity Regulator- Citric Acid],Sweetened Mango in*/}
                            {/*            Syrup 3.5% [Mango, Sugar, Water, Mango Puree*/}
                            {/*        </div>*/}
                            {/*    </div>*/}

                            {/*</div>*/}
                            <div className={'icr-twobtn-container'}>
                                <div className="l-btn-icr">
                                    <span className={'font-extrabold'}>Order Now</span>
                                    <div className="icon-container-icr">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                             className="text-white h-6">
                                            <path
                                                d="M12 3.25C12 4.17577 12.9164 5.55921 13.8432 6.72158C15.0364 8.21813 16.4612 9.52593 18.0953 10.524C19.3189 11.2713 20.8055 11.9894 22 11.9894M12 20.75C12 19.8242 12.9164 18.4408 13.8432 17.2784C15.0364 15.7819 16.4612 14.4741 18.0953 13.476C19.3189 12.7287 20.8055 12.0106 22 12.0106M22 12H2"
                                                stroke="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className={'l-btn-icr2'}>
                                    <span className={'font-extrabold'}>Find In-Store</span>

                                </div>
                            </div>
                        </div>
                        <div className={'icr-bottom-ender'}></div>
                        <div className={'afterimage-container3'}>
                            <div className={'afterimage-container-inner'}>
                                <div className={'afterimage-imagec1'}>
                                    <img ref={imgaRef} src={img1} className={'afterimage-image31'}/>
                                </div>
                                <div className={'afterimage-imagec1'}>
                                    <img ref={rellaxRef} src={img2} className={'afterimage-image32'}/>
                                </div>
                            </div>


                            {/*<div className={'animate'}></div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IceCream3;