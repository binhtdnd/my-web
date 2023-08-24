import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import { createBrowserHistory } from 'history';
import { DefaultLayout } from './component/Layout';
//import DefaultLayout from './component/Layout/DefaultLayout';
import * as serviceWorker from './reportWebVitals'

class App extends Component {
    render() {
        const history = createBrowserHistory();

        return (
            <React.StrictMode>
                <Router history={history}>
                    <div className='App'>
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                let Layout = DefaultLayout;
                                if (route.Layout) {
                                    Layout = route.Layout
                                } else if (route.Layout === null) {
                                    Layout = Fragment
                                }

                                return <Route key={index} path={route.path} element={
                                    <Layout>
                                        <Page />
                                    </Layout>} />
                            })
                            }
                        </Routes>
                    </div>

                </Router>
            </React.StrictMode>

        )
        //serviceWorker.unregister()
    }

};

export default App;