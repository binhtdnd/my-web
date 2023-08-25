import React, { Fragment } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'

import { DefaultLayout } from './component/Layout';

import Login3 from './pages/Login3';
import useToken from './useToken'
function App() {
    // const { token, setToken } = useToken()
    // if (!token) {
    //     return <Login3 setToken={setToken} />
    // }
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

                            return <Route key={index} path={route.path} element={
                                <Layout>
                                    <Page setToken={setToken} />
                                </Layout>} />
                        })
                        }
                    </Routes>
                </div>

            </Router>

        </>
    )

};

export default App;