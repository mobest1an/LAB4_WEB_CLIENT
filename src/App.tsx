import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import loadable from '@loadable/component';

const StartPage = loadable(() => import('./components/StartPage/StartPage'), {
    fallback: <div><h1>Loading...</h1></div>
});
const MainPage = loadable(() => import('./components/MainPage/MainPage'), {
    fallback: <div><h1>Loading...</h1></div>
});

class App extends Component {

    render() {
        return (
            <Routes>
                <Route path={"/start/*"} element={<StartPage/>}/>
                <Route path={"/main/*"} element={<MainPage/>}/>
            </Routes>

        );
    }
}

export default App;
