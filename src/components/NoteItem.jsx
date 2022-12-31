import React from 'react';
import { showFormattedDate } from "../utils/data";
import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
 
function NoteItem({ id, title, body, createdAt, onDelete }) {

 return (
   <div className="note-item">
    <div className="titledelete">
     <h3 className="note-item__title">
     <Link to={`/notes/${id}`}>{title}</Link>
     </h3>
     <DeleteButton id={id} onDelete={onDelete} />
     </div>
     <small className="note-item__title">{showFormattedDate(createdAt)}</small>
     <p className="note-item__body">{body}</p>
   </div>
 );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,

};
 
export default NoteItem;