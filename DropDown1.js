import React, { useState } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

function DropDownColor() {
    const [Col,setCol] = useState("white");
    const handleCol = (e) => {
        setCol(e.target.value);
    }
    
  return (
    <div>
    <FormControl sx={{ m: 5, minWidth: 120 }}>
            <InputLabel>Color</InputLabel>
            <Select onChange={handleCol}>
            <MenuItem value={'pink'}>Pink</MenuItem>
            <MenuItem value={'purple'}>Purple</MenuItem>
            <MenuItem value={'red'}>Red</MenuItem>
            <MenuItem value={'black'}>Black</MenuItem>
            </Select>
        </FormControl>  
    <Box width={400} height={500} margin={'auto'} sx={{backgroundColor: Col, boxShadow: '10px 10px 5px #ccc' }}/>
    </div>
  )
}

export default DropDownColor
