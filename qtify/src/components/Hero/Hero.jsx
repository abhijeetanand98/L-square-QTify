import React from "react";
import styles from "./Hero.module.css";
// import {ReactComponent as Headphone} from "../../assets/vibratingHeadphone.svg"
// import {ReactComponent as SearchIcon} from "../../assets/SearchIcon.svg"
import Headphone from "../../assets/vibratingHeadphone.png";

function Hero() {

    return (
        <div className={styles.hero}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
                <img src={Headphone} alt="HeroHeadphone" width={212} height={212} />
            </div>
        </div>
    )
}

export default Hero;