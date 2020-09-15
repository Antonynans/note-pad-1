import React,{useState} from 'react';

const AddNotes = ({note, setNote}) => {

    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")

    
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
            setDescription(description="")
            setTitle(title ="")

    }
    return(
        <div>
            <input placeholder="Title" name='title' onChange={(e)}=>setTitle(e.target.value/><br />
            <textarea placeholder="Description" name='description' onChange={onChangeHandler}></textarea><br />
            <button onClick={onClickHandler}>Add Note</button>
        </div>
    );
}

export default AddNotes;