import React from 'react';
import flavour from '../../images/flavour.gif'
import './Flavours.css'
import color1 from '../../images/color4.png'
function Flavours() {
    return (
        <>
            <div className={'w-screen h-screen flavour-container'}>
                <div className={'circle'}></div>
                <div className={'circle2'}></div>
                <div>
                    <div className={'text-white font-extrabold mb-[50px]  text-[96px] w-[1000px] lh poppins-medium ml-[150px] pt-[300px]'}>Explore the BR Range</div>
                    <div className={'text-white ml-[150px] text-[24px] w-[800px]'}>Feast your eyes on fantastical flavours, sundaes, cakes, desserts, beverages and take home
                        packs.
                    </div>
                </div>
                <div>
                    <img src={color1}/>
                </div>
            </div>
        </>
    );
}

export default Flavours;
