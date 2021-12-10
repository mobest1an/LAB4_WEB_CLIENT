import React, {useEffect} from 'react';
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router-dom";
import loadable from '@loadable/component';
import '../../App.css';

const Header = loadable(() => import('./Header'), {
    fallback: <div><h1>Loading...</h1></div>
});

const ChecksContainer = loadable(() => import('./Checks/ChecksContainer'), {
    fallback: <div><h1>Loading...</h1></div>
});

const Results = loadable(() => import('./Checks/Results'), {
    fallback: <div><h1>Loading...</h1></div>
});

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