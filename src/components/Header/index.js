import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <div className="navbar-header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="navbar-items-container">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Products</li>
        <li className="navbar-item">Cart</li>
      </ul>
      <button type="button" className="logout-desktop-btn">
        Logout
      </button>
      <button type="button" className="logout-mobile-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="logout"
          className="logout-img"
        />
      </button>
    </div>
  </nav>
)
export default Header
