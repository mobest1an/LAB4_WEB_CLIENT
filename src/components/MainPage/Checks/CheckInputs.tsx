import {useRef} from "react";
import useStore from "../../../bll/state/store";

const CheckInputs = (props: { onButtonClick: (x: string, y: string) => void }) => {

    const getX = useStore(state => state.getX);
    const setX = useStore(state => state.setX);

    // const getY = useStore(state => state.getY);
    // const setY = useStore(state => state.setY);
    const yRef: {current: any} = useRef();

    // const getR = useStore(state => state.getR);
    const setR = useStore(state => state.setR);

    const xError = useStore(state => state._xError);
    const yError = useStore(state => state._yError);
    const rError = useStore(state => state._rError);

    return (
        <div>
            <div className={"x-interval intervals"}>
                <p id={"x-title"}>Выберите координату X:</p>
                <label><input type={"radio"} id="-5" name={"x-change"} onChange={() => setX("-5")} value={"-5"}/>-5</label>
                <label><input type={"radio"} id="-4" name={"x-change"} onChange={() => setX("-4")} value={"-4"}/>-4</label>
                <label><input type={"radio"} id="-3" name={"x-change"} onChange={() => setX("-3")} value={"-3"}/>-3</label>
                <label><input type={"radio"} id="-2" name={"x-change"} onChange={() => setX("-2")} value={"-2"}/>-2</label>
                <label><input type={"radio"} id="-1" name={"x-change"} onChange={() => setX("-1")} value={"-1"}/>-1</label>
                <label><input type={"radio"} id="0" name={"x-change"} onChange={() => setX("0")} value={"0"}/>0</label>
                <label><input type={"radio"} id="1" name={"x-change"} onChange={() => setX("1")} value={"1"}/>1</label>
                <label><input type={"radio"} id="2" name={"x-change"} onChange={() => setX("2")} value={"2"}/>2</label>
                <label><input type={"radio"} id="3" name={"x-change"} onChange={() => setX("3")} value={"3"}/>3</label>
                <label>{xError}</label>
            </div>

            <div className={"y-interval intervals"}>
                <p id={"y-title"}>Введите координату Y:</p>
                <input type={"text"} id={"y-change"} name={"y-change"} ref={yRef} placeholder={"Число в диапазоне (-5 ... 5)"}/>
                <label>{yError}</label>
            </div>

            <div className={"r-interval intervals"}>
                <p id={"r-title"}>Выберите координату R:</p>
                <label><input type={"radio"} id="-5" name={"r-change"} onChange={() => setR("-5")} value={"-5"}/>-5</label>
                <label><input type={"radio"} id="-4" name={"r-change"} onChange={() => setR("-4")} value={"-4"}/>-4</label>
                <label><input type={"radio"} id="-3" name={"r-change"} onChange={() => setR("-3")} value={"-3"}/>-3</label>
                <label><input type={"radio"} id="-2" name={"r-change"} onChange={() => setR("-2")} value={"-2"}/>-2</label>
                <label><input type={"radio"} id="-1" name={"r-change"} onChange={() => setR("-1")} value={"-1"}/>-1</label>
                <label><input type={"radio"} id="0" name={"r-change"} onChange={() => setR("0")} value={"0"}/>0</label>
                <label><input type={"radio"} id="1" name={"r-change"} onChange={() => setR("1")} value={"1"}/>1</label>
                <label><input type={"radio"} id="2" name={"r-change"} onChange={() => setR("2")} value={"2"}/>2</label>
                <label><input type={"radio"} id="3" name={"r-change"} onChange={() => setR("3")} value={"3"}/>3</label>
                <label>{rError}</label>
            </div>

            <div className={"buttons"}>
                <div className="check">
                    <button className={"btn btn-check"} onClick={() => props.onButtonClick(getX(), yRef.current.value)}>Проверить точку</button>
                </div>
            </div>
        </div>
    );
}

export default CheckInputs;