// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-logo-container">
        <img
          className="nav-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <button type="button" className="nav-mobile-btn">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav-logout"
          />
        </button>
      </div>

      <div className="nav-content nav-bar-large-container">
        <img
          className="nav-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />

        <ul className="heading-items">
          <li className="list-item">Home</li>
          <li className="list-item">Products</li>
          <li className="list-item">Cart</li>
        </ul>
        <button type="button" className="logout-item">
          Logout
        </button>
      </div>
    </div>

    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-list-item">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav-home"
          />
        </li>
        <li className="nav-menu-list-item">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav-home"
          />
        </li>
        <li className="nav-menu-list-item">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav-home"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
