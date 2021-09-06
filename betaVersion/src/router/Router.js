import React, { Suspense } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import HomeLayout from '../layout/homeLayout'
const HomePage = React.lazy(()=>import('../pages/home'));
const UserAddPage = React.lazy(()=>import('../pages/userAdd'));
const UserListPage = React.lazy(()=>import('../pages/userList'));
const UserEditPage = React.lazy(()=>import('../pages/userEdit'));
const BookAddPage = React.lazy(()=>import('../pages/bookAdd'));
const BookListPage = React.lazy(()=>import('../pages/bookList'));
const BookEditPage = React.lazy(()=>import('../pages/bookEdit'));
const LoginPage = React.lazy(()=>import('../pages/login'));

export default class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <HomeLayout>
                    <Switch>
                        <Suspense fallback={<div>loading...</div>}>
                            <Route component={HomeLayout}>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/login" component={LoginPage} />
                                <Route exact path="/user/add" component={UserAddPage} />
                                <Route exact path="/user/list" component={UserListPage} />
                                <Route exact path="/user/edit/:id" component={UserEditPage} />
                                <Route exact path="/book/add" component={BookAddPage} />
                                <Route exact path="/book/list" component={BookListPage} />
                                <Route exact path="/book/edit/:id" component={BookEditPage} />
                            </Route>
                        </Suspense>
                    </Switch>
                </HomeLayout>    
            </HashRouter>
        )
    }
}
