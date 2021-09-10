import React from 'react'
import {Layout, Menu} from 'antd'
import {UserOutlined, ReadOutlined, InfoCircleOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './mainLayout.css'

const {Header, Sider, Content} = Layout;
const {SubMenu} = Menu

class MainLayout extends React.Component {
    handleLogout(){
        //向服务器通知登出
        //页面跳转到Login
        sessionStorage.removeItem('access_token')
        this.props.history.push('/login')
    }

    render () {
        return (
            <Layout className='main'>
                <Header className='header'>
                    <div className='logo'> 图书管理系统 </div>
                    <div className='loginInfo'>
                        你好,admin | <a href='javascript:void(0)' onClick={()=>this.handleLogout()}>登出</a>
                    </div>
                </Header>
                <Layout>
                    <Sider>
                        <Menu
                            className='menu'
                            mode='inline'
                        >
                            <SubMenu icon={<UserOutlined />} title='用户操作'>
                                <Menu.Item key='1'><Link to="/user/add">添加用户</Link></Menu.Item>
                                <Menu.Item key='2'><Link to="/user/list">用户列表</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu icon={<ReadOutlined />} title='书籍操作'>
                                <Menu.Item key='3'><Link to="/book/add">添加书籍</Link></Menu.Item>
                                <Menu.Item key='4'><Link to="/book/list">书籍列表</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu icon={<InfoCircleOutlined />} title='其他操作'>
                                <Menu.Item key='5'><Link to="/welcome">回到首页</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content className='content'>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        ) 
    }
}

export default MainLayout