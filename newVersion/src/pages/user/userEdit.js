import React from 'react'
import UserEditor from '../../component/userEditor'

class UserEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: null
        }
    }

    render () {
        return (
            <UserEditor edit='true' user={this.state.user} />
        )
    }
}

export default UserEdit;