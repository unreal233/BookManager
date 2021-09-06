import React from 'react';
import BookEditor from '../../component/bookEditor'

class BookEdit extends React.Component {
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
            <BookEditor edit='true' book={this.state.book} />
        )
    }
}

export default BookEdit;