import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../images/cottonLeft.webp'
import img2 from '../../images/cottonRight.webp'
import Rellax from "rellax";
import './AfterImage2.css'
function AfterImage2() {
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

    return (
        <div className={'afterimage-container'}>
            <div className={'afterimage-container-inner'}>
                <div className={'afterimage-imagec1'}>
                    <img ref={imgaRef} src={img1} className={'afterimage-image21'}/>
                </div>
                <div className={'afterimage-imagec1'}>
                    <img ref={rellaxRef} src={img2} className={'afterimage-image22'}/>
                </div>
            </div>


            {/*<div className={'animate'}></div>*/}
        </div>
    );
}

export default AfterImage2;