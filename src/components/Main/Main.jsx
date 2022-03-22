import React from "react";
import AboutSelf from "./AboutSelf/AboutSelf";
import Courses from "./Courses/Courses";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Header from "./Header/Header";
import styles from './Main.module.css'

const Main = props => (
    <main className={styles.main}>
        <Header />
        <Experience />
        <Education />
        <Courses />
        <AboutSelf />
    </main>
)

export default Main