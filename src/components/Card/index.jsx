import styles from './Card.module.css'

// eslint-disable-next-line react/prop-types
function Card({ nome, sobre, foto}) {
    return (
        <section className={styles.card}>
            <h3>{nome}</h3>
            <div className={styles.card_image}>
                <img src={foto} alt='' className={styles.card_img} />
            </div>
             <p>{sobre}</p>
           
        </section>
    )
}

export default Card