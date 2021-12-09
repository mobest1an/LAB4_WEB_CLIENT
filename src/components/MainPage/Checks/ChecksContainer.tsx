import CheckInputs from "./CheckInputs";
import React from "react";
import AreaContainer from "./AreaView/AreaContainer";
import useStore from "../../../bll/state/store";

const ChecksContainer = () => {

    const getR = useStore(state => state.getR);
    const sendCheck = useStore(state => state.sendCheck);

    const setXError = useStore(state => state.setXError);
    const setYError = useStore(state => state.setYError);
    const setRError = useStore(state => state.setRError);

    const areaClick = (e: any) => {
        let x: number = e.nativeEvent.offsetX - 150
        let y: number = e.nativeEvent.offsetY - 150
        let r: string = String(getR());

        x = x / 100 * Number(r)
        y = -y / 100 * Number(r)
        x = Math.round(x * 1000) / 1000
        y = Math.round(y * 1000) / 1000

        sendCheck({
            x: x,
            y: y,
            r: Number(r)
        });
    }

    const buttonClick = (x: string, y: string) => {
        if (validate(Number(x), Number(y), Number(getR()))) {
            sendCheck({x: Number(x), y: Number(y), r: Number(getR())});
        }
    }

    const clearErrorMessages = () => {
        setXError("");
        setYError("");
        setRError("");
    }

    const validate = (x: Number, y: Number, r: Number) => {
        clearErrorMessages();
        return validateX(x) && validateY(y) && validateR(r);
    }

    const validateX = (x: Number) => {
        if (String(x).length > 17) {
            setXError("Слишком длинное число!");
            return false;
        }
        if (isNaN(Number(x))) {
            setXError("Введите число!");
            return false;
        }
        if (x < -5 || x > 3) {
            setXError("Число не соответствует диапазону! (-5..3)");
            return false;
        }
        return true;
    }

    const validateY = (y: Number) => {
        if (String(y).length > 17) {
            setYError("Слишком длинное число!");
            return false;
        }
        if (isNaN(Number(y))) {
            setYError("Введите число!");
            return false;
        }
        if (y <= -5 || y >= 5) {
            setYError("Число не соответствует диапазону! (-3..3)");
            return false;
        }
        return true;
    }

    const validateR = (r: Number) => {
        if (String(r).length > 17) {
            setRError("Слишком длинное число!");
            return false;
        }
        if (isNaN(Number(r))) {
            setRError("Введите число!");
            return false;
        }
        if (r < -5 || r > 3) {
            setRError("Число не соответствует диапазону! [1..5]");
            return false;
        }
        return true;
    }

    return (
        <div>
            <AreaContainer onAreaClick={areaClick}/>
            <CheckInputs onButtonClick={buttonClick}/>
        </div>
    );
}

export default ChecksContainer;