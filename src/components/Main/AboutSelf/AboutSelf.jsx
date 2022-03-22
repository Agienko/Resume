import React from "react";
import styles from './AboutSelf.module.css'
import photo from '../../../img/aboutSelf.png'
import MainHeaderContent from "../MainHeaderContent/MainHeaderContent";

const AboutSelf = props => (
       <div>
              <MainHeaderContent photo={photo} text={'О СЕБЕ'} />
              О СЕБЕ
       </div>
)

export default AboutSelf