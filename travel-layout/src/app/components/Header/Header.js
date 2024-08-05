import style from './header.module.css'

export default function Header() {
    return <header className={style.header}>
        <div className={style.header_wrapper}></div>
        <div className={style.img_logo}></div>
        <nav className={style.nav}>
            <p>Home</p>
            <p>Destinations</p>
            <p>About</p>
            <p>Partner</p>
            <div className={style.left_btn}>Login</div>
            <div className={style.right_btn}>Register</div>

        </nav>
    </header>
}