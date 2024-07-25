// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './App.css'; // We'll put our CSS here
//
// gsap.registerPlugin(ScrollTrigger);
//
// function App() {
//     const footerContainerRef = useRef(null);
//
//     useEffect(() => {
//         const footerContainer = footerContainerRef.current;
//
//         gsap.set(footerContainer, { yPercent: -50 });
//
//         const uncover = gsap.timeline({ paused: true });
//         uncover.to(footerContainer, { yPercent: 0, ease: "none" });
//
//         ScrollTrigger.create({
//             trigger: "section.conclusion",
//             start: "bottom bottom",
//             end: "+=75%",
//             animation: uncover,
//             scrub: true,
//             markers: true
//         });
//
//         return () => {
//             ScrollTrigger.getAll().forEach(t => t.kill());
//         };
//     }, []);
//
//     return (
//         <div className="scroller">
//             <section className="intro">
//                 <h1>Parallax Footer</h1>
//                 <h2>GSAP ScrollTrigger</h2>
//             </section>
//
//             <section className="description"></section>
//
//             <section className="conclusion"></section>
//
//             <footer className="footer">
//                 <section className="footer-container" ref={footerContainerRef}>
//                     <div className="footer-row">
//                         <div className="logo"></div>
//                     </div>
//
//                     <div className="footer-row center">
//                         <div className="items">
//                             <div className="item"></div>
//                             <div className="item"></div>
//                             <div className="item"></div>
//                         </div>
//
//                         <div className="circles">
//                             <div className="circle"></div>
//                         </div>
//                     </div>
//
//                     <div className="footer-row">
//                         <div className="foot"></div>
//                     </div>
//                 </section>
//             </footer>
//         </div>
//     );
// }
//
// export default App;
import React from 'react';
import Lander from "./Components/Lander/Lander";
import NavbarBr from "./Components/NavbarBr/NavbarBr";
import ParallaxSections from "./Parallax";
import Flavours from "./Components/Flavours/Flavours";
import MainContent from "./MainContent/MainContent";
import IceCream from "./Components/IceCream/IceCream";
import AfterImage from "./Components/IceCream/AfterImage";
import IceCream2 from "./Components/IceCream2/IceCream2";
import AfterImage2 from "./Components/IceCream2/AfterImage2";
import IceCreamParent from "./IceCreamParent";
import IceCream3 from "./Components/IceCream3/IceCream3";
import AfterImage3 from "./Components/IceCream3/AfterImage3";
import './App.css'
import MovingText from "./Components/MovingText/MovingText";
import Rewards from "./Components/Rewards/Rewards";
import Franchise from "./Components/Franchise/Franchise";
import Franchise2 from "./Components/Franchise/Franchise2";
import FranMovingText from "./Components/Franchise/FranMovingText";
import FranFormFaq from "./Components/Franchise/FranFormFaq";
import FranchiseParent from "./Components/Franchise/FranchiseParent";
import Footer from "./Components/Footer/Footer";
function App() {
    return (
        <div>
            <Lander/>
            <div className={'mt-[1200px] z-[0] backgy'}>
                <div className={'jade-slider'}></div>
                <Flavours/>
            </div>

            <div className={'mt-[-2100px]'}>
                <IceCream/>
            </div>
            <div className={'mt-[-900px] mb-[500px]'}>
                <AfterImage/>
            </div>
            <div className={'purple-spacer'}></div>
            <IceCream2/>
            <div className={'mt-[-1150px]'}>
                <div className={'pink-spacer'}></div>
                <IceCream3/>
            </div>
            <div className={'mt-[-1100px]'}>
                <Rewards/>
            </div>
            <div className={'mt-[-600px]'}>
                <FranchiseParent/>
            </div>
            <div className={'bg-[#3E2723]'}>
                <div className={'footer-spacer'}></div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
