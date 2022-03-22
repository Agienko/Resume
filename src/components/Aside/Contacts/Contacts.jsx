import React from "react";
import styles from './Contacts.module.css'
import phoneImg from '../../../img/phone.png'
import mail from '../../../img/mail.png'
import telegram from '../../../img/telegram.png'


const Contacts = props => (
        <div className={styles.contacts}>
            <h3>КОНТАКТЫ</h3>
            <div className={styles.container} >
                <p> <img src={phoneImg} alt="Номер:" /> <span className={styles.content} > +7 (926) 644 14 90</span></p>
                <p><img src={mail} alt="E-mail:" /> <span className={styles.content} > 123@main.ru</span> </p>
                <p><img src={telegram} alt="Telegram:" /> <span className={styles.content} > t.me/AgienkoYura</span> </p>
            </div>
            
        </div>
      
)

export default Contacts