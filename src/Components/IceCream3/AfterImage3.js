// import React, { useEffect, useRef, useState } from 'react';
// import img1 from '../../images/strawberryLeft.webp'
// import img2 from '../../images/cottonRight.webp'
// import Rellax from "rellax";
// import './IceCream3.css'
// function AfterImage3() {
//     const rellaxRef = useRef();
//     const imgaRef = useRef();
//
//
//     useEffect(() => {
//         const handleScroll = () => {
//
//
//
//         }
//
//         window.addEventListener('scroll', handleScroll);
//
//         new Rellax(".animate", {
//             speed: 500,
//             center: false,
//             wrapper: null,
//             round: true,
//             vertical: true,
//             horizontal: false
//         });
//
//         new Rellax(rellaxRef.current, {
//             speed: 3,
//             center: false,
//             wrapper: null,
//             round: true,
//             vertical: true,
//             horizontal: false
//         });
//         new Rellax(imgaRef.current, {
//             speed: -3,
//             center: false,
//             wrapper: null,
//             round: true,
//             vertical: true,
//             horizontal: false
//         });
//
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//
//     return (
//         <div className={'afterimage-container'}>
//             <div className={'afterimage-container-inner'}>
//                 <div className={'afterimage-imagec1'}>
//                     <img ref={imgaRef} src={img1} className={'afterimage-image'}/>
//                 </div>
//                 <div className={'afterimage-imagec1'}>
//                     <img ref={rellaxRef} src={img2} className={'afterimage-image2'}/>
//                 </div>
//             </div>
//
//
//             {/*<div className={'animate'}></div>*/}
//         </div>
//     );
// }
//
// export default AfterImage3;