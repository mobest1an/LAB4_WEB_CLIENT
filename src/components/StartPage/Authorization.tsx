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
        <div className={"form-control"}>
            <h1>Авторизация</h1>
            <label className={"label"}>
                <span className={"label-text"}>Имя пользователя</span>
            </label>
            <input className={"input input-bordered"} id={"username"} type={"text"} ref={inputRefUsername} placeholder={"Username"}/>
            <label className={"label"}>
                <span className={"label-text"}>Пароль</span>
            </label>
            <input className={"input input-bordered"} id={"password"} type={"password"} ref={inputRefPassword} placeholder={"Password"}/>
            <label ref={msgRef}/>
            <button className={"btn"} onClick={authorization}>Авторизация</button>
        </div>
    );
}

export default Authorization;