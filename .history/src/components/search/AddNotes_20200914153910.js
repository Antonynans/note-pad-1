import React from 'react';

const AddNotes = ({note, setNote}) => {
    const onChangeHandler = ()=>{
        setNote({
            ...note,
            [e.target.name]: e.target.value
        })
    }

    const onClick
    return(
        <div>
            <input name='title' onChange={onChangeHandler}/><br />
            <textarea name='description' onChange={onChangeHandler}></textarea><br />
            <button>Add Note</button>
        </div>
    );
}

export default AddNotes;