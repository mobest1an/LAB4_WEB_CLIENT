import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import loadable from '@loadable/component';

const Authorization = loadable(() => import('./Authorization'), {
    fallback: <div><h1>Loading...</h1></div>
});

const Registration = loadable(() => import('./Registration'), {
    fallback: <div><h1>Loading...</h1></div>
});

const StartPage = () => {

    return (
        <div>
            <NavLink to={"authorization"}>Авторизация</NavLink>
            <NavLink to={"registration"}>Регистрация</NavLink>
            
            <div>
                <Routes>
                    <Route path={"authorization"} element={<Authorization/>}/>
                    <Route path={"registration"} element={<Registration/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default StartPage;