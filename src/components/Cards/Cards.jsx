import React from 'react'
import { useState } from 'react'
import Loader from '../Loader/Loader'
import { useEffect } from 'react'
import axios from 'axios'
import Pagination from '../Pagination/Pagination'

const Cards = () => {

    const [page, setPage] = useState()
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((res) => {
          setData(res.data.results)
          setIsLoading(false)
          console.log(res.data);
        })
    }, [page])

    function handlePageChange(page){
        console.log(page);
        setPage(page)
    }

    return (
        <>
            <Pagination onChange={handlePageChange}/>
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