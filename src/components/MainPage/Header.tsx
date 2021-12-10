import useStore from "../../bll/state/store";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const logout = useStore(state => state.logout)
    const destination = useNavigate();

    return(
        <div>
            <header className="main-header">
                <div className="container-main">
                    <div className="university-title">
                        <h1>Университет ИТМО</h1>
                    </div>
                    <div className="lab-title">
                        <ul>
                            <li>Карапетян Эрик Акопович P3215</li>
                            <li>Вариант 1503</li>
                        </ul>
                    </div>
                </div>
            </header>
            <button className={"btn"} onClick={() => logout(destination)}>Выйти</button>
        </div>
    );
}

export default Header;
