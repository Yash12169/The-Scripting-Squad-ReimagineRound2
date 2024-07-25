import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import './MainContent.css';
// Make sure to install these dependencies:
// npm install gsap @studio-freight/lenis

gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const initialClipPaths = [
            "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
            "polygon(33% 0%, 33% 0%, 33% 0%, 33% 0%)",
            "polygon(66% 0%, 66% 0%, 66% 0%, 66% 0%)",
            "polygon(0% 33%, 0% 33%, 0% 33%, 0% 33%)",
            "polygon(33% 33%, 33% 33%, 33% 33%, 33% 33%)",
            "polygon(66% 33%, 66% 33%, 66% 33%, 66% 33%)",
            "polygon(0% 66%, 0% 66%, 0% 66%, 0% 66%)",
            "polygon(33% 66%, 33% 66%, 33% 66%, 33% 66%)",
            "polygon(66% 66%, 66% 66%, 66% 66%, 66% 66%)",
        ];

        const finalClipPaths = [
            "polygon(0% 0%, 33.5% 0%, 33.5% 33%, 0% 33.5%)",
            "polygon(33% 0%, 66.5% 0%, 66.5% 33%, 33% 33.5%)",
            "polygon(66% 0%, 100% 0%, 100% 33%, 66% 33.5%)",
            "polygon(0% 33%, 33.5% 33%, 33.5% 66%, 0% 66.5%)",
            "polygon(33% 33%, 66.5% 33%, 66.5% 66%, 33% 66.5%)",
            "polygon(66% 33%, 100% 33%, 100% 66%, 66% 66.5%)",
            "polygon(0% 66%, 33.5% 66%, 33.5% 100%, 0% 100%)",
            "polygon(33% 66%, 66.5% 66%, 66.5% 100%, 33% 100%)",
            "polygon(66% 66%, 100% 66%, 100% 100%, 66% 100%)"
        ];

        function createMasks() {
            const imgs = containerRef.current.querySelectorAll(".img");
            imgs.forEach((img) => {
                for (let i = 0; i < 9; i++) {
                    const mask = document.createElement("div");
                    mask.classList.add("mask", `m-${i}`);
                    img.appendChild(mask);
                }
            });
        }

        createMasks();

        const rows = gsap.utils.toArray(".row");
        rows.forEach((row) => {
            const imgs = row.querySelectorAll(".img");
            imgs.forEach((img) => {
                const masks = img.querySelectorAll(".mask");
                masks.forEach((mask, index) => {
                    gsap.set(mask, {
                        clipPath: initialClipPaths[index],
                    });
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row,
                        start: "top 75%",
                    },
                });

                const animationOrder = [
                    [".m-1"],
                    [".m-2", ".m-4"],
                    [".m-3", ".m-5", ".m-7"],
                    [".m-6", ".m-8"],
                    [".m-9"],
                ];

                animationOrder.forEach((targets, index) => {
                    tl.to(
                        targets.map((cls) => img.querySelector(cls)),
                        {
                            clipPath: (i, el) => finalClipPaths[Array.from(masks).indexOf(el)],
                            duration: 0.5,
                            ease: "power2.out",
                            stagger: 0.1,
                        },
                        index * 0.125
                    );
                });
            });
        });

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef}>
            <nav>
                <a href="#">Wasteland Couture</a>
                <a href="#">Shop</a>
            </nav>
            <section className="hero">
                <h1>WasteLand Culture</h1>
            </section>
            <section className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </section>
            <section className="hero-imgs">
                <div className="row">
                    <div className="img img-1"></div>
                    <div className="img img-2"></div>
                </div>
            </section>
            <section className="clients">
                <div className="col">
                    <p>Selected Clients</p>
                </div>

                <div className="col">
                    <div className="clients-list">
                        <p>John Smith</p>
                        <p>Jane Doe</p>
                        <p>Michael Johnson</p>
                        <p>Emily Davis</p>
                        <p>Robert Brown</p>
                        <p>Jessica Williams</p>
                        <p>David Miller</p>
                        <p>Mary Wilson</p>
                        <p>Daniel Taylor</p>
                        <p>Sarah Moore</p>

                    </div>
                    <div className="clients-list">
                        <p>John Smith</p>
                        <p>Jane Doe</p>
                        <p>Michael Johnson</p>
                        <p>Emily Davis</p>
                        <p>Robert Brown</p>
                        <p>Jessica Williams</p>
                        <p>David Miller</p>
                        <p>Mary Wilson</p>
                        <p>Daniel Taylor</p>
                        <p>Sarah Moore</p>

                    </div>
                </div>
            </section>


            <section className="clients-imgs">
                <div className="row">
                    <div className="img img-3"></div>
                </div>
            </section>


            <section className="product-filters">

                <div className="col">

                    <p>John Smith</p>
                    <p>Jane Doe</p>
                    <p>Michael Johnson</p>
                    <p>Emily Davis</p>
                    <p>Robert Brown</p>
                    <p>Jessica Williams</p>
                    <p>David Miller</p>
                    <p>Mary Wilson</p>
                    <p>Daniel Taylor</p>
                    <p>Sarah Moore</p>


                </div>
                <div className="col"></div>
            </section>


            <section className="product">

                <div className="row">
                    <div className="img "></div>
                    <div className="img img-4"></div>
                    <div className="img img-5"></div>
                    <div className="img "></div>

                </div>
                <div className="row">
                    <div className="img img-6"></div>
                    <div className="img"></div>
                    <div className="img"></div>
                    <div className="img img-7"></div>
                </div>
                <div className="row">
                    <div className="img "></div>
                    <div className="img img-8"></div>
                    <div className="img"></div>
                    <div className="img img-9"></div>
                </div>
                <div className="row">
                    <div className="img img-10"></div>
                    <div className="img"></div>
                    <div className="img img-11"></div>
                    <div className="img img-12"></div>
                </div>
            </section>


            <section className="about">
                <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It w</p>
                <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It w</p>
            </section>


            <section className="aboout-imgs">
                <div className="row">
                    <div className="img img-13"></div>
                    <div className="img img-14"></div>
                </div>
            </section>


            <section className="outro">
                <div className="row">
                    <div className="img img-15"></div>
                    <div className="img img-16"></div>
                    <div className="img img-17"></div>
                </div>
            </section>
        </div>
    );
};

export default MainContent;
