import React from 'react';

const AddNotes = ({note, setNote}) => {
    const onChangeHandler = ()=>{
        setNote(): void
    }
    return(
        <div>
            <input /><br />
            <textarea></textarea><br />
            <button>Add Note</button>
        </div>
    );
}

export default AddNotes;