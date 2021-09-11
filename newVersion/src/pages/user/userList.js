import React from 'react'
import {Table, Popconfirm} from 'antd'
import { Link, Redirect } from 'react-router-dom'
import { del, get, post } from '../../utils/request'

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender'
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record)=>{
            function handleDelete(){
                //通知服务器杀人
                del(`http://localhost:3000/user/${record.id}`, this)
                .then(()=>{
                    return(
                        <Redirect to='/user/list'/>
                    )
                })
            }
            return(
                <div>
                    <Link to={`/user/edit/${record.id}`}>编辑</Link>
                    <Popconfirm
                        title='确定要删除此用户吗？'
                        onConfirm={handleDelete}
                        okText='是'
                        cancelText='否'>
                         <a href='javascript:void(0)' onClick={()=>handleDelete()}>删除</a>
                    </Popconfirm>
                </div>
            )
        }
    }
]

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userList: []
        }
    }

    componentWillMount(){
        get('http://localhost:3000/user', this)
        .then(res=>{
            this.setState({
                userList: res
            })
        })
    }

    render(){
        const expandedRowRender = (record) => {
            const columns = [
                { title: '持有书籍id', dataIndex: 'id', key: 'id'},
                { title: '操作', key: 'action',
                    render: (text, _record, index)=>{
                        function handleDelete(){
                            const newlist = record.booklist.splice(index, 1)
                            post(`http://localhost:3000/user/${record.id}`, {
                                    ...record,
                                    booklist: newlist
                                }, this)
                            .then(()=>{
                                return(
                                    <Redirect to='/user/list'/>
                                )
                            })
                        }
                        return(
                            <div>
                                <Popconfirm
                                    title='确定要删除该借阅记录吗？'
                                    onConfirm={handleDelete}
                                    okText='是'
                                    cancelText='否'>
                                    <a href='javascript:void(0)' onClick={()=>handleDelete()}>删除</a>
                                </Popconfirm>
                            </div>
                        )
                    }
                }
            ];
            const data = []
            for(let i of record.booklist){
                data.push({'id': i})
            }
            console.log('ready!')
            return <Table columns={columns} dataSource={data} pagination={false} />;
        }
        return(
            <>
                <header>用户列表</header>
                <Table
                    columns={columns}
                    dataSource={this.state.userList}
                    expandable={{expandedRowRender: record=>expandedRowRender(record)}}
                />
            </>
        )
    }
}

export default UserList