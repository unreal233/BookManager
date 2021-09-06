import React from 'react';
//好像不需要了。。。
export default class FormItem extends React.Component{
    render(){
        const {itemName ,item, children} = this.props
        return(
            <div>
                <label>{itemName}</label>
                {children}
                {!item.valid && <span>{item.err}</span>}
            </div>
        )
    }
}