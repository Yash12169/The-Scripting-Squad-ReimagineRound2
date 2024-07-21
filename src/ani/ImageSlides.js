
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../ImageSlides.css";

gsap.registerPlugin(ScrollTrigger);

const ImageSlides = () => {
    useEffect(() => {
        const blockRows = document.querySelectorAll(".blocks-row");
        blockRows.forEach((row) => {
            for (let i = 0; i < 16; i++) {
                const block = document.createElement("div");
                block.className = "block";
                row.appendChild(block);
            }
        });

        const blockContainers = document.querySelectorAll(".blocks-container");
        blockContainers.forEach((container) => {
            const rows = container.querySelectorAll(".blocks-row");
            const numRows = rows.length;

            rows.forEach((row, rowIndex) => {
                let blocks = Array.from(row.querySelectorAll(".block"));
                let isTop = container.classList.contains("top");
                let randomizedOrder = gsap.utils.shuffle(blocks.map((block, idx) => idx));

                ScrollTrigger.create({
                    trigger: container,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    onUpdate: (self) => {
                        let progress = self.progress;
                        let rowDelay = 0.3 * (numRows - rowIndex - 1);
                        let adjustedProgress = Math.max(0, Math.min(1, progress - rowDelay));
                        updateBlockOpacity(blocks, randomizedOrder, isTop, adjustedProgress);
                    }
                });
            });
        });

        function updateBlockOpacity(blocks, order, isTop, progress) {
            blocks.forEach((block, idx) => {
                let offset = order.indexOf(idx) / blocks.length;
                let adjustedProgress = (progress - offset) * blocks.length;
                let opacity = isTop
                    ? 1 - Math.min(1, Math.max(0, adjustedProgress))
                    : Math.min(1, Math.max(0, adjustedProgress));

                block.style.opacity = opacity;
            });
        }
    }, []);

    return (
        <div className="container ">
            <section className="hero">
                <h1>Section 1</h1>
            </section>
            <section className="hero-img">
                <img src="https://images.unsplash.com/photo-1719263233866-a4e4908cf3af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" />
                <div className="blocks-container top">
                    <div className="blocks-row"></div>
                    <div className="blocks-row"></div>
                    <div className="blocks-row"></div>
                    <div className="blocks-row"></div>
                </div>
                <div className="blocks-container bottom">
                    <div className="blocks-row"></div>
                    <div className="blocks-row"></div>
                    <div className="blocks-row"></div>
                    <div className="blocks-row"></div>
                </div>
            </section>
            <section className="about">
                <h1>Section 2</h1>
            </section>
            <section className="about-img">
                <img src="https://images.unsplash.com/photo-1718613205605-d933afdd1f36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About" />
                <div className="blocks-container top">
                    <div className="blocks-row"></div>
                    <div className="blocks-row"></div>
                    <div className="blocks-row"></div>
                    <div className="blocks-row"></div>
                </div>
                <div className="blocks-container bottom">
                    <div className="blocks-row"></div>
                    <div className="blocks-row"></div>
                    <div className="blocks-row"></div>
                    <div className="blocks-row"></div>
                </div>
            </section>
            <section className="footer">
                <h1>Section 3</h1>
            </section>
        </div>
    );
}

export default ImageSlides;
