import { Link } from 'react-router-dom'
import styles from './Home.module.css'


function Home() {
    return (
        <>

        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Olá Netbil, sou <br />
                    <span>João Paulo </span> <br />
                    Muito prazer!
                </p>
                <Link to="/Sobre" className={`${styles.btn} ${styles.btn_red}`}>
                    Saiba mais sobre mim
                </Link>
            </div>
            <figure>
                <img className={styles.home_img} src="/teacher.svg" alt="Imagem de Home" />
            </figure>

        </section>

        </>
    )
}

export default Home