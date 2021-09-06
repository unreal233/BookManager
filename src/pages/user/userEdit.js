import React from 'react'
import UserEditor from '../../component/bookEditor'

class UserEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            book: null
        }
    }

    componentWillMount(){
        //从服务器取数据填到book里面
    }

    render () {
        return (
            <UserEditor edit='true' book={this.state.book} />
        )
    }
}

export default UserEdit;