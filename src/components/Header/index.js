import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="header-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="logo"
          alt="website logo"
        />
        <ul className="navigation-con">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link">Products</Link>
          </li>
          <li>
            <Link className="nav-link">Cart</Link>
          </li>
        </ul>
        <button className="logout-btn">Logout</button>
        <button className="logout-logo-btn">
          <img
            className="logout-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout"
          />
        </button>
      </div>
    </nav>
  )
}

export default Header
