import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-t.png'
import AnimatedLetters from '../AnimatedLettters'
import './index.scss'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [ltClass, setltClass] = useState('text-animate')
  const nameArray = "ahgio".split('')
  const jobArray = "web developer".split('')
  
setTimeout(() => {
      setltClass('text-animate-hover')
    }, 5000)

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <AnimatedLetters
          ltClass={ltClass}
          strArray={"Hi,".split('')}
          idx={12}
        />
        <br />
        <AnimatedLetters
          ltClass={ltClass}
          strArray={"I'm ".split('')}
          idx={13}
          />
        <img src={LogoTitle} alt="logo title" />
        <AnimatedLetters
        ltClass={ltClass}
        strArray={nameArray}
        idx={15}
        /> 
        <br />
        <AnimatedLetters 
        ltClass={ltClass}
        strArray={jobArray}
        idx={22}
        />
        </h1>
        <h2>Frontend Developer / Communication Designer /  Full Stack aspirant</h2>
        <Link to="/contact" className='flat-button'>Contact me</Link>
      </div>
      <Logo />
    </div>
    <Loader type='ball-spin-fade-loader' />
    </>
  )
}

export default Home