import { Box, Container } from '@mui/material'
import classes from './search-page.module.css'
import SearchCard from './SearchCard'
import { getVideoForQuery } from '@/lib/video';
import { VideoCreatorType } from '@/helper/commonTypes';
import { waitFunction } from '@/helper/helperFns';
import { Suspense } from 'react';
import SearchVideoLoading from '../Dummy/SearchVideoLoading';


interface searchLayoutProps{
  query: string;
}


export default async function SearchLayout({query}:searchLayoutProps) {
  
  return (
    <Container maxWidth='lg' className={classes.container}>
        <Box className={classes.text}>
            Search Result for your {query}
        </Box>
        <Suspense fallback={<SearchVideoLoading/>}>
          <InsertSearch query={query}/>
        </Suspense>
    </Container>
  )
}


async function InsertSearch({query}:searchLayoutProps) {
  const result = getVideoForQuery(query) as VideoCreatorType[];
  await waitFunction(2000);
  return (
    <Box className={classes.result}>
            {(result.map((data,ind)=>(
                <SearchCard  video={data} key={ind}/>
            )))}
            {
              result.length === 0 && <p>NO videos found for your query</p>
            }
        </Box>
  )
}
