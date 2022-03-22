import React from "react";
import styles from './Skills.module.css'

const Skills = props => (
    <div className={styles.skills}>
        <h3>НАВЫКИ</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>REACT</li>
            <li>REDUX</li>
        </ul>
    </div>
)

export default Skills