import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tienda Deportiva JM SPORT</title>
        <meta name="descripcion" content="Equípate con lo mejor en productos deportivos" />
        <link rel="icono" href="jm-sport/src/IMG/jm-logo-.jpg" />
      </Head>

      {/* Encabezado */}
      <header className={styles.header}>
      <img src="/jm-logo-.jpg" alt="Logo JM SPORT" className={styles.logoImage} />

        <nav>
          <a href="#catalogo">Catálogo</a>
          <a href="#ofertas">Ofertas</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Equípate como un campeón</h1>
        <p>Todo lo que necesitas para superar tus límites</p>
        <button className={styles.cta}>Explorar Catálogo</button>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className={styles.catalogo}>
        <h2>Catálogo de Productos</h2>
        <div className={styles.productos}>
          {[1, 2, 3, 4].map((item) => (
            <div className={styles.card} key={item}>
              <img
                src={`/jm-sport/public/IMG/uniforme-americadecali.jpg${item}`}
                alt="Producto"
              />
              <h3> Camiseta local america de cali {item}</h3>
              <p> CAMISETA COMPETENCIA 2023 LECOQS XXL
                 $235,000
                 COLOR: Rojo 
                 TALLA: 2XL
                  {item}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ofertas */}
      <section id="ofertas" className={styles.ofertas}>
        <h2>Ofertas Destacadas</h2>
        <div className={styles.ofertasGrid}>
          {[1, 2, 3].map((item) => (
            <div className={styles.ofertaCard} key={item}>
              <img
                src={`https://source.unsplash.com/200x200/?sports,discount&sig=${item}`}
                alt="Oferta"
              />
              <h3>Oferta {item}</h3>
              <p>Hasta 50% de descuento.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Sigue nuestras redes sociales:</p>
        <div>
          <a href="#">Instagram</a> | <a href="#">Facebook</a> | <a href="#">Twitter</a>
        </div>
        <p>© 2024 SportStore. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

