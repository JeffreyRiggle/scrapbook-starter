import React from 'react'
import SearchIcon from './SearchIcon';

export default function Search({value, onChange}) {
    const [search, setSearch] = React.useState(false);

    if (!search) {
        return (
            <button className="searchbutton" onClick={() => setSearch(true)}><SearchIcon /></button>
        )
    }

    return (
        <input className="searchinput" type="text" value={value} onChange={onChange} />
    )
}