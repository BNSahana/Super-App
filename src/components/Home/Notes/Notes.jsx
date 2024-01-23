import React, { useState, useEffect } from "react";
import styles from "./Notes.module.css";

const Notes = () => {
  const [newNote, setNewNote] = useState(
    "This is how I will learn, MERN Stack in the next 3 months."
  );
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(newNote));
  }, [newNote]);

  return (
    <div className={styles.notes_container}>
      <h1 className={styles.note_heading}>All notes</h1>
      <div className={styles.note_form}>
        <textarea
          placeholder={newNote}
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Notes;
