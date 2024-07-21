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

function App() {
    return (
        <div>
            {/*<ParallaxSections/>*/}
            <NavbarBr/>
            {/*<Flavours/>*/}
            <Lander/>
        </div>
    );
}

export default App;
