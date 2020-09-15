import React from 'react';

const AddNotes = ({note, setNote}) => {

    const [title, setTitle] = useState("")
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
        setNote({
            ...note,
            {title: title,
            description: description,
        time: new Date().toLocaleTimeString()}

        })
        console.log(note)
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