import React from 'react';
import { createNote } from '../utils/Api';
import NoteInput from './NoteInput';
import { useNavigate } from 'react-router-dom';
 
function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await createNote(note)
    navigate('/');
  }
 
  return (
    <section>
      <h2>Tambah Catatan</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}
 
export default AddPage;