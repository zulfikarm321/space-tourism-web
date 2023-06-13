import { Link } from 'react-router-dom';
import './home.scss';

function Home() {
    return (
        <div className="home">
            <header>
                <p className="home-sub-heading">SO, YOU WANT TO TRAVEL TO</p>
                <h1 className="home-heading">SPACE</h1>
                <p className="paragraph">
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
            </header>
            <Link to="/destination">
                <button className="btn-explore">EXPLORE</button>
            </Link>
        </div>
    );
}

export default Home;
