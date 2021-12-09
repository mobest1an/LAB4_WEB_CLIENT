import React, {useRef} from 'react';
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router-dom";

const Authorization = () => {

    const inputRefUsername: { current: any } = useRef();
    const inputRefPassword: { current: any } = useRef();
    const msgRef: { current: any } = useRef();
    const authorizationMethod = useStore(state => state.authorization);

    const setMessage = (message: string) => {
        msgRef.current.innerHTML = message;
    }

    const destination = useNavigate();

    const authorization = () => {
        authorizationMethod(inputRefUsername.current.value, inputRefPassword.current.value, setMessage, destination);
    }

    return (
        <div>
            <h1>Авторизация</h1>
            <div>
                <label htmlFor={"username"}>Имя пользователя</label>
                <input id={"username"} type={"text"} ref={inputRefUsername} placeholder={"Username"}/>
            </div>
            <div>
                <label htmlFor={"password"}>Пароль</label>
                <input id={"password"} type={"password"} ref={inputRefPassword} placeholder={"Password"}/>
            </div>
            <label ref={msgRef}/>
            <button onClick={authorization}>Авторизация</button>
        </div>
    );
}

export default Authorization;