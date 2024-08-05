import style from './footer.module.css'

export default function Footer() {
    return <footer className={style.footer_color}>
        <div className={style.footer_wrapper}>
            <div className={style.advice}>

                <div className={style.img_logo_2}></div>

                <p>Plan and book your perfect trip with
                    expert advice, travel tips destination
                    information from us</p>
                <p>©2020 Thousand Sunny. All rights reserved</p>

            </div>

            <div className={style.variants}>

                <div className={style.destinations}>
                    <h4>Destinations</h4>
                    {['Africa', 'Antarctica', 'Asia', 'Europe', 'America'].map((el, i) => <p key={i}>{el}</p>)}
                </div>

                <div className={style.shop}>
                    <h4>Shop</h4>
                    {['Destination Guides', 'Pictorial & Gifts', 'Special Offers', 'Delivery Times', 'FAQs'].map((el, i) => <p key={i}>{el}</p>)}
                </div>

                <div className={style.interests}>
                    <h4>Interests</h4>
                    {['Adventure Travel', 'Art And Culture', 'Wildlife And Nature', 'Family Holidays', 'Food And Drink'].map((el, i) => <p key={i}>{el}</p>)}
                    
                </div>


            </div>

        </div>
    </footer>
}