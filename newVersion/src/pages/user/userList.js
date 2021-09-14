import React from 'react'
import {Table, Popconfirm} from 'antd'
import {Link, Redirect } from 'react-router-dom'
import {del, get} from '../../utils/request'
import ExpandTable from './expandTable'

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userList: []
        }
    }

    componentWillMount(){
        this.setUserInfo()
    }

    setUserInfo(){//获取用户列表信息
        get('http://localhost:3000/user', this)
        .then(res=>{
            this.setState({
                userList: res
            })
        })
    }

    render(){
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
                        del(`http://localhost:3000/user/${record.id}`, this)
                        .then(this.setUserInfo)
                    }
                    return(
                        <div>
                            <Link to={`/user/edit/${record.id}`}>编辑</Link>
                            <Popconfirm
                                title='确定要删除此用户吗？'
                                onConfirm={handleDelete}
                                okText='是'
                                cancelText='否'>
                                 <a href='javascript:void(0)' onClick={handleDelete.bind(this)}>删除</a>
                            </Popconfirm>
                        </div>
                    )
                }
            }
        ]
        return(
            <>
                <header>用户列表</header>
                <Table
                    columns={columns}
                    dataSource={this.state.userList}
                    expandable={{
                        expandedRowRender: record=>{
                            return <ExpandTable
                                        user={record}
                                        onChange={this.setUserInfo.bind(this)}
                                    />
                        },
                        expandRowByClick: true
                    }}
                />
            </>
        )
    }
}

export default UserList