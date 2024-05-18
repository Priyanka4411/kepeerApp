import React, { useState } from "react";
import Note from "./Note";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);

  function change_fun(e) {
    const { name, value } = e.target;

    if (name === "title") {
      setInputTitle(value);
    } else if (name === "content") {
      setInputText(value);
    }
  }

  function my_fun(e) {
    e.preventDefault();

    if (inputTitle && inputText) {
      // Create a new note object
      const newNote = { 
        title: inputTitle,
         content: inputText 
        };

      // Update the notes array with the new note
      setNotes((prevNotes) => [...prevNotes, newNote]);

      // Clear input fields
      setInputTitle("");
      setInputText("");
    } else {
      console.log("Please provide both title and content.");
    }
  }

  function delete_fun(id1) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id1));
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={change_fun}
          name="title"
          placeholder="Title"
          value={inputTitle}
        />
        <textarea
          onChange={change_fun}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText}
        />

    {/* fab is for animating a button from matrial-ui */}
       <Zoom in={true}>
       <Fab onClick={my_fun}><AddIcon/></Fab>
       </Zoom>
      </form>

      {/* Display all Note components in the array */}
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} delete_fun1={()=>{delete_fun(index)}}/>
      ))}
    </div>
  );
}

export default CreateArea;





// import React, { useState } from "react";
// import Note from "./Note";

// function CreateArea() {
//   const [inputTitle, setInputTitle] = useState("");
//   const [inputText, setInputText] = useState("");
//   const [noteAdded, setNoteAdded] = useState(false);

//   function change_fun(e) {
//     const { name, value } = e.target;

//     if (name === "title") {
//       setInputTitle(value);
//     } else if (name === "content") {
//       setInputText(value);
//     }
//   }

//   function my_fun(e) {
//     e.preventDefault();

//     if (inputTitle && inputText) {
//       setNoteAdded(true);
//     } else {
//       console.log("Please provide both title and content.");
//     }
//   }

//   return (
//     <div>
//       <form>
//         <input
//           onChange={change_fun}
//           name="title"
//           placeholder="Title"
//           value={inputTitle}
//         />
//         <textarea
//           onChange={change_fun}
//           name="content"
//           placeholder="Take a note..."
//           rows="3"
//           value={inputText}
//         />
//         <button onClick={my_fun}>Add</button>
//       </form>

//       {/* Display Note component only if both title and content are provided */}
//       {noteAdded && <Note title={inputTitle} content={inputText} />}
//     </div>
//   );
// }

// export default CreateArea;
