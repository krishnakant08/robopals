import React from 'react';

const SearchBox=({searchChange})=>{
    return(
        <div className='pa2'>
            <input
                className='pa3 shadow-1 ba b--blue bg-lightest-green'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;