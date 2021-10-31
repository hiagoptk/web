import {FaSun, FaBars, FaMoon, FaCode, FaPaintBrush, FaHandSparkles, FaJoint, FaHome, FaBrush, FaStar} from 'react-icons/fa'
import {CgCardSpades} from 'react-icons/cg'
import styles from '../../styles/SideMenu.module.css'
import Link from 'next/dist/client/link';

const SideMenu = () => {
    return (
        <div id="sideMenu" className={styles.asideMenu}>
            <button className={styles.closebtn} >&times;</button>
            <p className={styles.itemMenu}><Link href="/" passHref> Home </Link> <FaHome /></p>
            <p className={styles.itemMenu}><Link href="/tarot"passHref> Tarot  </Link><CgCardSpades/></p>
            <p className={styles.itemMenu}><Link href="/" passHref>Artes </Link> <FaPaintBrush /> </p>
            <p className={styles.itemMenu}><Link href="/reiki"passHref>Reiki </Link> <FaHandSparkles /> </p>
            <p className={styles.itemMenu}><Link href="/bruxaria" passHref>Bruxaria </Link> <FaStar /> </p>
            <p className={styles.itemMenu}><Link href="/portifolio" passHref>Portifolio</Link> <FaCode /></p>
        </div>  
    );
}

export default SideMenu;