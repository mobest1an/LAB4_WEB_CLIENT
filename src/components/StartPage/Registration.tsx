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
        <div>
            <h1>Регистрация</h1>
            <div>
                <label htmlFor={"username"}>Имя пользователя</label>
                <input id={"username"} type={"text"} ref={inputRefUsername} placeholder={"Username"}/>
            </div>
            <div>
                <label htmlFor={"password"}>Пароль</label>
                <input id={"password"} type={"password"} ref={inputRefPassword} placeholder={"Password"}/>
            </div>
            <label ref={msgRef}/>
            <button onClick={registration}>Зарегистрироваться</button>
        </div>
    );
}

export default Registration;