import React from 'react'
import UserEditor from '../../component/userEditor'
import {get} from '../../utils/request'
import {withRouter} from 'react-router-dom'

class UserEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: null
        }
    }

    componentWillMount(){
        let id = this.props.match.url.replace('/user/edit/', '')
        console.log(id)
        console.log(this.props)
        get('http://localhost:3000/user/'+id, this)
        .then(res=>{
            this.setState({
                user: res
            })
        })
    }

    render () {
        return (
            <UserEditor edit='true' user={this.state.user} />
        )
    }
}

export default withRouter(UserEdit);