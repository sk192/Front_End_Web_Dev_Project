import {Link} from 'react-router-dom';
import './navbar.css';

function HeaderNav(){

    const linkStyle = {
        TextDecoration : "none",
        color :"#fff",
        display:"inline-block",
        fontWeight : 600,
        fontSize:"15px"
    }

    return(
        <>
            <nav className="navbar">
                <div className="navHeader">
                    <ul>
                        <Link to="/" style={linkStyle} >
                            <li>
                                <span>Home</span>
                            </li>
                            
                        </Link>
                        <Link to="/vaccination" style={linkStyle}>
                            <li>
                                <span>Vaccination_Info</span>
                            </li>
                        </Link>
                        <Link to="/covidInfo" style={linkStyle}>
                            <li>
                                <span>Covid_Info</span>
                            </li>
                        </Link>
                        <Link to="/about" style={linkStyle}>
                            <li>
                                <span>About</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    );


}

export default HeaderNav;