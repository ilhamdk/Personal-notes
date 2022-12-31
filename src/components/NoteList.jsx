import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';
 
function NoteList({  notes, onDelete }) {
 return (
  <section>
  {notes.length === 0 ? (
    <p>Tidak ada catatan.</p>
  ) : (
    <div className="notes-list">
      {notes?.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
      ))}
    </div>
  )}
</section>
 );
}
 
NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NoteList;