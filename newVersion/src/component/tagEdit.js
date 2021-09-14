import React from 'react'
import {Tag, Input} from 'antd'

class TagEditer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: this.props.initTag || [],
            inputVisible: false
        }
        this.value=this.state.value
        this.onChange=this.onChangeTag
    }

    handleDelete(index){
        this.setState({
            value: this.state.value.splice(index, 1)
        })
        this.onChangeTag()
    }

    showInput(){
        this.setState({
            inputVisible: true
        })
    }

    handleSubmitInput(tag){
        this.setState({
            value: [...this.state.value, tag],
            inputValue: '',
            inputVisible : false
        })
        this.onChangeTag()
    }

    onChangeTag(){
        console.log(this.state)
        this.value = this.state.value
    }

    newTagShow(value){//展示‘加入新tag’的按钮
        const {inputVisible} = this.state;
        if(value.length < 2){
        if(inputVisible){
            return(
                <Input
                    type='text'
                    className='newTagShow'
                    onBlur={()=>this.handleSubmitInput.bind(this)(value)}
                    onPressEnter={()=>this.handleSubmitInput.bind(this)(value)}
                />
            )
        }
        else{
            return(
                <Tag
                    onClick={this.showInput.bind(this)}
                    className='newTagHidden'
                    key='1'
                >Tag+</Tag>
            )
        }}
    }
    
    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.initTag
        })
    }

    render(){
        const value = this.state.value
        console.log(value)
        return(
            <div>
                {value.map((tag, index)=>{
                    return(
                        <Tag key={tag} closable onClose={()=>this.handleDelete(index)}>
                            {tag}
                        </Tag>
                    )
                })}
                {this.newTagShow(value)}
            </div>
        )
    }
}

export default TagEditer