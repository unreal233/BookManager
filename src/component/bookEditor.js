import React from 'react'
import {Form, Input, Button} from 'antd'
import TagEditer from '../../component/tagEdit'

class BookEditor extends React.Component {
    constructor(props){
        super(props)
        this.state={
            book: props.book || null
        }
    }

    onSubmit(value){
        //提交数据
    }

    render () {
        const {name, price, tag, id} = this.state.book
        return (
            <>
                <header>{this.props.edit ? `修改书籍(${id})` : '添加书籍'}</header>
                <Form
                    className='inputForm'
                    onFinish={this.onSubmit}
                >
                    <Form.Item
                        label='书籍名称'
                        name='bookname'
                        rules={[{required: true, message: '请输入书籍名'},
                                {max: 20, message: '书籍名不得超过20个字符'}]}
                    >
                        <Input value={name} />
                    </Form.Item>
                    <Form.Item
                        label='价格'
                        name='price'
                        rules={[{required: true, message: '请输入数字'}]}
                    >
                        <Input value={price} />
                    </Form.Item>
                    <Form.Item
                        label='标签'
                        name='tag'
                    >
                        <TagEditer initTag={[tag]}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

export default BookEditor