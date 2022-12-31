import React from 'react';
import PropTypes from 'prop-types';
 
function NoteItemBody({ name, date }) {
 return (
   <div className="note-item__body">
     <h3 className="note-item__title">{name}</h3>
     <p className="note-item__date">@{date}</p>
   </div>
 );
}
 
NoteItemBody.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default NoteItemBody;