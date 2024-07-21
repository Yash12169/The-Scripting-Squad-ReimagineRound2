// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './Parallax.css';
// import Lander from "./Lander";
// import Flavours from "./Flavours"; // Create this CSS file separately
//
// gsap.registerPlugin(ScrollTrigger);
//
// const ParallaxSections = () => {
//     useEffect(() => {
//         let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);
//
//         gsap.utils.toArray("section").forEach((section, i) => {
//             section.bg = section.querySelector(".bg");
//
//             // Give the backgrounds some random images
//             section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;
//
//             // the first image (i === 0) should be handled differently because it should start at the very top.
//             // use function-based values in order to keep things responsive
//             gsap.fromTo(section.bg, {
//                 backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
//             }, {
//                 backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: section,
//                     start: () => i ? "top bottom" : "top top",
//                     end: "bottom top",
//                     scrub: true,
//                     invalidateOnRefresh: true // to make it responsive
//                 }
//             });
//
//         });
//     }, []);
//
//     return (
//         <>
//
//             <section>
//                 <Flavours/>
//             </section>
//             <section>
//                 <div className="bg"></div>
//                 <h1>Hey look, a title</h1>
//             </section>
//             <section>
//                 <div className="bg"></div>
//                 <h1>They just keep coming</h1>
//             </section>
//             <section>
//                 <div className="bg"></div>
//                 <h1>So smooth though</h1>
//             </section>
//             <section>
//                 <div className="bg"></div>
//                 <h1>Nice, right?</h1>
//             </section>
//         </>
//     );
// };
//
// export default ParallaxSections;
