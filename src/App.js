import React from "react";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./sass/index.scss";

import { BrowserRouter, Route } from "react-router-dom";
import { Footer, Header } from "components";
import Routes from "./routes/Routes";

function App() {
    return (
        <BrowserRouter>
            <Route
                render={props => (
                    <div>
                        <div className="container">
                            <Header {...props} />
                            <div className="main">
                                <Routes />
                            </div>
                        </div>
                        <Footer />
                    </div>
                )}
            />
        </BrowserRouter>
    );
}

export default App;
