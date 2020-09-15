import React, { useState } from 'react';
import Note from './Note';
import Searchbar from './Searchbar';


const SearchApp = () => {
    const ourNotes = [
        {
            title: "My Daughter",
            description: `Lorem Ipsum is simply dummy 
                        text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since`,
            time: new Date().toLocaleTimeString()

        },{
            title: "My son",
            description: `Lorem Ipsum is simply dummy 
                    text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since`,
            time: new Date().toLocaleTimeString()

        },
    ]
    const [search, setSearch] = useState("")

    const filteredNotes = ourNotes.filter((note,index)=>{
        return note.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <h1>SearchApp</h1>
            <Searchbar search={search} setSearch={setSearch}
        </div>
    )
}