import axios from "axios";
import {CheckType, stateType} from "../state/store";

const getTokenFromStorage = () => {
    return String(localStorage.getItem("Authorization"));
}

const addTokenToStorage = (token: string) => {
    localStorage.setItem("Authorization", token);
}

const removeTokenFromStorage = () => {
    localStorage.removeItem("Authorization");
}

export const authorization = (username: string, password: string, setMessage: (msg: string) => void, destination: Function, state: stateType) => {
    axios({
        method: 'post',
        url: 'http://localhost:8080/login',
        data: {
            username: username,
            password: password
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((response) => {
        let username = response.data.username;
        let token = response.data.token;
        state.setUsername(username);
        state.setIsAuthorized(true);
        addTokenToStorage(token);
        getUserChecks(state);
        destination("/main");
    }, (error) => {
        setMessage("Пользователь не существует!");
    });
}

export const registration = (username: string, password: string, setMessage: (msg: string) => void, destination: Function, state: stateType) => {
    axios({
        method: 'post',
        url: 'http://localhost:8080/register',
        data: {
            username: username,
            password: password
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((response) => {
        removeTokenFromStorage();
        destination("/start/authorization");
    }, (error) => {
        setMessage("Не удалось зарегистрироваться!");
    });
}

export const logout = (destination: Function) => {
    removeTokenFromStorage();
    destination("/start/authorization");
}

export const getUserChecks = (state: stateType) => {
    axios({
        method: 'post',
        url: 'http://localhost:8080/getChecks',
        headers: {
            "Authorization": getTokenFromStorage()
        }
    }).then((response) => {
        state.setChecks(response.data.checks);
    }, (error) => {
        console.log(error);
    });
}

export const sendCheck = (check: CheckType, state: stateType) => {
    axios({
        method: 'post',
        url: 'http://localhost:8080/addCheck',
        data: {
            x: check.x,
            y: check.y,
            r: check.r
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": getTokenFromStorage()
        }
    }).then((response) => {
        getUserChecks(state);
    });
}
