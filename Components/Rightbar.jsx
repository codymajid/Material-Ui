import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box bgcolor={"blue"} p={2}  flex={1} sx={{display:{xs:"none", sm:"block"}}}>
      Rightbar
    </Box>
  )
}

export default Rightbar