import React from 'react';
import logo from '../../images/Baskin_Robbins_2022.png'
import './Footer.css'
import youtube from '../../images/YouTube.png'
import linkedin from '../../images/LinkedIn.png'
import insta from '../../images/Instagram.png'
import twitter from '../../images/TwitterX.png'
import facebook from '../../images/Facebook.png'
import ButtonRipple from "./ButtonRipple";
import PopupComponent from "./ButtonRipple";

function Footer() {
    return (
        <footer className="footer-container">

            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Baskin Robbins Logo"/>
                </div>
                <div className="footer-links">
                    <div className="links-column">
                        <h3>Menu</h3>
                        <ul className={'flex flex-col w-[90px]'}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/stores">Our Stores</a></li>
                            <li><a href="/blogs">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="links-column">
                        <h3>Support</h3>
                        <ul className={'flex flex-col w-[140px]'}>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/franchise">Franchise Enquiry</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="links-column">
                        <h3>Products</h3>
                        <ul className={'flex flex-col w-[100px]'}>
                            <li><a href="/ice-cream">Ice Cream</a></li>
                            <li><a href="/cakes">Cakes</a></li>
                            <li><a href="/sundaes">Sundaes</a></li>
                            <li><a href="/beverages">Beverages</a></li>
                        </ul>
                    </div>
                    <div className="newsletter">
                        <h3 className={'font-bold'}>Subscribe to Our Newsletter</h3>
                        <div className={' inp-container'}>
                            <input type="email" placeholder="Enter your email" className={'f-in'} required/>
                            <PopupComponent/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'h-[2px] ml-[100px] mr-[80px] mt-[50px] mb-[50px] w--[80%] bg-[#3E272333]'}></div>
            <div className={'footer-utils'}>
                <div className={'flex gap-[25px]'}>
                    <div className={'util-item'}>
                        <p className={'textBold'}>Registered Office Address</p>
                        <p>Baskin-Robbins Consumer Care
                            130 Royall Street
                            Canton, MA 02021</p>
                    </div>
                    <div className={'util-item'}>
                        <p>Tel No:800-859-5339</p>
                        <p>Contact Person: Manager - Customer Services For Customer Support please write to
                            : customerservice@dunkinbrands.com</p>
                        <p>Need more information or have a query? Feel free to Contact us.</p>
                    </div>
                    <div className={'util-item'}>
                        <p>Corporate Identification Number (CIN)</p>
                        <p>U40100KA2013PTC093769</p>
                    </div>
                </div>
                <div className={'flex flex-col w-[150px] justify-between text-left '}>
                    <div className={'flex socials justify-end'}>
                        <img src={insta}/>
                        <img src={twitter}/>
                        <img src={youtube}/>
                        <img src={facebook}/>
                        <img src={linkedin}/>
                    </div>
                    <div className={'flex text-right'}>
                        <p> All information is subject to specific conditions. 2024 Ather Energy. All rights
                            reserved</p>
                    </div>
                </div>
            </div>


        </footer>
    );
}

export default Footer;