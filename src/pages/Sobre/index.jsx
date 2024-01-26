import styles from './Sobre.module.css'
import avatar from './images/foto.png'
import css from './images/css.svg'
import html from './images/html.svg'
import js from './images/js.svg'
import react from './images/react.svg'
import node from './images/node.svg'
import php from './images/php.svg'
import mysql from './images/mysql.svg'

function Sobre() {
    return (
        <>
            <section className={styles.sobre}>
                <div className={styles.bio}>
                   <img src={avatar} alt='Avatar' className={styles.avatar} />
                    <div className={styles.textos}>
                        <h2>Sobre</h2>
                        <p>Sou <span>João Paulo</span> <br />
                            <strong>Graduado em Desenvolvimento de Sistemas</strong></p>

                        <p>Em busca da minha primeira oportunidade no universo Tech.</p>

                        <p>Apaixonado por tecnologia, busco sempre me manter atualizado sobre as novidades</p>

                        <p>De forma autônoma realizo alguns trabalhos como manutenção de Pcs, configuração de smartphones, vendas e entre outras funções.</p>

                    </div>
                </div>
                <div className={styles.techs}>
                    <h3>Techs</h3>
                    <div className={styles.icones}>
                        <img src={html} alt='icone do Html' />
                        <img src={css} alt='icone do css' />
                        <img src={js} alt='icone do js' />
                        <img src={react} alt='icone do react' />
                        <img src={node} alt='icone do node' />
                        <img src={php} alt='icone do php' />
                        <img src={mysql} alt='icone do mysql' />
                    </div>
                </div>
            </section>


        </>

    )
}

export default Sobre