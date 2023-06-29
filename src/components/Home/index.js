import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="nav-items-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="nav-icons"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="nav-icons"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
        alt="nav carts"
        className="nav-icons"
      />
    </div>
    <div className="banner-sec-bg-container">
      <div className="banner-sec-text-container">
        <h1 className="banner-sec-text-title">
          Clothes That Get You <br /> Noticed
        </h1>
        <p className="banner-sec-text-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-img"
      />
    </div>
  </>
)
export default Home
