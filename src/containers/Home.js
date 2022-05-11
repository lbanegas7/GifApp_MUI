import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { InputSearchGifs } from '../components/InputSearchGifs'
import { GifGrid } from '../components/GifGrid'

export const Home = () => {

    const [valueSearch, setValueSearch] = useState('')
    return (
        <>
            <Navbar />
            <InputSearchGifs setValueSearch={setValueSearch} />
            {
                valueSearch !== '' && <GifGrid valueSearch={valueSearch} />
            }
        </>
    )
}
