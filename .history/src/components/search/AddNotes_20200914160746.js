import React from 'react';

const AddNotes = ({note, setNote}) => {
    const onChangeHandler = (e)=>{
        setNote({
            ...note,
            [e.target.name]: e.target.value
        })
    }

    const onClickHandler =()=>{
        const newNote = {
            title: title,
            description: description,
            title: new Date().toLocaleDateString()
        }
        setNote
    }
    return(
        <div>
            <input name='title' onChange={onChangeHandler}/><br />
            <textarea name='description' onChange={onChangeHandler}></textarea><br />
            <button onClick={onClickHandler}>Add Note</button>
        </div>
    );
}

export default AddNotes;