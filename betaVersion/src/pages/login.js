import React from 'react';
import {post} from '../utils/request';
import {Form, Input, Button, message} from 'antd';

class Login extends React.Component {
    onFinish = (value) =>{
        post('http://localhost:3000/login' ,{
            account: value.username,
            password: value.password
        }, this)
        .then(res=>{
            if(res){
                message.info('登录成功');
                this.props.history.push('/');
            }
            else{
                message.info('用户名或密码错误！');
            }
        })
    }

    onFinishFalied = () => {
        alert('Sorry');
    }

    render() {
        return(
            <Form 
                labelCol={{span: 4}}
                wrapperCol={{span: 8}}
                onFinish={this.onFinish}
                onFinishFalied={this.onFinishFalied}
            >
                <Form.Item label='username' name='username' rules={[{required : true ,message : '请输入用户名'}]}>
                    <Input />
                </Form.Item>
                <Form.Item label='password' name='password' rules={[{required : true ,message : '请输入密码'}]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>登录</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Login;