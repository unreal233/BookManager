import React, {Suspense} from 'react'
import {HashRouter, Route/* ,Redirect*/} from 'react-router-dom'
import MainLayout from '../layout/mainLayout'
import routerConfig from './routerConfig'
import PrivateRouter from './privateRouter'

const Login = React.lazy(()=>import('../pages/others/login'))

class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <Suspense fallback='Loading'>
                    <MainLayout>
                        {/*
                        <Redirect exact from='/' to='/welcome' />
                        <Route exact path='/welcome' component={Welcome} />
                        <Route exact path='/rendBook' component={RendBook}/>
                        <Route exact path='/book/add' component={BookAdd}/>
                        <Route exact path='/book/list' component={BookList}/>
                        <Route exact path='/book/edit/:id' component={BookEdit}/>
                        <Route exact path='/user/add' component={UserAdd}/>
                        <Route exact path='/user/list' component={UserList}/>
                        <Route exact path='/user/edit/:id' component={UserEdit}/>
                        <Redirect exact from='/*' to='/welcome' />
                        */}
                        <PrivateRouter routerConfig={routerConfig}/>
                    </MainLayout>
                </Suspense>
            </HashRouter>
        )
    }
}

export default Router