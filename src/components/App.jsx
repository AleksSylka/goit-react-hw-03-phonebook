import React, { Component } from "react";
/* import { nanoid } from 'nanoid'; */
import Form from "./FormComp/Form";
import Filter from "./Filter/Filter";
import ConractList from "./ContactList/ContactList";
import css from './app.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  state = {
    contacts: [],
    filter: ''
  };

  formData = data => {
    const { contacts } = this.state;
    if (this.state.contacts.find(({ name }) => name === data.name)) {
      return toast.info(`${data.name} is already in contacts`);
    };
    
    let array = [...contacts];
    array.push(data);
    this.setState({ contacts: array });
  }

  filterInput = data => {
    this.setState({filter: data})
  }

  deletContact = name => {
    const { contacts } = this.state;
    let i = contacts.findIndex(contact => contact.name === name);
    this.setState(contacts.splice(i, 1));
    window.localStorage.setItem('key', JSON.stringify(contacts))
  }

  filterContact = array => {
    return array.filter(({ name }) => (name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())))

  }

  componentDidMount() {
    const dataLS = window.localStorage.getItem('key');

    if (dataLS !== null) {
      this.setState({ contacts: JSON.parse(dataLS) });
    }
  }

  componentDidUpdate(prevState) {

    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem('key', JSON.stringify(this.state.contacts))

    }
  }

  render() {
    return (
      <>
        <h1 className={css['text']}>Phonebook</h1>
        
        <Form onSubmit={this.formData} />
        
        <h2 className={css['text']}>Contacts</h2>
        
        <Filter onChange={this.filterInput} />
        
        {this.state.contacts.length > 0 && (<ConractList arr={this.filterContact(this.state.contacts)}
          onDeletContact={this.deletContact} />)}
        
        <ToastContainer />
        
        
      </>
    )
  }
}

export default App;
