import React from 'react'
import {Form, Input, Button} from 'antd'
import { post } from '../../utils/request'
import {withRouter} from 'react-router-dom'

class Login extends React.Component{
    onSubmit(_this){
        post('http://localhost:3000/login', {
            account: 'admin',
            password: '123456'
        }, this)
        .then(res=>{
            if(res){
                _this.props.history.push('/welcome')
            }
            else{
                alert('用户名或密码错误')
            }
        })
    }

    render(){
        const _this = this
        return(
            <div className='backgoroud'>
                <header className='header'>BookManager登录</header>
                <Form
                    className='loginForm'
                    onFinish={this.onSubmit(_this)}
                >
                    <Form.Item
                        label='用户名'
                        name='username'
                        rules={[{required: true, message: '请输入用户名'}]}
                    >
                        <Input placeholder='请输入密码'/>
                    </Form.Item>
                    <Form.Item
                        label='密码'
                        name='password'
                        rules={[{required: true, message: '请输入用户名'}]}
                    >
                        <Input.Password placeholder='请输入用户名'/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
} 

export default withRouter(Login)