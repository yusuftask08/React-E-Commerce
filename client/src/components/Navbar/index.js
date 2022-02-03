import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"
import styles from './styles.module.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className="logo">
                    <Link to="/">eCommerce</Link>
                </div>
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link to="/"> Products </Link>
                </li>
            </ul>
            <div className="right">
                <Link to="/sign-in">
                    <Button colorScheme='teal' size='sm' style={{ marginRight: "5px" }}>Register </Button>
                </Link>
                <Link to="/sign-up">
                    <Button colorScheme='teal' size='sm'>Login </Button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
