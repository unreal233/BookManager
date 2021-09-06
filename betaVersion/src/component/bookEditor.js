import React from 'react';
import AutoComplete from './autoComplete';
import {get, put, post} from '../utils/request';
import {Form, Input, Button} from 'antd';

class BookEditor extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          recommendUsers: []
        }
    }

    onFinish(value) {
        const editTag = this.props.editTag
        const {name, price, owner_id} = {value}
        console.log({name, price, owner_id});
        let editType = '添加';
        let apiUrl = 'http://localhost:3000/book';
        let method = post;
        if(editTag){
            editType = '编辑'
            apiUrl += '/'+ editTag;
            method = put;
        }
        method(apiUrl, {
            name,
            price,
            owner_id
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

    onFinishFailed(err) {
        alert(err);
    }

    componentDidMount() {
        const editTag = this.props.editTag;
        if(editTag){
            this.props.setFormValue(editTag);
        }
    }

    timer = 0;

    handleOwnerIdChange(value) {
        this.props.onFormChange('owner_id', value);
        this.setState({
            recommendUsers: []
        })

        if(!this.timer){
            this.timer = setTimeout(()=>{
                this.optionCreate(value);
                this.timer = 0;
            }
            , 200);
        }
    }

    optionCreate(input) {
        get('http://localhost:3000/user?id_like='+ input, this)
        .then(res=>{
            if(res.length === 1 && res[0].id === input) return;
            this.setState({
                recommendUsers : res.map((i)=>{return `${i.id}(${i.name})`})
            })
        })
    }

    render () {
        //const {form: {name, price, owner_id}, onFormChange} = this.props;
        return (
            <Form
                labelCol={{span: 4}}
                wrapperCol={{span: 8}}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item 
                    label='书籍名' 
                    name='name' 
                    rules={[{required: true, message: '请输入书籍名'}, 
                            {len: 15, message: '书籍名不得超过15个字符'}]}>
                    <Input />
                </Form.Item>
                <Form.Item 
                    label='书籍价格' 
                    name='price' 
                    rules={[{required: true, message: '请输入价格'}, 
                            {min: 0, message: '价格不得低于0'}]}>
                    <Input />
                </Form.Item>
                <Form.Item 
                    label='持有者id(选填)'
                    required={false}
                    name='name' 
                >
                    <AutoComplete 
                        option={this.state.recommendUsers}
                        onChange={this.handleOwnerIdChange}
                    ></AutoComplete>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        );
    }
}

export default BookEditor;