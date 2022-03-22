import React from "react";
import photo from '../../img/photo.jpg'
import styles from './Aside.module.css'
import Contacts from "./Contacts/Contacts";
import Skills from "./Skills/Skills";
import Langs from "./Langs/Langs";

const Aside = props => (
    <aside className={styles.aside}>
        <img src={photo} alt="avatar" />
        <Contacts />
        <Langs />
        <Skills />
    </aside>
)

export default Aside