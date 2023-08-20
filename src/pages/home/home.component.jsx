import { Link } from 'react-router-dom';
import './home.style.scss';

function Home() {
  return (
    <div id="home">
      <div className="header-text">
        <span>SO, YOU WANT TO TRAVEL TO</span>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="buttons-wrapper">
        <Link to="/destination">
          <button className="btn-explore"> EXPLORE</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
