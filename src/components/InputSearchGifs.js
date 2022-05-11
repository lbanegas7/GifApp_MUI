import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const InputSearchGifs = ({setValueSearch}) => {
  const [value, setValue] = useState('')

  const handleSearch = (e) =>{
    e.preventDefault(); 
    value !== '' && setSearch()
  }
  
  const handleClickSearch = () => {
    value !== '' && setSearch()
  }

  const setSearch = () => {
    setValueSearch(value)
    setValue('')
  }
  
  return (
    <>
      <form onSubmit={handleSearch}>
        <FormControl sx={{ mt: 1, mb: 5, width: '60%', marginLeft: '20%' }} variant="outlined" size='small'>
            <InputLabel htmlFor="outlined-adornment-search">Buscar Gifs</InputLabel>
            <OutlinedInput
                id="outlined-adornment-search"
                type={'text'}
                endAdornment={
                  <InputAdornment position="end" sx={{cursor: 'pointer',":hover":{color:'#1976D2'}}}>
                    <FaSearch onClick={handleClickSearch}/>
                  </InputAdornment>
                }
                value={value}
                onChange={(e)=>{ setValue(e.target.value)}}
                label="Buscar Gifs"
                autoComplete='off'
                sx={{ borderRadius:'10px'}}
            />
        </FormControl>
      </form>
    </>
  )
}
