import React, { useState } from "react";

const Title = () => {
  const [title, setTitle] = useState("Async Redux Party");
  const [editing, setEditing] = useState(false);
  const [newTitleText, setNewTitleText] = useState("");

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!editing ? (
        <h1>
          {title}{" "}
          <i onClick={() => setEditing(!editing)} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              setTitle(newTitleText);
              setEditing(false);
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

// Redux step 3: connect components

const mapStateToProps = () => {

}

mapDispatchToProps = {}//something

export default connect(mapStateToProps, mapDipatchToProps)(Title);

// connect(mapStateToProps,mapDipatchToProps) returns a decorator function
// We then invoke that decorator on Title
// and magically, Title can now read from and write to the store
