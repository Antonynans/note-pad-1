import React from 'react';
import Searchbar from './Searchbar';

const Note = ({notes}) => {
    
    return (
        <div>
            {
                notes.map(note,index)=>{
                    return(
                        <div>
                            <h1>{Note.title</h1>
                            <p><span{Note.description</p>
                        </div>
                )
            })
                        }
            
        </div>
    );
}
export default Note;