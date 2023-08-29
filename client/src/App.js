import React, { Fragment } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'

import { DefaultLayout } from './component/Layout';

import Login from './pages/Login';
import useToken from './useToken'
function App() {
    const { token, setToken } = useToken()


    return (

        <>
            <Router >
                <div className='App'>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout
                            } else if (route.layout === null) {
                                Layout = Fragment
                            }

                            if (!token && route.needLogin) {
                                return <Route key={index} path={route.path} element={
                                    <Login setToken={setToken} />
                                } />
                            } else {
                                return <Route key={index} path={route.path} element={
                                    <Layout>
                                        <Page setToken={setToken} />
                                    </Layout>
                                } />
                            }


                        })
                        }
                    </Routes>
                </div>

            </Router>

        </>
    )

};

export default App;