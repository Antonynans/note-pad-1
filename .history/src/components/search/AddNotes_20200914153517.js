import React from 'react';

const AddNotes = ({note, setNote}) => {
    const onChangeHandler = ()=>{
        setNote({
            ...note,
        })
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