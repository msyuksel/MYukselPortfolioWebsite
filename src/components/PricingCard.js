import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

//Don't plan on using this feature anytime soon. Allows for adding paid services
const PricingCard = () => {
    return <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -

                </h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>

            </div>
        </div>
    </div>;
};

export default PricingCard;