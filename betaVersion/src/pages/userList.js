import React from 'react';
import {get} from '../utils/request'

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userList : []
        }
    }
    componentWillMount(){
        get('http://localhost:3000/user', this)
        .then(res=>{
            this.setState({
                userList : res
            })
        })
    }
    handleEdit(user){
        this.props.history.push('/user/edit/'+user.id);
    }
    handleDelete(user){
        // eslint-disable-next-line no-restricted-globals
        if(confirm(`确定要删除${user.name}吗？`)){
            get('http://localhost:3000/user/'+user.id, this)
            .then(()=>{
                this.setState({
                    userList : this.state.userList.filter(item => item.id !== user.id)
                })
                alert('删除成功!');
            })
            .catch(err=>{
                console.log(err);
                alert('删除失败...');
            })
        }
    }
    render(){
        let userList = this.state.userList;
        return(
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>名称</td>
                        <td>年龄</td>
                        <td>性别</td>
                        <td>操作</td>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(user=>{
                        return(
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <a href='javascript:void(0)' onClick={()=>this.handleEdit(user)}>修改</a>
                                    <a href='javascript:void(0)' onClick={()=>this.handleDelete(user)}>删除</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> 
        )
    }
}

export default UserList;