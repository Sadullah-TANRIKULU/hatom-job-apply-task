import groupRectangleEllipse from "../assets/Group 232.png";


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
          <span className="features-word" >Features</span> of Hatom Token
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
            <img className="rectangle-ellipse-img" src={groupRectangleEllipse} alt="diagramImage" />
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
