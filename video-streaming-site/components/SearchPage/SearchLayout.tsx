import { Box, Container } from '@mui/material'
import classes from './search-page.module.css'
import SearchCard from './SearchCard'


export default function SearchLayout() {
  return (
    <Container maxWidth='lg' className={classes.container}>
        <Box className={classes.text}>
            Search Result for your query
        </Box>
        <Box className={classes.result}>
            {(new Array(10).fill(0).map((_,ind)=>(
                <SearchCard key={ind}/>
            )))}
        </Box>
    </Container>
  )
}
