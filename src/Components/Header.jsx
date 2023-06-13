import React from 'react';
import LogoutButton from "./LogoutButton.jsx";
import LoginButton from "./LoginButton.jsx";
import Profile from "./Profile.jsx";
import logo from "../img/logo.png"
import SearchBar from "./SearchBar.jsx"
export default function nome(parametros) {
    return (
        <>
            <header className="bg-[#00008B] text-white py-4 ">
                <div className="flex justify-around">
                    <img src={logo} className="h-12 w-12"/>
                    <SearchBar />
                    <LogoutButton />
                    <LoginButton />
                    <Profile />
                </div>
            </header>
        </>
    );
}
