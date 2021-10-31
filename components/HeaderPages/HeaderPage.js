import {FaSun, FaBars, FaMoon, FaCode, FaPaintBrush, FaHandSparkles, FaJoint, FaHome, FaBrush, FaStar} from 'react-icons/fa'
import {CgCardSpades} from 'react-icons/cg'
import Link from 'next/link'
import SideMenu from '../SideMenu/SideMenu';



const HeaderPage = () => {
    return (
        <navbar className="nav-black">
            <nav className="menu">
                <Link href="/" passHref><h3 className="title">Hiago <FaSun className="sun"/> Patrick</h3></Link>
                <button id="menuBtn" className="show" ><FaBars/></button>
            </nav>
            <SideMenu id="aside" />
        </navbar>
    );
};

export default HeaderPage;

