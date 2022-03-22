import React from "react";
import styles from './Langs.module.css'

const Langs = props => (
    <div className={styles.langs}>
        <h3>ЯЗЫКИ</h3>
        <div className={styles.container}>
            <p> Английский: <span className={styles.content}>В1(Средний)</span></p>
        </div>
        
        
    </div>
)

export default Langs