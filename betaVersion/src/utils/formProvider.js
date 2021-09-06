import React from 'react';
//弃用。。。
export default function formProvider(fields) {
    return function (Comp) {
        const initFormComponent = {};
        function initForm(form){
            for(let i in form){
                initFormComponent[i] = {
                    value : form[i].defaultValue,
                    err : '',
                    valid : false
                }
            }
            return initFormComponent;
        }
        class FormComponent extends React.Component{
            constructor(props){
                super(props)
                this.state = {
                    form : initForm(fields)
                }
                this.handleValueChange = this.handleValueChange.bind(this);
                this.setFormValue = this.setFormValue.bind(this);
            }
            setFormValue(v){
                if(!v) return;
                const newForm = {}
                for(let i in v){
                    newForm[i] = {
                        value : v[i],
                        err : '',
                        valid : true
                    }
                }
                this.setState({
                    form : newForm
                });
            }
            handleValueChange(target,v){
                const newFormTarget = {value : v, err : '', valid : true};
                let newRule = fields[target].rules;
                for(let i=0; i<newRule.length; i++){
                    newFormTarget.err = newRule[i](v) || '';
                    if(newFormTarget.err !== ''){
                        newFormTarget.valid = false;
                    }
                }
                const newForm = {...this.state.form, [target]: newFormTarget};
                this.setState({
                    form : newForm
                });
            }
            render(){
                return <Comp {...this.props} 
                form={this.state.form} 
                onFormChange={this.handleValueChange}
                setFormValue={this.setFormValue}
                />
            }
        }
        return FormComponent;
    }
}