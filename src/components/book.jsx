import React from 'react'
import BookImage from './bookimage'
import Search from './search'

function tagMatch(tags, filter) {
    return tags.some(t => t.toLowerCase().includes(filter.toLowerCase()))
}

export default function Book({images}) {
    const [filter, setFilter] = React.useState('')

    let filteredImages = images.sort((a, b) => Number(b.date) - Number(a.date))
    if (filter) {
        filteredImages = images.filter(i => {
            return i.description.toLowerCase().includes(filter.toLowerCase()) || tagMatch(i.tags, filter)
        })
    }

    return (
        <div className="mainarea">
            <Search value={filter} onChange={(event) => {
                setFilter(event.target.value)
            }} />
            <div className="document">{filteredImages.map((i, index) => <BookImage filename={i.image} description={i.description} key={index} />)}</div>
        </div>
    )
}