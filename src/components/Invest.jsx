import React, {useLayoutEffect} from 'react'
import { NavLink } from 'react-router-dom'
const Invest = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
      <div className="invest_page">
        <div className="set_margin_content">
          <h2 className='invest_heading'>Invest in vetted small businesses.</h2>
          <p className="invest_para">
            Select the small businesses you want to invest in, see the projected returns, and invest! <a href="#">Learn more</a>.
          </p>
          <div className="invest_search_buttons">
            <div className="invest_search">
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              <span><input type="text" placeholder='Compaign, City State, ZIP' /></span>
            </div>
            <div class="dropdown">
              <button class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                All Compaigns
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">All Compaigns</a>
                <a class="dropdown-item" href="#">Active Compaigns</a>
                <a class="dropdown-item" href="#">Funds Compaigns</a>
              </div>
            </div>
          </div>
        </div>

        <div className="invest invest_card_popup">
          <div className="invest_first_group">
            <NavLink to='/prepfood'>
            <div className="invest_card_design" >
              <div className="invest_card invest_carda" >
              </div>
              <div className="invest_card_content">
                <h3 >TLOREN</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>303%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.75%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
            </NavLink>

            <div className="invest_card_design">
              <div className="invest_card invest_cardb">
              </div>
              <div className="invest_card_content">
                <h3>Stone's Throw Foods</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>104%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>12.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="invest_card_design">
              <div className="invest_card invest_cardc">
              </div>
              <div className="invest_card_content">
                <h3>Harvie #2</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>




          
          <div className="invest_second_group">
            <div className="invest_card_design">
              <div className="invest_card invest_cardd">
              </div>
              <div className="invest_card_content">
                <h3>Harbor Coffee</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="invest_card_design">
              <div className="invest_card invest_carde">
              </div>
              <div className="invest_card_content">
                <h3>Pop's Bakery</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="invest_card_design">
              <div className="invest_card invest_cardf">
              </div>
              <div className="invest_card_content">
                <h3>Hope Yoga</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invest_first_group">
            <div className="invest_card_design">
              <div className="invest_card invest_cardg">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="invest_card_design">
              <div className="invest_card invest_cardh">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="invest_card_design">
              <div className="invest_card invest_cardi">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invest_first_group">
            <div className="invest_card_design">
              <div className="invest_card invest_cardj">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="invest_card_design">
              <div className="invest_card invest_cardk">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="invest_card_design">
              <div className="invest_card invest_cardl">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invest_first_group">
            <div className="invest_card_design">
              <div className="invest_card invest_cardm">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="invest_card_design">
              <div className="invest_card invest_cardn">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="invest_card_design">
              <div className="invest_card invest_cardo">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invest_first_group">
            <div className="invest_card_design">
              <div className="invest_card invest_cardc">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="invest_card_design">
              <div className="invest_card invest_cardc">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="invest_card_design">
              <div className="invest_card invest_cardc">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invest_first_group">
            <div className="invest_card_design">
              <div className="invest_card invest_cardc">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="invest_card_design">
              <div className="invest_card invest_cardc">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="invest_card_design">
              <div className="invest_card invest_cardc">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invest_first_group">
            <div className="invest_card_design">
              <div className="invest_card invest_cardc">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="invest_card_design">
              <div className="invest_card invest_cardc">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="invest_card_design">
              <div className="invest_card invest_cardc">
              </div>
              <div className="invest_card_content">
                <h3>Tepeyolot Cerveceria</h3>
                <p><i class="fa-solid fa-location-dot"></i>Baltimore, MD</p>
                <p>Tina and Lauren are moving the salon to a new location!</p>
                <div class="w3-dark-grey">
                  <div class="w3-container w3-green w3-center" style={{ width: "100%" }}>496%</div>
                </div>
                <div className="invest_price">
                  <div className="first_invest_price">
                    <p>Funded: $75,850</p>
                    <p>Minimum Target: $25,000</p>
                    <p>Maximum Target: $100,000</p>
                    <p>Time Left: 0</p>
                  </div>
                  <div className="second_invest_price">
                    <h5>11.25%</h5>
                    <p>Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="invest_load_btn">
        <button>Load More</button>
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

export default Invest