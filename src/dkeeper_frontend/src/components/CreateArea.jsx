import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {
  const [contentText, setContent] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    // console.log(contentText);
    const newName = event.target.name;
    const newValue = event.target.value;

    return setContent((prev) => {
      return { ...prev, [newName]: newValue };
    });
  }
  function handleClick(event) {
    props.createNote(contentText);
    setContent({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleExpand() {
    setIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={contentText.title}
        /> : null}

        <textarea
          onChange={handleChange}
          onClick={handleExpand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={contentText.content}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
