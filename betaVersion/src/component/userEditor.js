import React from 'react';
import formProvider from '../utils/formProvider'
import FormItem from './formItem'
import {put, post} from '../utils/request';
import {Form, Input, Button, Radio} from 'antd';

class UserEditor extends React.Component {
    handleSubmit (e) {
        e.preventDefault();
        const {form : {name, age, gender}, editTag} = this.props;
        console.log({name, age, gender});
        if(!name.valid || !age.valid || !gender.valid){
            alert('请检查输入是否正确!');
            return;
        }
        let editType = '添加';
        let apiUrl = 'http://localhost:3000/user';
        let method = post;
        if(editTag){
            editType = '编辑'
            apiUrl += '/'+ editTag.id;
            method = put;
        }
        method(apiUrl, {
            name : name.value,
            age : age.value,
            gender : gender.value
            }, this)
        .then(res=>{
            if(res.id){
            alert(editType + "成功！");
            }
            else{
            alert(editType + "失败...");
            console.log(res);
            }
        })
        .catch(err=>{console.log(err);});
    }
    componentWillMount(){
        const editTag = this.props.editTag;
        if(editTag){
            this.props.setFormValue(editTag);
        }
    }
    render () {
        const {form: {name, age, gender}, onFormChange} = this.props;
        return (
            <Form
                labelCol={{span: 4}}
                wrapperCol={{span: 8}}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item label='用户姓名' name='name' required={[{},{}]}>
                    <Input />
                </Form.Item>
                <Form.Item label='用户年龄' name='age' required={[{},{}]}>
                    <Input />
                </Form.Item>
                <Form.Item label='用户性别' name='gender' required={[{},{}]}>
                    <Radio.Group>
                        <Radio value={'male'}>男</Radio>
                        <Radio value={'female'}>女</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
            /*
            <form onSubmit={e=>this.handleSubmit(e)}>
            <FormItem itemName = '用户姓名' item = {name}>
                <input type='text' value={name.value} onChange={e=>onFormChange('name',e.target.value)} />
            </FormItem><br />
            <FormItem itemName = '用户年龄' item = {age}>
                <input type='number' value={age.value} onChange={e=>onFormChange('age',+e.target.value)} />
            </FormItem><br />
            <FormItem itemName = '用户性别' item = {gender}>
            <input type="radio" name='gender' value={gender === 'male'} onChange={e=>onFormChange('gender','male')} />
                <label>男</label>
                <input type="radio" name='gender' value={gender === 'female'} onChange={e=>onFormChange('gender','female')} />
                <label>女</label>
            </FormItem><br />
            <div>
                <label>提交</label>
                <input type='submit' value='提交'/>
            </div>
            </form>
            */
        );
    }
}

UserEditor = formProvider({
    name : {
    rules : [
        function (value) {
            if(value === '') return '请输入姓名';
        },
        function (value) {
            if(value.length > 5) return '姓名不得超过5个字符';
        }
    ],
    defaultValue : ''
    },
    age : {
        rules : [
            function (value) {
                if(value === '') return '请输入年龄';
            },
            function (value) {
                if(value<0){
                    return '年龄不得低于0';
                }
                else if(value>150){
                    return '年龄不得高于150';
                }
            },
        ],
        defaultValue : 0
    },
    gender : {
        rules : [
            function (value) {
                if(value === ''){
                    return '性别不得为空';
                }
            }
        ],
        defaultValue : ''
    }
})(UserEditor);

export default UserEditor;