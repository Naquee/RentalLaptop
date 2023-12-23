import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'

const Navbar = () => {
    const [flag,setFlag] = useState(false)
  return (
    <Box w="full" h="5rem" border="1px solid red">Navbar</Box>
  )
}

export default Navbar