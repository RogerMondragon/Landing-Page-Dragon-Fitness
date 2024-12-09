import Navbar from "../components/Navbar";
import styles from "../styles/Productos.module.css";

const productos = [
    { id: 1, nombre: "Mancuernas", precio: "$150.000", imagen: "/mancuernas.jpg" },
    { id: 2, nombre: "Cinta de correr", precio: "$1.500.000", imagen: "/cinta de correr.jpg" },
    { id: 3, nombre: "Straps", precio: "$50.000", imagen: "/straps gym.jpg" },
    { id: 4, nombre: "Guantes", precio: "$40.000", imagen: "/guantes.jpg" },
    { id: 5, nombre: "Shakers", precio: "$80.000", imagen: "/shakers.jpg" },
    { id: 6, nombre: "Agarres", precio: "$600.000", imagen: "/agarres.jpg" },
    { id: 7, nombre: "Colchonetas", precio: "$30.000", imagen: "/colchonetas.jpg" },
    { id: 8, nombre: "Sacos De Boxeo", precio: "$200.000", imagen: "/sacos de boxeo.jpg" },
    { id: 9, nombre: "Cuerda Para Saltar", precio: "$60.000", imagen: "/cuerda para saltar.jpg" },
    { id: 10, nombre: "Banco Multifuncional", precio: "$300.000", imagen: "/banco gym.png" },
    { id: 11, nombre: "Barras De Gym", precio: "$700.000", imagen: "/barras.jpg" },
    { id: 12, nombre: "Discos Calibrados", precio: "$100.000", imagen: "/discos.jpg" },
    { id: 13, nombre: "Barra De Dominadas", precio: "$120.000", imagen: "/barra de dominadas.jpg" },
    { id: 14, nombre: "Muñequeras", precio: "$60.000", imagen: "/munequeras.jpg" },
    { id: 15, nombre: "Coderas", precio: "$70.000", imagen: "/coderas.jpg" },
    { id: 16, nombre: "Camisas Gym", precio: "$80.000", imagen: "/camisas.jpg" },
    { id: 17, nombre: "Rodilleras", precio: "$90.000", imagen: "/rodilleras.jpg" },
    { id: 18, nombre: "Zapatillas De Gym", precio: "$250.000", imagen: "/zapatillas de gym.jpg" },
    { id: 19, nombre: "Cinturon De Gym", precio: "$140.000", imagen: "/cinturon de gym.jpg" },
    { id: 20, nombre: "Cinta Muscular", precio: "$20.000", imagen: "/cinta muscular.jpg" },
];

export default function Productos() {
    return (
    <>
    <Navbar />
        <div className={styles.grid}>
            {productos.map((producto) => (
        <div className={styles.card} key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
        </div>
        ))}
        </div>
    </>
);
}
