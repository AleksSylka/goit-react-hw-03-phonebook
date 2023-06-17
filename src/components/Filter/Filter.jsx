import React, { Component } from "react";
import css from './filter.module.css'

class Filter extends Component {
    state = {
        filter: ''
    }
    
    handleChange = event => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value })
        this.props.onChange(event.currentTarget.value)
    }
    
    render() {
        return (
            <label className={css["label-contacts"]}>Find contacts by name
            <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleChange}
            className={css["input-contacts"]}
            required/>
        </label>)
    }


}

export default Filter