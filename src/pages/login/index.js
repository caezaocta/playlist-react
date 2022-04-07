import './styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import NavComponent from "../../components/navbar"
import LoginButton from '../../components/logbutton'

const SpotifyLogin = () => {


    return (
        <>
            <NavComponent
            />

            <LoginButton />




        </>
    );
}

export default SpotifyLogin;