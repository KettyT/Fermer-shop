
// import { Routes ,Route } from 'react-router-dom';
import {Route, Router, Switch} from "react-router-dom";
import {setHistory} from "./history";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import {createBrowserHistory} from 'history'
import ExampleSwiper from "./pages/ExampleSwiper";
import StyledMainPage from "./styled/StyledMainPage";
import StyledBtn from "./styled/StyledBtn";
import {Styled} from "styled-components";
import StyledShopPage from "./styled/StyledShopPage";

function MainRouter () {
    let history = createBrowserHistory();
    setHistory(history);
    return (
        <Router history={history}>
            {/*<Layout>*/}
            <Switch>
                <Route path="/swiper">
                    <ExampleSwiper/>
                </Route>
                <Route path="/shop">
                    <StyledShopPage/>
                </Route>
                <Route path="/">
                    {/*<StyledBtn>The Button</StyledBtn>*/}
                    <StyledMainPage/>
                    {/*<MainPage/>*/}
                </Route>
                <Route path="/main">
                    <MainPage/>
                </Route>

            </Switch>
            {/*</Layout>*/}

        </Router>
    );
}

export default MainRouter;