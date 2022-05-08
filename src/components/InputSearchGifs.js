import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const InputSearchGifs = () => {
  const [value, setValue] = useState('')

  const handleSearch = (e) =>{
    e.preventDefault();
    console.log(value);
  }
  
  const handleClickSearch = () => {
    console.log(value);

  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <FormControl sx={{ m: 1, width: '60%', marginLeft: '20%' }} variant="outlined" size='small'>
            <InputLabel htmlFor="outlined-adornment-search">Buscar Gifs</InputLabel>
            <OutlinedInput
                id="outlined-adornment-search"
                type={'text'}
                endAdornment={
                  <InputAdornment position="end" sx={{cursor: 'pointer',":hover":{color:'red'}}}>
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
