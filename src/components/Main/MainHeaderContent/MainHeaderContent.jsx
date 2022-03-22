import React from "react";
import styles from './MainHeaderContent.module.css'


const MainHeaderContent = props => (
   
       <div className={styles.wrapper} >
          <div className={styles.text} > {props.text} </div> 
            <hr />
           <div className={styles.circle}>
                <img src={props.photo} alt="Работа" />  
           </div>
          
        </div>
)

export default MainHeaderContent