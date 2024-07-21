//
//
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import flavour from '../../images/flavour2.gif';
// import './Flavours.css';
// import scoop1 from '../../images/scoop1.webp';
// import scoop2 from '../../images/scoop2.webp';
// import scoop3 from '../../images/scoop3.webp';
// import scoop4 from '../../images/scoop4.webp';
// import cone from '../../images/scoop-wafflecone.png';
// import Rellax from 'rellax';
//
// gsap.registerPlugin(ScrollTrigger);
//
// function Flavours() {
//     const coneRef = useRef(null);
//     const scoop1Ref = useRef(null);
//     const scoop2Ref = useRef(null);
//     const scoop3Ref = useRef(null);
//     const scoop4Ref = useRef(null);
//
//     useEffect(() => {
//         const coneElement = coneRef.current;
//         const scoop1Element = scoop1Ref.current;
//         const scoop2Element = scoop2Ref.current;
//         const scoop3Element = scoop3Ref.current;
//         const scoop4Element = scoop4Ref.current;
//
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: document.body,
//                 start: 'top top',
//                 end: 'bottom bottom',
//                 scrub: 1,
//                 markers: true,
//             }
//         });
//
//         // Right to left animation
//         tl.fromTo(coneElement, { x: '100vw' }, { x: '65vw', duration: 1 })
//             .fromTo(scoop1Element, { x: '100vw' }, { x: '65vw', duration: 1 }, '-=0.8')
//             .fromTo(scoop2Element, { x: '100vw' }, { x: '65vw', duration: 1 }, '-=0.8')
//             .fromTo(scoop3Element, { x: '100vw' }, { x: '65vw', duration: 1 }, '-=0.8')
//             .fromTo(scoop4Element, { x: '100vw' }, { x: '65vw', duration: 1 }, '-=0.8');
//
//         // Upward movement animation with individual distances and durations
//         tl.to(coneElement, { y: -560, duration: 1 }, '-=0.5')
//             .to(scoop1Element, { y: -520, duration: 1.2 }, '-=0.5')
//             .to(scoop2Element, { y: -480, duration: 1.4 }, '-=0.5')
//             .to(scoop3Element, { y: -440, duration: 1.6 }, '-=0.5')
//             .to(scoop4Element, { y: -400, duration: 1.8 }, '-=0.5');
//     }, []);
//
//     return (
//         <div className="flavours-wrapper">
//             <div className={'w-screen h-screen flavour-container'}>
//                 <div className={'circle'}></div>
//                 <div className={'circle2'}></div>
//                 <div>
//                     <div className={'text-white font-extrabold mb-[50px] text-[96px] w-[1000px] lh poppins-medium ml-[150px] pt-[300px]'}>Explore the BR Range</div>
//                     <div className={'text-white ml-[150px] text-[24px] w-[800px]'}>Feast your eyes on fantastical flavours, sundaes, cakes, desserts, beverages and take home packs.</div>
//                 </div>
//                 <div ref={coneRef} className="ice-cream-item-cone cone-container">
//                     <img src={cone} alt="Ice cream cone" />
//                 </div>
//                 <div ref={scoop1Ref} className="ice-cream-item-scoop1 scoop-container scoop1">
//                     <img src={scoop1} alt="Ice cream scoop 1" />
//                 </div>
//                 <div ref={scoop2Ref} className="ice-cream-item scoop-container scoop2">
//                     <img src={scoop2} alt="Ice cream scoop 2" />
//                 </div>
//                 <div ref={scoop3Ref} className="ice-cream-item scoop-container scoop3">
//                     <img src={scoop3} alt="Ice cream scoop 3" />
//                 </div>
//                 <div ref={scoop4Ref} className="ice-cream-item scoop-container scoop4">
//                     <img src={scoop4} alt="Ice cream scoop 4" />
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Flavours;
