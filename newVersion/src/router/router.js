import React, {Suspense} from 'react'
import {HashRouter} from 'react-router-dom'
import MainLayout from '../layout/mainLayout'
import routerConfig from './routerConfig'
import PrivateRouter from './privateRouter'

class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <Suspense fallback='Loading'>
                    <MainLayout>
                        <PrivateRouter routerConfig={routerConfig}/>
                    </MainLayout>
                </Suspense>
            </HashRouter>
        )
    }
}

export default Router