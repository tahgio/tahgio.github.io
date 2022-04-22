import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLettters'
import { useState, useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Notify = ({note}) => {
  return (<p><span className='note-animate'>{note}</span></p>)
}


const Contact = () => {
  const [ltClass, setltClass] = useState('text-animate')
  const [note, setNote] = useState('')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6coet96', 'template_frscekm', form.current, 'SoqSs3lsr6j192j2h')
      .then((result) => {
          setNote(`message sent!`);
          setTimeout(() => {
            setNote('')
          }, 6000);
      }, (error) => {
          setNote(`something went wrong... try to contact me on my linkedin!`);
          setTimeout(() => {
            setNote('')
          }, 9000);
      });

      document.getElementById('myform').reset();
  }


  useEffect(() => {
    setTimeout(()=> {
      setltClass('text-animate-hover')
    }, 4000)
  }, [])

  return ( 
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
        <AnimatedLetters 
        strArray={"Contact me".split('')}
        idx={15} 
        ltClass={ltClass}
        />
        </h1>
        <p>
          I am interested in any challeging coding projects. <br />
          But you can contact me for anything you want. &#128526;
        </p>
        <div className='contact-form'>
          <form id='myform' ref={form} onSubmit={sendEmail} >
            <ul>
              <li className='half'>
                <input type="text" name='name' placeholder='Name' required />
              </li>
              <li className='half'>
                <input type="email" name='email' placeholder='Email' required />
              </li>
              <li>
                <input placeholder="Subject" type="text" name="subject" required />
              </li>
              <li>
                <textarea placeholder='Message' name='message' required></textarea>
              </li>
              <li>
                <div className='notify'>
                  <Notify note={note} />
                <input type="submit" form='myform' className='flat-button' value='Send' />
                </div>
              </li>
            </ul>
          </form>
          
        </div>
      </div>
    </div>
    <Loader type='ball-spin-fade-loader' />
    </>
  )
}

export default Contact