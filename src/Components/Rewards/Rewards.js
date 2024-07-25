import React, {useEffect, useRef} from 'react';
import MovingText from "../MovingText/MovingText";
import phone from '../../images/Phone.webp'
import './Rewards.css'
import Rellax from "rellax";
import MainContent from "../../MainContent/MainContent";
function Rewards() {




















    return (
        <div className={'rewards-container'}>
         <div>
             <MovingText text={'Rewards'}/>
         </div>
         <div className={'phone-container'}>
            <img className={'phone'} src={phone}/>
             {/*<MainContent/>*/}
             <div className={'rewards-text-container'}>
                 <p className={'rewards-text-head poppins-medium'}>Ordering. Delivery. Free Stuff</p>
                 <p className={'rewards-text-des'}>For serious ice-cream fans only</p>
                 <div className="l-btn-rew">
                     <span>Download the app</span>
                     <div className="icon-container-rew">
                         <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                              className="text-white rotate-90 h-6">
                             <path
                                 d="M12 3.25C12 4.17577 12.9164 5.55921 13.8432 6.72158C15.0364 8.21813 16.4612 9.52593 18.0953 10.524C19.3189 11.2713 20.8055 11.9894 22 11.9894M12 20.75C12 19.8242 12.9164 18.4408 13.8432 17.2784C15.0364 15.7819 16.4612 14.4741 18.0953 13.476C19.3189 12.7287 20.8055 12.0106 22 12.0106M22 12H2"
                                 stroke="currentColor"></path>
                         </svg>
                     </div>
                 </div>
             </div>
         </div>
        </div>
    );
}

export default Rewards;
