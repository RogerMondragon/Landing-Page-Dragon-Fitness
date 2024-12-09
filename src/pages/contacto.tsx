import Navbar from "../components/Navbar";
import styles from "../styles/Contacto.module.css";

export default function Contacto() {
    return (
    <>
    <Navbar />
        <main className={styles.contactContainer}>
        <h2>Contáctanos</h2>
        <form className={styles.contactForm}>
            <input
                type="text"
                className={styles.inputField}
                placeholder="Tu nombre"
                required
            />
            <input
                type="email"
                className={styles.inputField}
                placeholder="Tu correo"
                required
            />
            <textarea
                className={styles.inputField}
                placeholder="Tu mensaje"
                rows={5}
                required
            ></textarea>
        <button type="submit" className={styles.submitButton}>
            Enviar
        </button>
        </form>
    </main>
    </>
    );
}
