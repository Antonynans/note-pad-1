import React from 'react';

const AddNotes = ({note, setNote}) => {
    const onChangeHandler = ()=>{
        setNote({
            ...note,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div>
            <input name='title' onChange={on/><br />
            <textarea name='description'></textarea><br />
            <button>Add Note</button>
        </div>
    );
}

export default AddNotes;