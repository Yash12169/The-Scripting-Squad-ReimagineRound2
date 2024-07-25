import React from 'react';
import Franchise2 from "./Franchise2";
import FranFormFaq from "./FranFormFaq";
import './Franchise.css'
import Franchise from "./Franchise";
function FranchiseParent() {
    return (
        <>
            <div className={'white-spacer'}></div>
            <Franchise/>

            <div className={'matt'}>
                <div className={'light-blue-spacer'}></div>
                <Franchise2/>
                <FranFormFaq/>
            </div>
        </>
    );
}

export default FranchiseParent;
