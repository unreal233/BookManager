import React from 'react';
import { Link } from 'react-router-dom';
import {Layout, Menu} from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu';
import '../style/homeLayout.css'

class HomeLayout extends React.Component{
    render(){
        const {children} = this.props;
        const {Header, Content, Sider} = Layout;
        /*<div>
                <header className='header'>
                    <h1>ReactManager</h1>
                </header>
                <main>
                    {children}
                </main>
            </div> */
        return(
            <Layout className='main'>
                <Header className='header'>
                    <div className='Logo'>ReactManager</div>
                </Header>
                <Layout>
                    <Sider width={200} theme='dark'>
                        <Menu mode='inline' theme='dark' style={{width:200}}>
                            <SubMenu key='user' title={<span>用户管理</span>}>
                                <Menu.Item key = 'user-list'>
                                    <Link to='/user/list'>用户列表</Link>
                                </Menu.Item>
                                <Menu.Item key = 'user-add'>
                                    <Link to='/user/add'>用户添加</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key='book' title={<span>书籍管理</span>}>
                                <Menu.Item key = 'book-list'>
                                    <Link to='/book/list'>书籍列表</Link>
                                </Menu.Item>
                                <Menu.Item key = 'book-add'>
                                    <Link to='/book/add'>书籍添加</Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content className='content'>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default HomeLayout;