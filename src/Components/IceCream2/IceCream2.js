// import React, { useEffect, useRef ,useState} from 'react';
// import gsap from 'gsap';
// import './IceCream.css';
// import ice from '../../images/mango_ice_cream.webp';
// import caramel from '../../images/mango2.webp';
// import caramel2 from '../../images/mango1.webp';
// import cone from '../../images/scoop-wafflecone.png';
// import plus from '../../images/plus.svg';
// const IceCream = () => {
//     const logoRef = useRef(null);
//     const img1Ref = useRef(null);
//     const img2Ref = useRef(null);
//     const img3Ref = useRef(null);
//     const img4Ref = useRef(null);
//     const img5Ref = useRef(null);
//     const iceRef = useRef(null);
//     const coneRef = useRef(null);
//     const textContentRef = useRef(null);
//     const backgroundRef = useRef(null);
//     const [AllergyAns,setAllergyAns] = useState(false)
//     const [ingredients,setIngredient] = useState(false)
//     const [scrollY, setScrollY] = useState(0);
//     const [horizontalMove, setHorizontalMove] = useState(0);
//
//
//
//
//
//
//
//     const handleScroll = () => {
//         setScrollY(window.scrollY);
//     };
//
//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//
//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//
//     useEffect(() => {
//         const ice = iceRef.current;
//         const cone = coneRef.current;
//
//         if (ice && cone) {
//             const viewportHeight = window.innerHeight;
//             const scrollThreshold = viewportHeight * 0.8; // 80% of viewport height
//             const minScale = 0.4; // Minimum scale factor
//             const maxScale = 1; // Maximum scale factor
//             const maxHorizontalMove = 500; // Maximum rightward movement in pixels
//
//             const scale = Math.max(minScale, maxScale - (scrollY / scrollThreshold) * (maxScale - minScale));
//             const finalScale = scrollY > scrollThreshold ? minScale : scale;
//
//             // Calculate the distance to move the ice cream down
//             const moveDown = (1 - finalScale) * 800; // Adjust the 800 value as needed
//
//             // Calculate horizontal movement
//             const horizontalMove = Math.min(maxHorizontalMove, (scrollY / scrollThreshold) * maxHorizontalMove);
//             setHorizontalMove(horizontalMove);
//
//             gsap.to(ice, {
//                 scale: finalScale,
//                 y: moveDown-250,
//                 x: horizontalMove,
//                 duration: 0.3,
//                 ease: 'power2.out',
//             });
//
//             gsap.to(cone, {
//                 scale: finalScale,
//                 x: horizontalMove,
//                 y:-250,
//                 duration: 0.3,
//                 ease: 'power2.out',
//             });
//         }
//     }, [scrollY]);
//
//
//
//
//     // useEffect(() => {
//     //     const ice = iceRef.current;
//     //     const cone = coneRef.current;
//     //
//     //     if (ice && cone) {
//     //         const viewportHeight = window.innerHeight;
//     //         const scrollThreshold = viewportHeight * 0.8;
//     //         const minScale = 0.4;
//     //         const maxScale = 1;
//     //         const maxHorizontalMove = 500;
//     //
//     //         const scale = Math.max(minScale, maxScale - (scrollY / scrollThreshold) * (maxScale - minScale));
//     //         const finalScale = scrollY > scrollThreshold ? minScale : scale;
//     //
//     //         // Calculate the distance to move the ice cream down
//     //         const moveDown = (1 - finalScale) * 800;
//     //
//     //         // Calculate horizontal movement
//     //         const horizontalMove = Math.min(maxHorizontalMove, (scrollY / scrollThreshold) * maxHorizontalMove);
//     //
//     //         // Calculate upward movement based on scroll progress
//     //         const maxUpwardMove = 250; // Maximum upward movement for ice cream
//     //         const upwardMove = (scrollY / scrollThreshold) * maxUpwardMove;
//     //
//     //         gsap.to(ice, {
//     //             scale: finalScale,
//     //             y: moveDown - upwardMove, // Combine downward movement with upward offset
//     //             x: horizontalMove,
//     //             duration: 0.3,
//     //             ease: 'power2.out',
//     //         });
//     //
//     //         gsap.to(cone, {
//     //             scale: finalScale,
//     //             y: -200 * (scrollY / scrollThreshold), // Gradually move up to 50px
//     //             x: horizontalMove,
//     //             duration: 0.3,
//     //             ease: 'power2.out',
//     //         });
//     //     }
//     // }, [scrollY]);
//
//
//
//
//
//
//     const addFloatingEffect = (element) => {
//         gsap.to(element, {
//             y: '+=10',
//             duration: 1.5,
//             repeat: -1,
//             yoyo: true,
//             ease: 'sine.inOut',
//         });
//     };
//
//     useEffect(() => {
//         const img1 = img1Ref.current;
//         const img2 = img2Ref.current;
//         const img3 = img3Ref.current;
//         const img4 = img4Ref.current;
//         const img5 = img5Ref.current;
//
//         const tl = gsap.timeline({ delay: 0.2 });
//
//         // Set initial position to center
//         gsap.set([img1, img2, img3, img4, img5], {
//             x: '105%',
//             y: '-40%',
//             xPercent: -50,
//             yPercent: -50,
//             scale: 0,
//             opacity: 0,
//         });
//
//         // Animate from center to final positions
//         tl.to([img1, img2, img3, img4, img5], {
//             scale: 1,
//             opacity: 1,
//             duration: 0.5,
//             stagger: 0.1,
//         })
//             .to(img1, {
//                 x: '1100px',
//                 y: '200px',
//                 rotate: 12,
//                 duration: 1,
//                 ease: 'power2.out',
//             }, '-=0.3')
//             .to(img2, {
//                 x: '300px',
//                 y: '-450px',
//                 rotate: 290,
//                 duration: 1,
//                 ease: 'power2.out',
//             }, '-=0.9')
//             .to(img3, {
//                 x: '-200px',
//                 y: '-200px',
//                 rotate: 40,
//                 duration: 1,
//                 ease: 'power2.out',
//             }, '-=0.9')
//             .to(img4, {
//                 x: '700px',
//                 y: '-300px',
//                 rotate: 60,
//                 duration: 1,
//                 ease: 'power2.out',
//             }, '-=0.9')
//             .to(img5, {
//                 x: '-400px',
//                 y: '200px',
//                 rotate: 60,
//                 duration: 1,
//                 ease: 'power2.out',
//             }, '-=0.9')
//             .then(() => {
//                 addFloatingEffect(img1);
//                 addFloatingEffect(img2);
//                 addFloatingEffect(img3);
//                 addFloatingEffect(img4);
//                 addFloatingEffect(img5);
//             });
//     }, []);
//
//
//
//     return (
//         <div className={'icr-bg'}>
//             <div className={'circle-icr'}></div>
//             <div className={'circle2-icr'}></div>
//             <div className={'icr-content-lander'}>
//                 <div ref={textContentRef} className={'icr-text-container'}>
//                     <div className={'icr-maintext'}>
//                         <p className={'poppins-medium icr-text-inner'}>
//                             Mango Sticky
//                             Rice
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className={`icr-background-land`} >
//                 <div>
//                     <img className={'icr-img1'} src={caramel} ref={img1Ref}/>
//                     <img className={'icr-img2'} src={caramel} ref={img2Ref}/>
//                     <img className={'icr-img3'} src={caramel2} ref={img3Ref}/>
//                     <img className={'icr-img4'} src={caramel2} ref={img4Ref}/>
//                     <img className={'icr-img5'} src={caramel2} ref={img5Ref}/>
//                 </div>
//
//                 <img src={ice} ref={iceRef} className="ice-cream-img "/>
//                 <img src={cone} ref={coneRef} className="cone-img"/>
//
//
//                 <div className={'content-icr'}>
//                     <div className={'content-icr-head'}>
//                         <p className={'content-icr-head-inner poppins-medium '}>Mango Sticky Rice</p>
//                         <p className={'content-icr-head-des'}>Mango and coconut sticky rice ice cream with mango
//                             pieces, coconut shreds and a mango
//                             swirl</p>
//                     </div>
//                     <div className={'icr-accordion-container'}>
//                         <div
//                             className={`icr-allergy-dropdown ${AllergyAns}? 'dropdown-content':'dropdown-content-expanded    ' `}>
//                             <div className={`icr-allergy-container`}>
//                                 <p className={' icr-allergy-head poppins-medium '}>Allergens</p>
//                                 <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
//                                      className={`rotate-180 transition-transform  ${AllergyAns ? 'rotate-360 transition-transform' : ''}`}
//                                      onClick={() => setAllergyAns(!AllergyAns)}
//                                 >
//
//                                     <path d="M17 14L12 9L7 14" stroke="#3F2021" stroke-width="1.5"
//                                           stroke-linecap="round" stroke-linejoin="round"></path>
//                                 </svg>
//                             </div>
//                             <div className={`faq-answer ${AllergyAns ? 'open' : ''}`}>
//                                 <div className={'icr-allergy-ans'}>
//                                     Milk
//                                 </div>
//                             </div>
//
//                         </div>
//                         <div className={`${ingredients}? 'dropdown-content':'dropdown-content-expanded    ' `}>
//                             <div className={`ingredients-ques `}>
//                                 <p className={'ingredients-ques-head poppins-medium '}>Ingredients</p>
//                                 <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
//                                      className={`rotate-180 transition-transform  ${ingredients ? 'rotate-360 transition-transform' : ''}`}
//                                      onClick={() => setIngredient(!ingredients)}
//                                 >
//
//                                     <path d="M17 14L12 9L7 14" stroke="#3F2021" stroke-width="1.5"
//                                           stroke-linecap="round" stroke-linejoin="round"></path>
//                                 </svg>
//                             </div>
//                             <div className={`faq-answer ${ingredients ? 'open' : ''}`}>
//                                 <div className={'ingredients-ans'}>
//                                     Cream, Mango Flavoured Ribbon 12.0% [Sugar, Mango Puree, Water, Stabiliser-
//                                     Hydroxypropyl Distarch Phosphate, Flavouring, Acidity Regulator- Citric Acid,
//                                     Colouring- Beta Carotene], Nonfat (Skim) Milk, Coconut Sticky Rice Flavoured Base
//                                     with Coconut Pieces 8.0% [Water, Sugar, Coconut Cream, Desiccated Coconut Pieces,
//                                     Stabiliser- Hydroxypropyl Distarch Phosphate, Flavouring, Acidity Regulator- Citric
//                                     Acid, Emulsifier- Sunflower Lecithin, Rice Flour], Sugar, Glucose Syrup, Alphonso
//                                     Mango Base 4.5% [Alphonso Mango Puree, Sugar, Water, Flavouring, Colouring- Beta
//                                     Carotene, Stabiliser- Pectin, Acidity Regulator- Citric Acid],Sweetened Mango in
//                                     Syrup 3.5% [Mango, Sugar, Water, Mango Puree
//                                 </div>
//                             </div>
//
//                         </div>
//                         <div className={'icr-twobtn-container'}>
//                             <div className="l-btn-icr">
//                                 <span className={'font-extrabold'}>Order Now</span>
//                                 <div className="icon-container-icr">
//                                     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
//                                          className="text-white h-6">
//                                         <path
//                                             d="M12 3.25C12 4.17577 12.9164 5.55921 13.8432 6.72158C15.0364 8.21813 16.4612 9.52593 18.0953 10.524C19.3189 11.2713 20.8055 11.9894 22 11.9894M12 20.75C12 19.8242 12.9164 18.4408 13.8432 17.2784C15.0364 15.7819 16.4612 14.4741 18.0953 13.476C19.3189 12.7287 20.8055 12.0106 22 12.0106M22 12H2"
//                                             stroke="currentColor"></path>
//                                     </svg>
//                                 </div>
//                             </div>
//                             <div className={'l-btn-icr2'}>
//                                 <span className={'font-extrabold'}>Find In-Store</span>
//
//                             </div>
//                         </div>
//                     </div>
//                     <div className={'icr-bottom-ender'}></div>
//                 </div>
//             </div>
//
//         </div>
//     );
// };
//
// export default IceCream;