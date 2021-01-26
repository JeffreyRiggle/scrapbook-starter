import React from 'react'
import SearchIcon from './SearchIcon';

export default function Search({value, onChange}) {
    const [search, setSearch] = React.useState(false);

    if (!search) {
        return (
            <button aria-label="Search" className="searchbutton" onClick={() => setSearch(true)}><SearchIcon /></button>
        )
    }

    return (
        <div className="activesearch">
            <button aria-label="Search"  className="searchbutton" onClick={() => setSearch(false)}><SearchIcon /></button>
            <input className="searchinput" type="text" value={value} onChange={onChange} />
        </div>
    )
}