import React, {useLayoutEffect} from 'react'
import { NavLink } from 'react-router-dom'
const PrepFood = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
      <div className="prepfood">

        <div className="prep_food_top">
          <h5><NavLink to='/invest'><i class="fa-solid fa-arrow-left"></i></NavLink>Campagins</h5>
          <h2>Twisted Eggroll</h2>
          <h5>Prepared Foods</h5>
          <div className="prepfood_btns">
            <button >Woman-owned</button>
            <button >4-10 years in business</button>
            <button >Use of funds: Expanding</button>
            <button >Minority-owned</button>
          </div>
          <div className="prep_food_social_media">
            <i class="fa-solid fa-globe"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
        <div className="iframe_video">
          <div className="video_carousel_inframe">
            <iframe width="650" height="350" src="https://www.youtube.com/embed/nSBfH15OFbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="inframe_carousel">
              <img src="/images/videoSlider/image1.jpg" alt="not found" />
              <img src="/images/videoSlider/image2.png" alt="" />
              <img src="/images/videoSlider/image3.png" alt="" />
              <img src="/images/videoSlider/image4.png" alt="" />
            </div>
            <div className="prep_food_menu">
              <p style={{ color: "black" }}>Invest</p>
              <p>Meet the team</p>
              <p>Deal Summary</p>
              <p>Ask the owners(5)</p>
              <p>Updates(1)</p>
            </div>

          </div>

          <div className="div_for_btn">
            <div className=" video_content">
              <div className="video_first_content">
                <p className='want_bold'>12.75%</p>
                <p>interest rate</p>
                <p className='want_bold'>18</p>
                <p>investors</p>
                <p>Funding Goal</p>
                <p>Investment Type</p>
                <p>Loan Term</p>
              </div>
              <div className="video_second_content">
                <p className='want_bold'>$14,250</p>
                <p>invested</p>
                <p className='want_bold'>16 Days</p>
                <p>time left</p>
                <p>$25,000 - $124,000</p>
                <p>Debt</p>
                <p>60 months</p>
              </div>
            </div>
            <button className='invest_btn_btn'>Invest</button>
          </div>
        </div>

        <hr />

        <div className="highlights">
          <div className="highlits_box">
          <div className="highlits_left">
            <h3>Highlights</h3>
            <ul>
              <li>Black and LGBTQ+ owned business</li>
              <li>Multiple commercial contracts including the City of Pittsburgh</li>
              <li>Oversubscribed on ZEUS digesters with need to meet increasing demand</li>
              <li>You can invest for as little as $100. Check the photos above to see your potential earnings.</li>
              <li>After a 30-day grace period, Ecotone Renewables will start
                making monthly payments, and you will receive repayments
                quarterly beginning in July 2023. Repayments will be deposited
                to your Honeycomb Wallet</li>
            </ul>
          </div>
          <div className="highlights_right">
            <h3>How to Invest</h3>
            <button><i class="fa-solid fa-reply"></i> Share this Oppertunity</button>
            <button>Offering Document</button>
          </div>
          </div>
          <h3>
            What We Do
          </h3>
          <p>Dylan, Elliott & Kyle are converting food waste into a powerful liquid
            fertilizer!<br /><br />
            Ecotone Renewables is a next generation public benefit corporation advancing sustainability in local communities. Ecotone Renewables empowers communities to achieve sustainability through innovation and climate-smart practices. We exist to support urban agriculture in new ways, as well as improve the earth’s long-term soil health on a path to a healthier environment. Founded in Pittsburgh PA, Ecotone Renewables is scaling anaerobic digestion technology to sustainably process food waste and replenish degraded, nutrient deficient soil.
            <br /><br />
            We sustainably convert food waste into powerful liquid fertilizer. We do this through on-site waste processors called the ZEUS which is a patent-pending and automated anaerobic digester housed in a shipping container. We then produce and sell our signature Soil Sauce organic fertilizer to local farmers, home gardeners, retailers, and plant enthusiasts.
            <br /><br />
            For more on what we do and to see our fertilizer, you can visit our website to learn more.</p>
          <h3>Use of Funds Raised</h3>
          <p>Raising this capital will help expand our impact and revenue generation by 20% through additional food waste processing, fertilizer production, and product sales. The funds spent will include $50,000 on a new ZEUS digester to process all the food waste for the Homewood Senior Center with a contract already in place; $25,000 on operations and distribution of products; and $25,000 on marketing as well as research and development.</p>

        </div>
        <hr />
        <div className="footer_extra_content">
          Ecotone Renewables is offering debt-based securities under Regulation CF (“Reg CF”) through Honeycomb Portal LLC (“Funding Portal”). The campaign may contain forward-looking statements and information relating to the company, its business plan, and its industry. The contents of this profile are meant to be a summary of the information found in the company’s Form C. Before making an investment decision, investors should review the company’s Form C and the Note Purchase Agreement, found in the Offering Documents, for a complete description of its business, offering information, and risks. Remember that investing in private businesses is risky and investors could lose some or all of their investment.<br /><br />
          See the Educational Materials and the FAQ to learn more about crowdfunding on Honeycomb Credit.
        </div>
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

            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
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
    </>
  )
}

export default PrepFood