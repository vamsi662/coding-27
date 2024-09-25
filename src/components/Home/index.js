import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-con">
        <div>
          <img
            className="home-mobile-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
          <h1>Clothes That Get You Noticed</h1>
          <p className="desc">
            Fashion is part of the daily air. and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button className="shop-btn">Shop Now</button>
        </div>
        <img
          className="home-desktop-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="home-img"
        />
      </div>
    </>
  )
}

export default Home
