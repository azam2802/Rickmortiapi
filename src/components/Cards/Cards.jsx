import React from 'react'
import { useState } from 'react'
import Loader from '../Loader/Loader'
import { useEffect } from 'react'
import axios from 'axios'

const Cards = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [fetching, setFetching] = useState(true)
    const [totalPageCount, setTotalPageCount] = useState(0)

    useEffect(() => {
        if (fetching) {
            axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
                .then((res) => {
                    setData([...data, ...res.data.results])
                    setTotalPageCount(res.data.info.pages)
                    setIsLoading(false)
                    setPage(prevState => prevState + 1)
                    console.log(res.data);
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    })

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && page <= totalPageCount) {
            setFetching(true)
        }
    }

    return (
        <>
            {
                isLoading ? <Loader /> :
                    data.map((item) => (
                        <div className='character__card' key={item.id}>
                            <h1>{item.name}</h1>
                            <img src={item.image} alt="character_image" />
                        </div>
                    ))
            }
        </>
    )
}

export default Cards