import create from 'zustand';
import {authorization, getUserChecks, logout, registration, sendCheck} from "../serverModule/serverWorking";

export type storeType = (set: Function, get: Function) => stateType;

export type stateType = {
    _username: string;
    getUsername: () => string;
    setUsername: (username: string) => void;

    _isAuthorized: boolean;
    getIsAuthorized: () => boolean;
    setIsAuthorized: (isAuthorized: boolean) => void;

    _checks: Array<CheckType>
    getChecks: () => Array<CheckType>
    updateChecks: () => void;
    setChecks: (dotes: Array<CheckType>) => void;

    sendCheck: (check: CheckType) => void;

    authorization: (username: string, password: string, setMessage: (msg: string) => void, destination: Function) => void
    registration: (username: string, password: string, setMessage: (msg: string) => void, destination: Function) => void
    logout: (destination: Function) => void;

    _x: string;
    _y: string;
    _r: string;

    getX: () => string;
    setX: (x: string) => void;

    getY: () => string;
    setY: (y: string) => void;

    getR: () => string;
    setR: (r: string) => void;

    _xError: string;
    _yError: string;
    _rError: string;

    getXError: () => string;
    setXError: (x: string) => void;

    getYError: () => string;
    setYError: (x: string) => void;

    getRError: () => string;
    setRError: (x: string) => void;
}

export type CheckType = {
    id?: number,
    x: number,
    y: number,
    r: number,
    hit?: boolean
}

const store: storeType = (set: Function, get: Function) => ({
        _username: '',
        getUsername: () => get()._username,
        setUsername: (username: string) => set((state: stateType) => ({_username: username})),

        _isAuthorized: false,
        getIsAuthorized: () => {
            return localStorage.getItem("Authorization") !== null;
        },
        setIsAuthorized: (isAuthorized: boolean) => set((state: stateType) => ({_isAuthorized: isAuthorized})),

        _checks: [],
        getChecks: () => get()._checks,

        updateChecks: () => {
            getUserChecks(get())
        },

        setChecks: (checks: Array<CheckType>) => set((state: stateType) => ({_checks: checks})),

        sendCheck: (check: CheckType) => set((state: stateType) => {
            sendCheck(check, state);
        }),

        authorization: (username: string, password: string, setMessage: (msg: string) => void, destination: Function) => set((state: stateType) => {
            authorization(username, password, setMessage, destination, state);
        }),

        registration: (username: string, password: string, setMessage: (msg: string) => void, destination: Function) => set((state: stateType) => {
            registration(username, password, setMessage, destination, state);
        }),

        logout: (destination: Function) => set((state: stateType) => {
            logout(destination);
        }),



        _x: "0",
        _y: "0",
        _r: "1",

        getX: () => get()._x,
        setX: (x: string) => set((state: stateType) => ({_x: x})),

        getY: () => get()._y,
        setY: (y: string) => set((state: stateType) => ({_y: y})),

        getR: () => get()._r,
        setR: (r: string) => set((state: stateType) => ({_r: r})),

        _xError: "",
        _yError: "",
        _rError: "",

        getXError: () => get()._xError,
        setXError: (xError: string) => set((state: stateType) => ({_xError: xError})),

        getYError: () => get()._yError,
        setYError: (yError: string) => set((state: stateType) => ({_yError: yError})),

        getRError: () => get()._rError,
        setRError: (rError: string) => set((state: stateType) => ({_rError: rError})),
    }
)

const useStore = create(store);

export default useStore;
