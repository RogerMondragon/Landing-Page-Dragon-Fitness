import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Dragon Fitness</div>
        <ul className={styles.links}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/productos">Productos</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
        </ul>
        </nav>
    );
};

export default Navbar;
