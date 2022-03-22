import React from "react";
import styles from './Header.module.css'
import mapMarker from '../../../img/map-marker.png'
import info from '../../../img/info.png'

const Header = props => (
        <header className={styles.header}>
            <h1>АГИЕНКО ЮРИЙ ВАЛЕНТИНОВИЧ</h1>
            <h3>JUNIOR FRONTEND-ФРОНТЕНД РАЗРАБОТЧИК</h3>
            <div className={styles.wrapp}>
                <div>
                    <img src={mapMarker} alt="Местоположение:" />  МО Раменский район п. Салтыково 
                </div>
                <div>
                    <img src={info} alt="" /> 34 года
                </div>
            </div>
            <p></p>
        </header>
)

export default Header