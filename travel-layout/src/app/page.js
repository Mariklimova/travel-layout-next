import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import style from './page.module.css'

export default function Home() {
  return <>
  <Header/>
    <main className={style.main}>
      <section className={style.preview}>
        <div className={style.info}>

          <h1>Explore and
            Travel</h1>
          <p>Holiday finder</p>

          <div className={style.inputs}>
            <div><input type="text" placeholder="Location" /></div>
            <div><input type="text" placeholder="Activity" /></div>
            <div><input type="text" placeholder="Grade" /></div>
            <div><input type="text" placeholder="Date" /></div>
          </div>
          <div className={style.button_1}>Explore</div>
        </div>

        <div className={style.img_1}></div>
      </section>

      <section className={style.proposal}>

        <div className={style.img_2}></div>

        <div className={style.info_2}>
          <h3>A new way to explore the world</h3>
          <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their
            perfect
            trip, but now, they can also let Lonely Planet Experiences lead the way</p>

          <div className={style.button_2}>Learn more</div>
        </div>

      </section>
    </main>
    <Footer/>
  </>
}
