import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useState } from 'react'

function Header() {

    const [showMenu, setShowMenu] = useState(false)
    const toogleMenu = () => {
        setShowMenu(!showMenu)
    }


    return (
        <header className={styles.header}>
            <Link to="/">
                <span>JOAOAGNEL.DEV</span>
            </Link>
            <nav
                className={`${styles.menuSandwich}  ${showMenu ? styles.show : ''}`}
                onClick={toogleMenu}
            >
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/Colaboradores">Colaboradores</Link>
                <Link to="/MeuContato">Redes Sociais</Link>
            </nav>
            <div
                className={styles.menuButton}
                onClick={toogleMenu}
            >
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </header>
    )
}

export default Header