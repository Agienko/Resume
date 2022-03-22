import React from "react";
import '../../fonts/raleway/raleway.css'
import './default.css'
import styles from './App.module.css'
import Aside from "../Aside/Aside";
import Main from "../Main/Main";

const App = props => (
    <div className={styles.container}>
       <Aside />
       <Main /> 
    </div>
)

export default App