import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar({ menuItems }) {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className={styles.topNav}>
            <Link className={styles.logoType} to="/"><span>ralph.</span></Link>
            <button
                className={`${styles.menuButton} ${styles.showMenuButton}`} onClick={() => setShowMenu(!showMenu)}
                type="button">
                <MenuIcon />
            </button>

            <div className={`${styles.itemWrap} ${showMenu ? styles.show : styles.collapsed}`}>
                <ul className={styles.itemList}>
                    {menuItems.map((item, index) =>
                        <li className={styles.navItem} key={index}><Link to={item.path}>{item.name}</Link></li>
                    )}
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;