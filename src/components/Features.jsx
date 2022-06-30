import rectangle100 from "../assets/Rectangle 100.png";
import rectangle101 from "../assets/Rectangle 101.png";
import rectangle102 from "../assets/Rectangle 102.png";
import rectangle104 from "../assets/Rectangle 104.png";
import rectangle104horizontal from "../assets/Rectangle 104 horizontal.png";
import rectangle105 from "../assets/Rectangle 105.png";
import ellipse from "../assets/Ellipse 23.png";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-container-up">
        <div className="dividends">
          <i>$</i>
          <span>9,449,627.26</span>
          <span> Dividends</span>
          <p>Paid out to Hatom Token Holders over 3 years</p>
        </div>
        <div className="buy-token-btn">
          <button>Buy Hatom Tokens</button>
        </div>
      </div>
      <div className="features-container-down">
        <h2 className="features-container-down-header">
          <span>Features</span> of Hatom Token
        </h2>
        <div className="features-container-down-paragraphs">
            <div className="earn-vote">
          <div className="earn">
            <h3>Earn</h3>
            <p>
              Stake your Hatom tokens to earn a share of the protocol's revenue.
              Dividends are paid in EGLD, USDC, MEX, HTM, and RIDE.
            </p>
          </div>
          <div className="vote">
            <h3>Vote</h3>
            <p>
              Decide which token should be listed next, and what upgrade or
              feature should be integrated into the protocol.
            </p>
          </div>
          </div>
          <div className="rectangle-ellipse">
            <div className="rectangle-ellipse-top-left">
              <img src={ellipse} alt="vectors" />
              <img src={rectangle100} alt="vectors" />
              <img src={rectangle102} alt="vectors" />
            </div>
            <div className="rectangle-ellipse-bottom-left">
              <img src={ellipse} alt="vectors" />
              <img src={rectangle101} alt="vectors" />
              <img src={rectangle105} alt="vectors" />
            </div>
            <div className="rectangle-ellipse-top-right">
              <img src={rectangle104} alt="vectors" />
              <img src={rectangle104horizontal} alt="vectors" />
              <img src={ellipse} alt="vectors" />
            </div>
          </div>
          <div className="supply-borrow">
            <h3>Supply & Borrow</h3>
            <p>
              Hatom token holders can use the HTM Money Market to :
              <ul>
                <li>Supply HTM and earn interest on their deposit.</li>
                <li>
                  Use HTM as collateral and take a loan of any available crypto
                  asset.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
