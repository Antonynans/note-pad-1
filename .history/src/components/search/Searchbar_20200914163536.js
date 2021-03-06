import React from 'react';

const Searchbar = ({search,setSearch}) => {
    const onChangeHandler =(e)=>{
        setSearch(e.target.value)
    }
    return (
        <div>
            <input placeholder="Search" onChange={onChangeHandler} />
        </div>
    );
}

export default Searchbar;
