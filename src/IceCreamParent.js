import React from 'react';
// import IceCreamFlavor from './IceCreamFlavor';
// import './IceCream.css';

// Import images for all flavors
// import mangoCone from '../../images/scoop-wafflecone.png';
// import mangoBackground1 from '../../images/mango1.webp';
// import mangoBackground2 from '../../images/mango2.webp';
import iceM from './images/mango_ice_cream.webp';
import caramel from './images/mango2.webp';
import caramel2 from './images/mango1.webp';
import cone from './images/scoop-wafflecone.png';

// Import images for other flavors
// import chocolateIce from '../../images/chocolate_ice_cream.webp';
// import chocolateCone from '../../images/chocolate_cone.png';
// import chocolateBackground1 from '../../images/chocolate1.webp';
// import chocolateBackground2 from '../../images/chocolate2.webp';
//
// import vanillaIce from '../../images/vanilla_ice_cream.webp';
// import vanillaCone from '../../images/vanilla_cone.png';
// import vanillaBackground1 from '../../images/vanilla1.webp';
// import vanillaBackground2 from '../../images/vanilla2.webp';
import IceCream2 from "./Components/IceCream2/IceCream2";
import AfterImage from "./Components/IceCream/AfterImage";

const IceCreamParent = () => {
    return (
        <div>
            <IceCream2
                flavorName="Mango Sticky Rice"
                description="Mango and coconut sticky rice ice cream with mango pieces, coconut shreds and a mango swirl"
                iceCreamImage={iceM}
                coneImage={cone}
                floatImage1={caramel}
                floatImage2={caramel2}
                allergens="Milk"
            />
            <AfterImage/>
           <div className={'relative'}>
               <IceCream2
                   flavorName="Mango Sticky Rice"
                   description="Mango and coconut sticky rice ice cream with mango pieces, coconut shreds and a mango swirl"
                   iceCreamImage={iceM}
                   coneImage={cone}
                   floatImage1={caramel}
                   floatImage2={caramel2}
                   allergens="Milk"
               />
           </div>
            {/*<IceCream2*/}
            {/*    flavorName="Rich Chocolate"*/}
            {/*    description="Creamy chocolate ice cream with chocolate chips and a fudge swirl"*/}
            {/*    iceCreamImage={chocolateIce}*/}
            {/*    coneImage={chocolateCone}*/}
            {/*    backgroundImages={[chocolateBackground1, chocolateBackground2]}*/}
            {/*    allergens={["Milk", "Soy"]}*/}
            {/*/>*/}
            {/*<IceCream2*/}
            {/*    flavorName="Classic Vanilla"*/}
            {/*    description="Smooth and creamy vanilla ice cream made with real vanilla beans"*/}
            {/*    iceCreamImage={vanillaIce}*/}
            {/*    coneImage={vanillaCone}*/}
            {/*    backgroundImages={[vanillaBackground1, vanillaBackground2]}*/}
            {/*    allergens={["Milk"]}*/}
            {/*/>*/}
        </div>
    );
};

export default IceCreamParent;