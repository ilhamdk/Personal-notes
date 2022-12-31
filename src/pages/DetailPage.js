import React, { useEffect, useState } from "react";
import { getSingleNotes } from "../utils/Api";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { FiHome, FiPlusCircle, FiLogOut } from 'react-icons/fi';
//import { showFormattedDate } from "../utils/api";

const DetailNote = () => {
  const [note, setNote] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await getSingleNotes(id);
      setNote(response.data);
    };

    getData();
  }, []);

  return (
    <main>
      <div className="detail-page">
        <Link to="/"><FiHome /></Link>
        <h1 className="detail-page__title">{note.title}</h1>
        <p className="detail-page__createdAt">{note.createdAt}</p>
        <p className="detail-page__body">{note.body}</p>
      </div>
    </main>
  );
};

export default DetailNote;