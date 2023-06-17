import React, { Component } from "react";
import { nanoid } from 'nanoid';
import css from './form.module.css'

class Form extends Component {
    
  state = {
    name: '',
    number: ''
  }
  
  handleChange = event => {
    this.setState({[event.currentTarget.name]: event.currentTarget.value})
  }

  fornSubmit = (event) => {
    event.preventDefault();
    const nameInputId = nanoid();
    let objContact = {name: event.currentTarget.name.value,
      id: nameInputId,
      number: event.currentTarget.number.value}
    this.props.onSubmit(objContact)
    this.reset();
  }

  reset = () => {
        this.setState({name: '', number: ''})
  }

  render() {
      return (
          
        <form onSubmit={this.fornSubmit} className={css['form-contacts']}>
        <label className={css["label-contacts"]}>Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            className={css["input-contacts"]}
            required/>
        </label>
        <label className={css["label-contacts"]}>Number 
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.handleChange}
              className={css["input-contacts"]}
              required/>
        </label>
        <button type="submit" className={css["btn"]}>Add Contact</button>
      </form>
        );
    }


}

export default Form

