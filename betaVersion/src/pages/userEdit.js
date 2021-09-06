import React from 'react';
import UserEditor from '../component/userEditor';
import {get} from '../utils/request'

class UserAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user : null
        }
    }
    componentWillMount(){
        const id = this.props.match.params.id;
        get('http://localhost:3000/user/' + id, this)
        .then(res=>{
            this.setState({
                user : res
            })
        })
        .catch((err)=>{
            console.log(err);
            alert('发生错误...');
        })
    }
    render(){
        const user = this.state.user;
        return user ? <UserEditor editTag={user} /> : 'loading...'
    }
}

export default UserAdd;