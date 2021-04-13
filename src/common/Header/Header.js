import './header.css';
import { image } from '../../assets/images/';

const Header = () => {
    return (
        <header>
            <img src={image} alt="" />
            <h2>Search GitHub</h2>
        </header>
    );
};

export default Header;
