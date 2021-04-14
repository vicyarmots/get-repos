import './header.css';
import { image } from '../../assets/images/';

const Header = () => {
    return (
        <header>
            <div className="content">
                <img src={image} alt="" />
                <h2>Search GitHub</h2>
            </div>
        </header>
    );
};

export default Header;
