import {FaSun, FaBars, FaMoon, FaCode, FaPaintBrush, FaHandSparkles, FaJoint, FaHome, FaBrush, FaStar} from 'react-icons/fa'
import {CgCardSpades} from 'react-icons/cg'
import styles from '../../styles/SideMenu.module.css'
import Link from 'next/dist/client/link';

const SideMenu = () => {
    return (
        <div id="sideMenu" className={styles.asideMenu}>
            <a className={styles.closebtn} >&times;</a>
            <p className={styles.itemMenu}><Link href="/"> Home </Link> <FaHome /></p>
            <p className={styles.itemMenu}><Link href="/tarot"> Tarot  </Link><CgCardSpades/></p>
            <p className={styles.itemMenu}><Link href="/" >Artes </Link> <FaPaintBrush /> </p>
            <p className={styles.itemMenu}><Link href="/reiki">Reiki </Link> <FaHandSparkles /> </p>
            <p className={styles.itemMenu}><Link href="/bruxaria">Bruxaria </Link> <FaStar /> </p>
            <p className={styles.itemMenu}><Link href="/portifolio">Portifolio</Link> <FaCode /></p>
        </div>  
    );
}

export default SideMenu;