import React from 'react';
import PropTypes from 'prop-types';
 
class NoteInput extends React.Component {
  constructor(props) {
    super(props);
  
    // inisialisasi state
    this.state = {
      title: '',
      body: '',
    }
  
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  
  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }
  
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

 render() {
   return (
     <form className='note-input'>
       <input type="text" placeholder="title" />
       <input type="text" placeholder="notes" />
       <button type="submit">Tambah</button>
     </form>
   )
 }
// eslint-disable-next-line
 render() {
  return (
    <form className='note-input' onSubmit={this.onSubmitEventHandler}>
      <small>
        Remaining characters: <span>{50 - this.state.title.length}</span>
      </small>
      <input className="inputtitle" maxLength="50" type="text" placeholder="judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
      <textarea className="inputbody" type="text" placeholder="notes" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
      <button type="submit">Tambah</button>
    </form>
  )
}
}
 
NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default NoteInput;