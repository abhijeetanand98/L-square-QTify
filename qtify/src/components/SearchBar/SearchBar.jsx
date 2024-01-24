import React from "react";
import styles from "./SearchBar.module.css";
import {ReactComponent as SearchIcon} from "../../assets/SearchIcon.svg"

function SearchBar(){
        const onSubmit=(e)=>{
            e.preventDefault();
        }

    return (
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} placeholder="Search a album of your choice" required/>
            <button className={styles.searchButton} type="submit">
                <SearchIcon/>
            </button>
        </form>
    )
}

export default SearchBar;