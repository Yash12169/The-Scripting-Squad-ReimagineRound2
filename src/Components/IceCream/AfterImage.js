import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../images/mangoLeft.webp'
import img2 from '../../images/mangoRight.webp'
import Rellax from "rellax";

function AfterImage() {
    const rellaxRef = useRef();
    const img1Ref = useRef();


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
        new Rellax(img1Ref.current, {
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
        <div className={'h-[200vh] mt-[200px] '}>
            <div className={'w-screen h-[200vh] flex'}>
                <div className={'flex w-[50%] justify-center'}>
                    <img ref={img1Ref} src={img1} className={`w-[800px] h-[800px] rounded-[45px] mt-[-500px] `}/>
                </div>
                <div className={'flex w-[50%] justify-center'}>
                            <img ref={rellaxRef} src={img2} className={'w-[800px] h-[800px] rounded-[45px] mt-[0px]'}/>
                </div>
            </div>


            {/*<div className={'animate'}></div>*/}
        </div>
    );
}

export default AfterImage;