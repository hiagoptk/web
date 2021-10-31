import {FaSun, FaBars, FaMoon, FaCode, FaPaintBrush, FaHandSparkles, FaJoint} from 'react-icons/fa'
import {CgCardSpades} from 'react-icons/cg'


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
                <h3>Hiago <FaSun/> Patrick</h3>
                <button id="menuBtn" className="show" onClick={openNav}><FaBars/></button>
            </nav>
            <div id="sideMenu" className="asideMenu">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <a className="itemMenu">Artes <FaPaintBrush /></a>
                <a className="itemMenu">Tarot <CgCardSpades /></a>
                <a className="itemMenu">Reiki <FaHandSparkles /></a>
                <a className="itemMenu">Bruxaria <FaMoon /></a>
                <a className="itemMenu">Portifolio <FaCode /></a>
            </div>  
        </navbar>
    );
};

export default HeaderPage;

