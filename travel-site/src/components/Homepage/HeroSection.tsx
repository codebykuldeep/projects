
import './HeroSection.css'
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero'>
        {/* <div className='hero-header'>where your <br />journey begins</div> */}
        <div className='hero-header'>explore the <span>world</span></div>
        <p>We bring to tailored experiences <br /> that cater to your adventurous spirit</p>
        <Link to={'/search'}><button>Start your journey</button></Link>
    </div>
  )
}

export default HeroSection