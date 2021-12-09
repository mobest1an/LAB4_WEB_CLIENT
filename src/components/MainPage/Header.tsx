import useStore from "../../bll/state/store";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const logout = useStore(state => state.logout)
    const destination = useNavigate();

    return(
        <div>
            <button onClick={() => logout(destination)}>Выйти</button>
        </div>
    );
}

export default Header;
