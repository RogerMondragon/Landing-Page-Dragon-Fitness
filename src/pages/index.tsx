import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Swal from "sweetalert2";

export default function Home() {
  const showOffers = () => {
    Swal.fire({
      title: "¡Ofertas del día!",
      html: `
      <div class="offer-container">
        <div class="offer-item">
          <img src="/camisetas deportivas.jpg" alt="Oferta 1" style="width: 100%; border-radius: 10px;"/>
          <p>50% De descuento en Camisetas Deportivas.</p>
        </div>
        <div class="offer-item">
          <img src="/straps gym.jpg" alt="Oferta 2" style="width: 100%; border-radius: 10px;"/>
          <p>20% De descuento en Straps.</p>
        </div>
        <div class="offer-item">
          <img src="/zapatillas gym.png" alt="Oferta 3" style="width: 100%; border-radius: 10px;"/>
          <p>30% de descuento en zapatillas deportivas.</p>
        </div>
      </div>
    `,
      icon: "info",
      confirmButtonText: "Cerrar",
      confirmButtonColor: "#f39c12",
    });
  };

  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Dragon Fitness" className={styles.logo} />
        </div>
        <h1 className={styles.headerTitle}>Bienvenido a Dragon Fitness</h1>
        <p className={styles.headerSubtitle}>
          Encuentra los mejores productos deportivos al mejor precio.
        </p>
        <button className={styles.button} onClick={showOffers}>
          Ver Ofertas
        </button>
      </header>
    </>
  );
}

