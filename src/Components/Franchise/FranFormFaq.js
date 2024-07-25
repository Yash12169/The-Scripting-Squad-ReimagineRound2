import React, {useState} from 'react';
import './FranFromFaq.css'
import faqimg from '../../images/faq_scoop_dark.png'
function FranFormFaq() {
    const [radio ,setRadio] = useState(false)
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [email,setEmail] = useState('')
    const [mob,setMob] = useState('')
    const [post,setPost] = useState('')
    const [interst,setInterest] = useState('')
    const [but,setBut] = useState(false)
    const [AllergyAns,setAllergyAns] = useState(false)
    const [AllergyAns2,setAllergyAns2] = useState(false)
    const [AllergyAns3,setAllergyAns3] = useState(false)
    const [AllergyAns4,setAllergyAns4] = useState(false)
    const [AllergyAns5,setAllergyAns5] = useState(false)
    const [AllergyAns6,setAllergyAns6] = useState(false)
    const [AllergyAns7,setAllergyAns7] = useState(false)

    return (
        <div>
            <div className={'fran-parent'}>
                <div className={'form-head-container'}>
                    <div className={'form-head poppins-medium'}>
                        <p>Opportunities</p>
                    </div>
                    <div className={'form-text-head poppins-medium'}>
                        <p className={`${fname.length && lname.length && email.length && mob.length && mob.length && post.length && interst.length ? '' : 'pink-border'}`}>Details</p>
                        <p className={`${fname.length && lname.length && email.length && mob.length && mob.length && post.length && interst.length ? 'pink-border' : ''}`}>Complete</p>
                    </div>
                </div>
                <div className={'fran-form-body'}>
                    <div>
                        <p className={'form-body-head'}>Ready to seize the yay?</p>
                        <p className={'form-body-des'}>Subscribe now to stay up-to-date on potential franchising
                            opportunities.</p>
                    </div>
                    <div className={'fran-input-container'}>
                        <div className={'fran-input'}>
                            <input type={"text"} placeholder={"First Name"} onChange={(e) => setFname(e.target.value)}/>
                            <input type={"text"} placeholder={"Last Name"} onChange={(e) => setLname(e.target.value)}/>
                        </div>
                        <div className={'fran-input'}>
                            <input type={"text"} placeholder={"Email"} onChange={(e) => setEmail(e.target.value)}/>
                            <input type={"text"} placeholder={"Mobile Number"}
                                   onChange={(e) => setMob(e.target.value)}/>
                        </div>
                        <div className={'fran-input'}>
                            <input type={"text"} placeholder={"Postcode"} onChange={(e) => setPost(e.target.value)}/>
                            <input type={"text"} placeholder={"State of interest"}
                                   onChange={(e) => setInterest(e.target.value)}/>
                        </div>
                        <div className={'form-radio-container'}>
                            <div className={'form-radio'}>
                                <div className={`${radio ? 'pink-radio' : 'normal-radio'}`}
                                     onClick={() => (setRadio(!radio))}></div>
                                <p>We only send the goods—cross our cones and cups. T&Cs apply</p>
                            </div>
                            <div className="l-btn ml-[30px] type2form">
                                <span>Submit</span>
                                <div className="icon-container">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                         className="h-6 text-white">
                                        <path
                                            d="M12 3.25C12 4.17577 12.9164 5.55921 13.8432 6.72158C15.0364 8.21813 16.4612 9.52593 18.0953 10.524C19.3189 11.2713 20.8055 11.9894 22 11.9894M12 20.75C12 19.8242 12.9164 18.4408 13.8432 17.2784C15.0364 15.7819 16.4612 14.4741 18.0953 13.476C19.3189 12.7287 20.8055 12.0106 22 12.0106M22 12H2"
                                            stroke="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={'captcha'}>This site is protected by reCAPTCHA and the Google<span
                            className={'font-bold'}> Privacy Policy</span> and <span className={'font-bold'}>Terms of Service</span> apply.
                        </div>
                    </div>
                </div>
                <div className={'brown-spacer'}></div>
                <div className={'faq-parent'}>
                    <div className={'fran-faq-content'}>
                        <p className={'faq-content-head poppins-medium'}>FAQS</p>
                        <p className={'faq-content-des poppins-medium '}>Thinking about joining our franchise community? Here are some of the most common questions we get asked.</p>
                        <img className={'faq-img'} src={faqimg}/>
                    </div>
                    <div className={'faq-container-fran'}>
                        <div
                            className={`icr-allergy-dropdown2 ${AllergyAns}? 'dropdown-content2':'dropdown-content-expanded2    ' `}>
                            <div className={`icr-allergy-container2`}>
                                <p className={' icr-allergy-head2 poppins-medium '}>What is total investment
                                    required?</p>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"

                                >

                                    <path d="M17 14L12 9L7 14" stroke="#3F2021" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                     className={`rotate-180 transition-transform  ${AllergyAns ? 'rotate-360 transition-transform' : ''}`}
                                     onClick={() => setAllergyAns(!AllergyAns)}>
                                    <path d="M17 14L12 9L7 14" stroke="#ffffff" stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div className={`faq-answer ${AllergyAns ? 'open' : ''}`}>
                                <div className={'icr-allergy-ans2'}>
                                    The total investment required for a Baskin-Robbins franchise ranges from $275,000 to
                                    $350,000, depending on various factors.
                                </div>
                            </div>

                        </div>


                        <div
                            className={`icr-allergy-dropdown2 ${AllergyAns2}? 'dropdown-content2':'dropdown-content-expanded2    ' `}>
                            <div className={`icr-allergy-container2`}>
                                <p className={' icr-allergy-head2 poppins-medium '}>What are ongoing costs and fees?</p>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"

                                >

                                    <path d="M17 14L12 9L7 14" stroke="#3F2021" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                     className={`rotate-180 transition-transform  ${AllergyAns2 ? 'rotate-360 transition-transform' : ''}`}
                                     onClick={() => setAllergyAns2(!AllergyAns2)}>
                                    <path d="M17 14L12 9L7 14" stroke="#ffffff" stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div className={`faq-answer ${AllergyAns2 ? 'open' : ''}`}>
                                <div className={'icr-allergy-ans2'}>
                                    We have low ongoing fees which typically surround royalty, National Advertising
                                    Levy, and other operating costs. We are happy to explain in more detail.
                                </div>
                            </div>

                        </div>


                        <div
                            className={`icr-allergy-dropdown2 ${AllergyAns3}? 'dropdown-content2':'dropdown-content-expanded2    ' `}>
                            <div className={`icr-allergy-container2`}>
                                <p className={' icr-allergy-head2 poppins-medium '}>Is Financing available?</p>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"

                                >

                                    <path d="M17 14L12 9L7 14" stroke="#3F2021" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                     className={`rotate-180 transition-transform  ${AllergyAns3 ? 'rotate-360 transition-transform' : ''}`}
                                     onClick={() => setAllergyAns3(!AllergyAns3)}>
                                    <path d="M17 14L12 9L7 14" stroke="#ffffff" stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div className={`faq-answer ${AllergyAns3 ? 'open' : ''}`}>
                                <div className={'icr-allergy-ans2'}>
                                    Flexible financing options are available for approved candidates.
                                </div>
                            </div>

                        </div>


                        <div
                            className={`icr-allergy-dropdown2 ${AllergyAns4}? 'dropdown-content2':'dropdown-content-expanded2    ' `}>
                            <div className={`icr-allergy-container2`}>
                                <p className={' icr-allergy-head2 poppins-medium '}>Is prior experience in Restaurant
                                    industry required?</p>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"

                                >

                                    <path d="M17 14L12 9L7 14" stroke="#3F2021" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                     className={`rotate-180 transition-transform  ${AllergyAns4 ? 'rotate-360 transition-transform' : ''}`}
                                     onClick={() => setAllergyAns4(!AllergyAns4)}>
                                    <path d="M17 14L12 9L7 14" stroke="#ffffff" stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div className={`faq-answer ${AllergyAns4 ? 'open' : ''}`}>
                                <div className={'icr-allergy-ans2'}>
                                    While prior industry experience can be advantageous, it is not a strict requirement.
                                    We provide all the training required to operate your store.
                                </div>
                            </div>

                        </div>


                        <div
                            className={`icr-allergy-dropdown2 ${AllergyAns5}? 'dropdown-content2':'dropdown-content-expanded2    ' `}>
                            <div className={`icr-allergy-container2`}>
                                <p className={' icr-allergy-head2 poppins-medium '}>What training is provided?</p>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"

                                >

                                    <path d="M17 14L12 9L7 14" stroke="#3F2021" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                     className={`rotate-180 transition-transform  ${AllergyAns5 ? 'rotate-360 transition-transform' : ''}`}
                                     onClick={() => setAllergyAns5(!AllergyAns5)}>
                                    <path d="M17 14L12 9L7 14" stroke="#ffffff" stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div className={`faq-answer ${AllergyAns5 ? 'open' : ''}`}>
                                <div className={'icr-allergy-ans2'}>
                                    Every new Franchise Partner is required to complete Baskin-Robbins' comprehensive
                                    training program. We equip you with the necessary tools and resources to support
                                    your journey to success. Our operations are known for being world-class, enjoyable,
                                    and straightforward.
                                </div>
                            </div>

                        </div>


                        <div
                            className={`icr-allergy-dropdown2 ${AllergyAns6}? 'dropdown-content2':'dropdown-content-expanded2    ' `}>
                            <div className={`icr-allergy-container2`}>
                                <p className={' icr-allergy-head2 poppins-medium '}>How is location of store
                                    decided?</p>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"

                                >

                                    <path d="M17 14L12 9L7 14" stroke="#3F2021" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                     className={`rotate-180 transition-transform  ${AllergyAns6 ? 'rotate-360 transition-transform' : ''}`}
                                     onClick={() => setAllergyAns6(!AllergyAns6)}>
                                    <path d="M17 14L12 9L7 14" stroke="#ffffff" stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div className={`faq-answer ${AllergyAns6 ? 'open' : ''}`}>
                                <div className={'icr-allergy-ans2'}>
                                    Yes, you can, as long as it does not create a conflict of interest, or prevent you
                                    from being successful in the Baskin-Robbins brand.
                                </div>
                            </div>

                        </div>
                        <div
                            className={`icr-allergy-dropdown2 ${AllergyAns7}? 'dropdown-content2':'dropdown-content-expanded2    ' `}>
                            <div className={`icr-allergy-container2`}>
                                <p className={' icr-allergy-head2 poppins-medium '}>How much can I earn as a Franchise
                                    Partner?</p>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"

                                >

                                    <path d="M17 14L12 9L7 14" stroke="#3F2021" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                     className={`rotate-180 transition-transform  ${AllergyAns7 ? 'rotate-360 transition-transform' : ''}`}
                                     onClick={() => setAllergyAns7(!AllergyAns7)}>
                                    <path d="M17 14L12 9L7 14" stroke="#ffffff" stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div className={`faq-answer ${AllergyAns7 ? 'open' : ''}`}>
                                <div className={'icr-allergy-ans2'}>
                                    Your earnings as a Franchise Partner can vary depending on factors such as location,
                                    competition, rent, whether the store is managed or owner-operated, and financing.
                                    Your success is determined by your dedication and effort - it's your business to
                                    run!
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default FranFormFaq;
