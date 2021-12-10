import React, {useRef} from 'react';
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router-dom";

const Registration = () => {

    const inputRefUsername: { current: any } = useRef();
    const inputRefPassword: { current: any } = useRef();
    const msgRef: { current: any } = useRef();
    const registrationMethod = useStore(state => state.registration);

    const setMessage = (message: string) => {
        msgRef.current.innerHTML = message;
    }

    const destination = useNavigate();

    const registration = () => {
        registrationMethod(inputRefUsername.current.value, inputRefPassword.current.value, setMessage, destination);
    }

    return (
        <div className={"form-control"}>
            <h1>Регистрация</h1>
            <label className={"label"}>
                <span className={"label-text"}>Имя пользователя</span>
            </label>
            <input className={"input input-bordered"} id={"username"} type={"text"} ref={inputRefUsername}
                   placeholder={"Username"}/>
            <label className={"label"}>
                <span className={"label-text"}>Пароль</span>
            </label>
            <input className={"input input-bordered"} id={"password"} type={"password"} ref={inputRefPassword}
                   placeholder={"Password"}/>
            <label ref={msgRef}/>
            <button className={"btn"} onClick={registration}>Зарегистрироваться</button>
        </div>
    );
}

export default Registration;