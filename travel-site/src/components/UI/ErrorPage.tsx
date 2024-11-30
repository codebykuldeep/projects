import ErrorImage from '../../assets/error404.jpg'

function ErrorPage() {
  return (
    <div style={{width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <img src={ErrorImage} alt="Error page message img" style={{width:'70%',height:'70vh',objectFit:'contain'}}/>
    </div>
  )
}

export default ErrorPage