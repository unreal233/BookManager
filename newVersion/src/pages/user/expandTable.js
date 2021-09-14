import {Table, Popconfirm, Form, Input, Button} from 'antd'
import React from "react";
import {patch} from '../../utils/request'
import arrayToJSON from '../../utils/arrayToJSON';

class ExpandTable extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            booklist: props.user.booklist
        }
    }

    handleRend(value, id){
        const url = `http://localhost:3000/user/${id}`
        patch(url, {
            booklist: [
                ...this.state.booklist,
                value.rendBook
            ]
        }, this)
        .then(()=>{
            alert('书籍借阅成功！')
            this.props.onChange()
        })
    }

    render(){
        const booklist = this.state.booklist
        const dataArray = arrayToJSON('id', booklist)
        const columns = [
            { title: '持有书籍id', dataIndex: 'id', key: 'id'},
            { title: '操作', key: 'action',
                render: (text, record, index)=>{
                    function handleDelete(){
                        booklist.splice(index, 1)
                        patch(`http://localhost:3000/user/${this.props.user.id}`, {
                                booklist: booklist
                            }, this)
                        .then(this.props.onChange)
                    }
                    return(
                        <div>
                            <Popconfirm
                                title='确定要删除该借阅记录吗？'
                                onConfirm={handleDelete}
                                okText='是'
                                cancelText='否'>
                                <a href='javascript:void(0)' onClick={handleDelete.bind(this)}>删除</a>
                            </Popconfirm>
                        </div>
                    )
                }
            }
        ];
        return(
            <div>
                {booklist.length ? <Table columns={columns} dataSource={dataArray}/> : <div>没有借阅记录</div>}
                <Form layout='horizontal' onFinish={(value)=>this.handleRend(value, this.props.user.id)}>
                        <Form.Item
                            label='借阅书籍(输入id)'
                            name='rendBook'
                            rules={[{required: true, message: '请输入书籍id'}]}
                            wrapperCol={{span: 8}}
                        >
                            <Input type='number'/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
            </div>
            
        )
    }
}

export default ExpandTable