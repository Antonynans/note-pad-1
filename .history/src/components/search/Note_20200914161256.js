import React from 'react';
import Searchbar from './Searchbar';

const Note = ({notes}) => {
    
    return (
        <div>
            
            {
                notes.map((note,index)=>{
                   
                    return(
                        <div key={inde}>
                         <h1>{note.title}</h1>
                         <p><span>{note.time}: </span>{note.description}</p>                            
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Note;
