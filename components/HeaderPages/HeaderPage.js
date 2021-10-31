import {FaSun, FaBars, FaMoon, FaCode, FaPaintBrush, FaHandSparkles, FaJoint, FaHome, FaBrush, FaStar} from 'react-icons/fa'
import {CgCardSpades} from 'react-icons/cg'
import Link from 'next/link'

function openNav() {
    let menu = document.getElementById("sideMenu");
        menu.classList.add("show");

    let button = document.getElementById("menuBtn");
        button.classList.add("hide")
        button.classList.remove("show")

  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    let menu = document.getElementById("sideMenu");
        menu.classList.remove("show"); 

    let button = document.getElementById("menuBtn");
        button.classList.add("show")
        button.classList.remove("hide")
  }

const HeaderPage = () => {
    return (
        <navbar className="nav-black">
            <nav className="menu">
                <Link href="/"><h3 className="title">Hiago <FaSun className="sun"/> Patrick</h3></Link>
                <button id="menuBtn" className="show" onClick={openNav}><FaBars/></button>
            </nav>
            <div id="sideMenu" className="asideMenu">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <p className="itemMenu"><Link href="/" > Home  </Link> <FaHome /></p>
                <p className="itemMenu"><Link href="/tarot" > Tarot  </Link><CgCardSpades/></p>
                <p className="itemMenu"><Link href="/" className="itemMenu">Artes </Link> <FaPaintBrush /> </p>
                <p className="itemMenu"><Link href="/reiki" className="itemMenu">Reiki </Link> <FaHandSparkles /> </p>
                <p className="itemMenu"><Link href="/bruxaria" className="itemMenu">Bruxaria </Link> <FaStar /> </p>
                <p className="itemMenu"><Link href="/portifolio" className="itemMenu">Portifolio</Link> <FaCode /></p>
            </div>  
        </navbar>
    );
};

export default HeaderPage;

