import React from 'react'
import { useState } from 'react'

const Pagination = ({ onChange }) => {

    let [page, setPage] = useState(1)

    function nextPage() {
        if (page < 42) {
            setPage(++page)
            handleOnChange()
        }
    }

    function previousPage() {
        if (page > 1) {
            setPage(--page)
            handleOnChange()
        }
    }

    function handleOnChange() {
        onChange(page)
    }

    return (
        <>
            <button className="next" onClick={() => previousPage()}>Previous page</button>
            <button className="next" onClick={() => nextPage()}>Next page</button>
        </>
    )
}

export default Pagination