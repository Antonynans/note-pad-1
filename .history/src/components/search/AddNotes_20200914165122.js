import React,{useState} from 'react';

const AddNotes = ({note, setNote}) => {

    let [title, setTitle] = useState("")
    let [description, setDescription]
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
        setNote([
            ...note,
            {title: title,
            description: description,
        time: new Date().toLocaleTimeString()}

            ])
        setDescription("")
        setTitle("")

        console.log(note)
    }
    return(
        <div>
            <input placeholder="Title" name='title' onChange={onChangeHandler}/><br />
            <textarea placeholder="Description" name='description' onChange={onChangeHandler}></textarea><br />
            <button onClick={onClickHandler}>Add Note</button>
        </div>
    );
}

export default AddNotes;