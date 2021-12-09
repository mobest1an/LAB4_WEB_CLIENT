import React, {useEffect} from 'react';
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router-dom";
import Header from "./Header";
import ChecksContainer from "./Checks/ChecksContainer";
import Results from "./Checks/Results";

const MainPage = () => {

    const isAuthorized = useStore(state => state.getIsAuthorized());
    const updateChecks = useStore(state => state.updateChecks);
    const destination = useNavigate();

    useEffect(() => {
        if (!isAuthorized) {
            destination("/start");
        } else {
            updateChecks();
        }
    });

    return (
        <div>
            <Header/>
            <ChecksContainer/>
            <Results/>
        </div>
    );
}

export default MainPage;