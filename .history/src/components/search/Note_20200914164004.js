import React from 'react';
import Searchbar from './Searchbar';

const Note = ({notes}) => {
    
    return (
        <div>
            
            {
                notes.map((note,index)=>{
                   
                    return(
                        <div class="note-div" key={index}>
                         <h1><span{note.title.toUpperCase}</h1>
                         <p><span>{note.time}: </span>{note.description}</p>                            
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Note;
