import React, { Component } from 'react'

export default class Form extends Component {
    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        console.log('Form Data:', this.state)
    }
    render(){
        console.log('current value of state on form ', this.state)
        let form = {
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit
        }
        return this.props.render(form)
    }
}