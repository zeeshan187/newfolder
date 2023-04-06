import React, { useState, useLayoutEffect } from 'react'
const Home = () => {
    const [showvideo1, setShowvideo1] = useState(false);
    const [showvideo2, setShowvideo2] = useState(false);
    const [showvideo3, setShowvideo3] = useState(false);
    const [showvideo4, setShowvideo4] = useState(false);
    const [showvideo5, setShowvideo5] = useState(false);
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <div className="set_box_padding">
                <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade home_slider" data-bs-ride="carousel" data-bs-pause='false'>
                    <div className="carousel-indicators">
                        <div className="bar_color_set"><button type="button" id='hii' data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button></div>
                        <div className="bar_color_set"> <button type="button" id='hii' data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button></div>
                        <div className="bar_color_set"> <button type="button" id='hii' data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button></div>
                        <div className="bar_color_set"><button type="button" id='hii' data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button></div>
                        <div className="bar_color_set"> <button type="button" id='hii' data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" aria-label="Slide 5"></button></div>
                    </div>
                    <div className="carousel-inner" >
                        <div className="carousel-item active" data-bs-interval="5000" >
                            <img src="/images/slider/image1.jpeg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <h5>Fee-free overdraft <br />up to $200</h5>
                                <div className="home_input">
                                    <input type="email" placeholder='Enter Your email' />
                                    <button className="signup_content_btn">SignUp</button>
                                </div>
                                <p>Already have any account? <br /> <br />Learn how we collect and use your information by visting our Privacy Policy<br /> <br />Chime is a financial technology componany, not a blank. banking services provided by<br />  The bancorp Bank, N.A. or Stride Bank, N.A.; Member FDIC</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000" >
                            <img src="/images/slider/image2.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <h5>Fee-free overdraft <br />up to $200</h5>
                                <div className="home_input">
                                    <input type="email" placeholder='Enter Your email' />
                                    <button className="signup_content_btn">SignUp</button>
                                </div>
                                <p>Already have any account? <br /> <br />Learn how we collect and use your information by visting our Privacy Policy<br /> <br />Chime is a financial technology componany, not a blank. banking services provided by<br />  The bancorp Bank, N.A. or Stride Bank, N.A.; Member FDIC</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000" >
                            <img src="/images/slider/image3.jpeg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <h5>Fee-free overdraft <br />up to $200</h5>
                                <div className="home_input">
                                    <input type="email" placeholder='Enter Your email' />
                                    <button className="signup_content_btn">SignUp</button>
                                </div>
                                <p>Already have any account? <br /> <br />Learn how we collect and use your information by visting our Privacy Policy<br /> <br />Chime is a financial technology componany, not a blank. banking services provided by<br />  The bancorp Bank, N.A. or Stride Bank, N.A.; Member FDIC</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000" >
                            <img src="/images/slider/image4.jpeg" className="d-block w-100" alt="..." data-pause="false" />
                            <div className="carousel-caption">
                                <h5>Fee-free overdraft <br />up to $200</h5>
                                <div className="home_input">
                                    <input type="email" placeholder='Enter Your email' />
                                    <button className="signup_content_btn">SignUp</button>
                                </div>
                                <p>Already have any account? <br /> <br />Learn how we collect and use your information by visting our Privacy Policy<br /> <br />Chime is a financial technology componany, not a blank. banking services provided by<br />  The bancorp Bank, N.A. or Stride Bank, N.A.; Member FDIC</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000" >
                            <img src="/images/slider/image5.jpeg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <h5>Fee-free overdraft <br />up to $200</h5>
                                <div className="home_input">
                                    <input type="email" placeholder='Enter Your email' />
                                    <button className="signup_content_btn">SignUp</button>
                                </div>
                                <p>Already have any account? <br /> <br />Learn how we collect and use your information by visting our Privacy Policy<br /> <br />Chime is a financial technology componany, not a blank. banking services provided by<br />  The bancorp Bank, N.A. or Stride Bank, N.A.; Member FDIC</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="set_box_padding">
                <div className="home_header_img">
                    <img src="/images/home_header.png" alt="" />
                </div>
            </div>


            <div className="video_container_flex">
                <div className="video_container">
                    <div className="video_container_play">
                        <div className="first_video" onClick={() => setShowvideo1(true)}>
                            <img src="/images/videoHover/image1.png" alt="" />
                        </div>
                        <div className="second_video" onClick={() => setShowvideo2(true)}>
                            <img src="/images/videoHover/image2.png" alt="" />
                        </div>
                        <div className="third_video" onClick={() => setShowvideo3(true)}>
                            <img src="/images/videoHover/image3.png" alt="" />
                        </div>
                        <div className="fourth_video" onClick={() => setShowvideo4(true)}>
                            <img src="/images/videoHover/image4.png" alt="" />
                        </div>
                        <div className="fifth_video" onClick={() => setShowvideo5(true)}>
                            <img src="/images/videoHover/image5.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="fix_video">
                <button className={showvideo1 ? "show_frame_btn" : "hide_frame_btn"} onClick={() => setShowvideo1(false)}>CLOSE <i className="fa-solid fa-xmark"></i></button>
                <button className={showvideo2 ? "show_frame_btn" : "hide_frame_btn"} onClick={() => setShowvideo2(false)}>CLOSE <i className="fa-solid fa-xmark"></i></button>
                <button className={showvideo3 ? "show_frame_btn" : "hide_frame_btn"} onClick={() => setShowvideo3(false)}>CLOSE <i className="fa-solid fa-xmark"></i></button>
                <button className={showvideo4 ? "show_frame_btn" : "hide_frame_btn"} onClick={() => setShowvideo4(false)}>CLOSE <i className="fa-solid fa-xmark"></i></button>
                <button className={showvideo5 ? "show_frame_btn" : "hide_frame_btn"} onClick={() => setShowvideo5(false)}>CLOSE <i className="fa-solid fa-xmark"></i></button>

                <iframe className={showvideo1 ? "show_video_iframe" : "hide_video_iframe"} width="500" height="0" src="https://www.youtube.com/embed/pkYjkcozE5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className={showvideo2 ? "show_video_iframe" : "hide_video_iframe"} width="1000" height="0" src="https://www.youtube.com/embed/shu8-g0BtT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className={showvideo3 ? "show_video_iframe" : "hide_video_iframe"} width="1000" height="0" src="https://www.youtube.com/embed/aI2aqXtfXr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className={showvideo4 ? "show_video_iframe" : "hide_video_iframe"} width="1000" height="0" src="https://www.youtube.com/embed/JTt405gG6P0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className={showvideo5 ? "show_video_iframe" : "hide_video_iframe"} width="1000" height="0" src="https://www.youtube.com/embed/GzM7bx2S2lc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="set_box_padding">
                <div className={showvideo1 || showvideo2 || showvideo3 || showvideo4 || showvideo5 ? "dec_marg_div" : "home_overdraft1"} >
                    <div className="home_overdraft_content" style={{ marginRight: "100px" }}>
                        <h3>Overdraft fee-free with SpotMe</h3>
                        <p>We’ll spot you up to $200 on debit card purchases with no overdraft fees. Eligibility requirements apply.1</p>
                        <button>Learn More</button>
                    </div>
                    <img src="/images/chime_card.png" alt="" />
                </div>
            </div>
            <div className="set_box_padding get_paid">
                <div className="" >
                    <div className="home_overdraft" style={{ margin: "30px 0px" }}>
                        <img src="/images/paid_img.png" alt="" style={{ marginRight: "100px" }} />
                        <div className="home_overdraft_content">
                            <h3>Get paid early</h3>
                            <p>We`ll spot you up to $200 on bebit card purchases with no overdraft fees. Eligibility requirements</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="set_box_padding">
                <div className="home_overdraft" style={{ margin: "50px 0px" }}>
                    <div className="home_overdraft_content" style={{ marginRight: "100px" }}>
                        <h3>Say goodbye to month fees</h3>
                        <p>No overdraft. No minimum balance. No monthly fees. No foreign transaction fees. 60,000+ fee-free ATMs3 at stores you love, like Walgreens®, CVS®, 7-<br />Eleven®, and Circle K. Out-of-network fees apply.</p>
                        <button>Learn More</button>
                    </div>
                    <img src="/images/fees.png" alt="" />
                </div>
            </div>
            <div className="set_box_padding get_paid">
                <div className="">
                    <div className="home_overdraft">
                        <img src="/images/chime_new_card.png" alt="" style={{ marginRight: "100px" }} />
                        <div className="home_overdraft_content">
                            <h3>A new way to build credit</h3>
                            <p>Help increase your FICO Score® by an average of 30 points with our new secured credit card.4 No interest, no annual fees, no credit check to apply. Eligibility requirements apply.5</p>
                            <button>Learn More</button>
                            <p>You earned it, so you deserve to keep it. We believe an online checking account with</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="invest">
                <h3 className='invest_head'>Invest</h3>

                <div className="invest_first_group">
                    <div className="invest_card_design">
                        <div className="invest_card invest_card1">
                            <i className="fa-regular fa-heart"></i>
                            <p><i className="fa-solid fa-flag"></i> Minimum Metl</p>
                        </div>
                        <div className="invest_card_content">
                            <h3>The Picked Chef</h3>
                            <p><i className="fa-solid fa-location-dot"></i>Greensbug, PA</p>
                            <p>The Pickled Chef is purchasing new equipment to increase production!</p>
                            <div className="w3-dark-grey">
                                <div className="w3-container w3-green w3-center" style={{ width: "100%" }}>146%</div>
                            </div>
                        </div>
                    </div>

                    <div className="invest_card_design">
                        <div className="invest_card invest_card2">
                            <i className="fa-regular fa-heart"></i>
                            <p><i className="fa-solid fa-flag"></i> Minimum Metl</p>
                        </div>
                        <div className="invest_card_content">
                            <h3>Moy Bien Tea</h3>
                            <p><i className="fa-solid fa-location-dot"></i>Pittsburgh, PA</p>
                            <p>The Pickled Chef is purchasing new equipment to increase production!</p>
                            <div className="w3-dark-grey">
                                <div className="w3-container w3-green w3-center" style={{ width: "73%" }}>73%</div>
                            </div>
                        </div>
                    </div>
                    <div className="invest_card_design">
                        <div className="invest_card invest_card3">
                            <i className="fa-regular fa-heart"></i>
                            <p><i className="fa-solid fa-flag"></i> Minimum Metl</p>
                        </div>
                        <div className="invest_card_content">
                            <h3>Twisted Eggroll</h3>
                            <p><i className="fa-solid fa-location-dot"></i>Chicago, IL</p>
                            <p>The Pickled Chef is purchasing new equipment to increase production!</p>
                            <div className="w3-dark-grey">
                                <div className="w3-container w3-green w3-center" style={{ width: "52%" }}>52%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="invest_second_group">
                    <div className="invest_card_design">
                        <div className="invest_card invest_card4">
                            <i className="fa-regular fa-heart"></i>
                            <p><i className="fa-solid fa-flag"></i> Minimum Metl</p>
                        </div>
                        <div className="invest_card_content">
                            <h3>Blue Sky Kitchen</h3>
                            <p><i className="fa-solid fa-location-dot"></i>Greensbug, PA</p>
                            <p>The Pickled Chef is purchasing new equipment to increase production!</p>
                            <div className="w3-dark-grey">
                                <div className="w3-container w3-green w3-center" style={{ width: "56%" }}>56%</div>
                            </div>
                        </div>
                    </div>
                    <div className="invest_card_design">
                        <div className="invest_card invest_card5">
                            <i className="fa-regular fa-heart"></i>
                            <p><i className="fa-solid fa-flag"></i> Minimum Metl</p>
                        </div>
                        <div className="invest_card_content">
                            <h3>Harvie</h3>
                            <p><i className="fa-solid fa-location-dot"></i>Pittsburgh, PA</p>
                            <p>The Pickled Chef is purchasing new equipment to increase production!</p>
                            <div className="w3-dark-grey">
                                <div className="w3-container w3-green w3-center" style={{ width: "44%" }}>44%</div>
                            </div>
                        </div>
                    </div>
                    <div className="invest_card_design">
                        <div className="invest_card invest_card6">
                            <i className="fa-regular fa-heart"></i>
                            <p><i className="fa-solid fa-flag"></i> Minimum Metl</p>
                        </div>
                        <div className="invest_card_content">
                            <h3>Loba Pastry + Coffee</h3>
                            <p><i className="fa-solid fa-location-dot"></i>Chicago, IL</p>
                            <p>The Pickled Chef is purchasing new equipment to increase production!</p>
                            <div className="w3-dark-grey">
                                <div className="w3-container w3-green w3-center" style={{ width: "26%" }}>26%</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="explore-btn"> <button className='explain_compains'>Explore more compaigns</button>


            </div>

            <div className="set_box_padding">
                <div className="home_overdraft pay_any_one ">
                    <div className="home_overdraft_content " style={{ marginRight: "100px" }}>
                        <h3>Pay anyone the fast, fee-free way</h3>
                        <p>Pay friends and family fee-free, no matter what bank account they use. They can cash out instantly⁶ and securely, no sign-up needed.</p>
                        <button>Learn More</button>
                    </div>
                    <img src="/images/pay_anyone_img.png" alt="" />
                </div>
            </div>
            <div className="set_box_padding get_paid">
                <div className="">
                    <div className="home_overdraft">
                        <img src="/images/grow_img.png" alt="" style={{ marginRight: "100px" }} />
                        <div className="home_overdraft_content">
                            <h3>Make your money grow fast</h3>
                            <p>2.00% Annual Percentage Yield (APY).7 Set money aside with Automatic Savings features. And never pay a fee on your Savings Account.</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="set_box_padding">
                <div className="home_overdraft  " style={{ margin: "60px 0px" }}>
                    <div className="home_overdraft_content " style={{ marginRight: "100px" }}>
                        <h3>Stay in control with alerts</h3>
                        <p>You’re always in-the-know with daily balance notifications and transaction alerts</p>
                        <button>Learn More</button>
                    </div>
                    <img src="/images/control_img.png" alt="" />
                </div>
            </div>

            <div className="set_box_padding get_paid">
                <div className="">
                    <div className="home_overdraft">
                        <img src="/images/lock_img.png" alt="" style={{ marginRight: "100px" }} />
                        <div className="home_overdraft_content lock_content">
                            <h3>Serious security</h3>
                            <p>Chime uses secure processes to protect your information and help prevent unauthorized use</p>
                            <h3>Protection and peace of mind</h3>
                            <p>Your funds are FDIC insured up to $250,000 through The Bancorp Bank, N.A. or Stride Bank, N.A., Members FDIC.</p>
                            <h3>Anytime, anywhere support</h3>
                            <p>If you need help, Chime’s support channels are standing by 24/7. Reach our friendly team by phone, email, in the app, or check out the Help Center.</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="set_box_padding get_started_bgc">
                <div className="home_overdraft  " style={{ marginTop: "0px" }}>
                    <div className="home_overdraft_content " style={{ marginRight: "100px" }}>
                        <h3>Get started</h3>
                        <p>Applying for an account is free and takes less than 2 minutes. It won’t affect your credit score!</p>
                        <div className="home_draft_btns">
                            <input type="email" placeholder='Enter e-mail' />
                            <button className="signup_btn">Sign Up</button>
                        </div>
                    </div>
                    <img src="/images/started_img.png" alt="" />
                </div>
            </div>

            <div className="set_box_padding">

                <div className="footer_flex">
                    <div className="footer">
                        <div className="benifits">
                            <h2>Benifits</h2>
                            <a href="#">No Monthly Fees</a>
                            <a href="#">Get Paid Early</a>
                            <a href="#">Fee-free Overdraft</a>
                            <a href="#">Build Credit</a>
                            <a href="#">60,000+ Fee-Free ATMs</a>
                            <a href="#">High Yield Savings Account</a>
                            <a href="#">Send and Recieve Money</a>
                            <a href="#">Security and Control</a>
                        </div>
                        <div className="company">
                            <h2>Company</h2>
                            <a href="#">No Monthly Fees</a>
                            <a href="#">About Us</a>
                            <a href="#">Chime Financial, Inc.</a>
                            <a href="#">In the News</a>
                            <a href="#">Careers</a>
                            <a href="#">Blog</a>
                            <a href="#">Security Program</a>
                        </div>
                        <div className="resources">
                            <h2>Resources</h2>
                            <a href="#">Do Not Sell or Share My<br /> personal Information (CA<br /> Residents)</a>
                            <a href="#">Policies</a>
                            <a href="#">Chime U.S. Privacy Notice</a>
                            <a href="#">Help Center</a>
                            <a href="#">Second Chance Banking</a>
                            <a href="#">Become an Affiliate</a>
                            <a href="#">Supporting Those With <br />Disabilites</a>
                            <a href="#">Security and Control</a>
                        </div>
                        <div className="contact">
                            <h2>Contact</h2>
                            <a href="#">844-244-6363</a>
                        </div>
                        <div className="social_media">

                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    <hr />
                    <div className="footer_content">
                        Banking services provided by The Bancorp Bank, N.A. or Stride Bank, N.A., Members FDIC. The Chime Visa® Debit Card is issued by The Bancorp Bank, N.A. or Stride Bank pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted. The Chime Visa® Credit Builder Card and the Chime Visa® Cash Rewards Card are issued by Stride Bank pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa credit cards are accepted. Please see back of your Card for its issuing bank.
                        <br /><br />
                        While Chime doesn’t issue personal checkbooks to write checks, Chime Checkbook gives you the freedom to send checks to anyone, anytime, from anywhere. See your issuing bank’s Deposit Account Agreement for full Chime Checkbook details.
                        <br /><br />
                        By clicking on some of the links above, you will leave the Chime website and be directed to a third-party website. The privacy practices of those third parties may differ from those of Chime. We recommend you review the privacy statements of those third party websites, as Chime is not responsible for those third parties' privacy or security practices.<br /><br />

                        #1 Most Loved Banking App Source: Chime received the highest 2022 Qualtrics® NPS score.
                        <br /><br />
                        Chime SpotMe is an optional, no fee service that requires a single deposit of $200 or more in qualifying direct deposits to the Chime Checking Account each month and Visa debit card activation. All qualifying members will be allowed to overdraw their account up to $20 on debit card purchases and cash withdrawals initially, but may be later eligible for a higher limit of up to $200 or more based on member's Chime Account history, direct deposit frequency and amount, spending activity and other risk-based factors. Your limit will be displayed to you within the Chime mobile app. You will receive notice of any changes to your limit. Your limit may change at any time, at Chime's discretion. Although there are no overdraft fees, there may be out-of-network or third party fees associated with ATM transactions. SpotMe won't cover non-debit card transactions, including ACH transfers, Pay Anyone transfers, or Chime Checkbook
                        transactions. See terms and conditions.
                        <br /><br />
                        Early access to direct deposit funds depends on the timing of the submission of the payment file from the payer. We generally make these funds available on the day the payment file is received, which may be up to 2 days earlier than the scheduled payment date.
                        <br /><br />
                        Out-of-network ATM withdrawal fees apply except at MoneyPass ATMs in a 7-Eleven location or any Allpoint or Visa Plus Alliance ATM. Other fees such as third-party and cash deposit fees may apply.
                        <br /><br />
                        Based on a representative study conducted by Experian®, members who made their first purchase with Credit Builder between June 2020 and October 2020 observed an average FICO® Score 8 increase of 30 points after approximately 8 months. On-time payment history can have a positive impact on your credit score. Late payment may negatively impact your credit score.
                        <br /><br />
                        To be eligible to apply for Credit Builder, you need to have received a qualifying direct deposit of $200 or more to your Checking Account within the last 365 days of your application. The qualifying direct deposit must have been made by your employer, payroll provider, or benefits payer by Automated Clearing House (ACH) deposit. Bank ACH transfers, Pay Anyone transfers, verification or trial deposits from financial institutions, peer to peer transfers from services such as PayPal, Cash App, or Venmo, mobile check deposits, and cash loads or deposits are not qualifying direct deposits.
                        <br /><br />
                        Sometimes instant transfers can be delayed. The recipient must use a valid debit card to claim funds. Once you are approved for a Chime Checking Account, see your issuing bank’s Deposit Account Agreement for full Pay Anyone Transfers details. Please see the back of your Chime debit card for your issuing bank. See terms and conditions.
                        <br /><br />
                        The Annual Percentage Yield ("APY") for the Chime Savings Account is variable and may change at any time. The disclosed APY is effective as of November 17, 2022. No minimum balance required. Must have $0.01 in savings to earn interest.
                        <br /><br />
                        Licenses<br />
                        Chime Capital, LLC, Nationwide Multistate Licensing System ("NMLS") ID 2316451
                        <br /><br />
                        © 2013-2023 Chime. All Rights Reserved.
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home