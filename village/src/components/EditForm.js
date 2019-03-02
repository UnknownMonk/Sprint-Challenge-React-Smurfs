import React from 'react';

function EditForm(props) {
  return (
    <div>
      <form>
        <input
          value={this.state.newSmurf.name}
          onChange={this.handleChanges}
          name="name"
          type="text"
        />
        <button type="submit" onClick={this.editSmurf}>
          send
        </button>
      </form>
    </div>
  );
}

export default EditForm;
