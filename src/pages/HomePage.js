import React from 'react';
import NoteList from '../components/NoteList';
import { deleteNote, getNotes } from '../utils/Api';
 
class HomePage extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      notes: [],
    }
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getNotes();
    
    this.setState(() => {
      return {
        notes: data
      }
    })
  }

  async onDeleteHandler(id) {
    await deleteNote(id);
    
    const { data } = await getNotes();
    this.setState(() => {
      return {
        notes: data,
      }
    });
  }
 
  render() {
    return (
      <section>
        <h2>Daftar Catatan</h2>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </section>
    )
  }
}
 
export default HomePage;