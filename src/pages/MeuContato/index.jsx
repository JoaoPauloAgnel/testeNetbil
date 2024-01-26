import styles from './MeuContato.module.css'

import { GoMail } from "react-icons/go";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";


function MeuContato() {
    return (
        <>


            <section className={styles.contatos}>
                <h2>Se interessou?</h2>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar mais sobre.</p>

                <div className={styles.icones}>
                    <a href='mailto:joaopauloagnel@gmail.com' target='_blank'
                        rel='noopener noreferrer'>
                        <GoMail className={styles.icone} />
                    </a>

                    <a href='https://www.instagram.com/joaoagnel' target='_blank'
                        rel='noopener noreferrer'>
                        <BsInstagram className={styles.icone} />
                    </a>

                    <a href='https://github.com/JoaoPauloAgnel' target='_blank'
                        rel='noopener noreferrer'>
                        <BsGithub className={styles.icone} />
                    </a>

                    <a href='https://www.linkedin.com/in/jo%C3%A3o-paulo-pereira-agnel-952625179/' target='_blank'
                        rel='noopener noreferrer'>
                        <BsLinkedin className={styles.icone} />
                    </a>

                </div>

            </section>


        </>
    )
}

export default MeuContato