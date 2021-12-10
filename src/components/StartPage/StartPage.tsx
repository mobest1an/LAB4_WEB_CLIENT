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
            <NavLink className={"link"} to={"authorization"}>Авторизация</NavLink>
            <br/>
            <NavLink className={"link"} to={"registration"}>Регистрация</NavLink>
            <br/>
            <br/>
            
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