import Link from 'next/link';
import classes from './search-bar.module.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

export default function SearchBar() {
  return (
    <>
        <form action="">
            <div className={classes.search}>
            <Link href={'/search'}><button type='submit' className={classes.btn}><SearchSharpIcon/></button></Link>
            <input type="text" className={classes.input} placeholder="Search..."/>
            </div>
        </form>
    </>
  )
}
