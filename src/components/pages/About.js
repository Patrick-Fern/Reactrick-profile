import React from 'react';
import bitmoji from '../../assets/images/bitmoji-hi-clipped.png'

export default function About() {
  return (
    <div>
        <h1>About Me </h1>
        <img src={bitmoji} alt='bitmoji of Patrick waving from a computer screen' className='img'/>
        <p>Hi, I'm Patrick.  I'm looking to start a career in Web or Software development, and am taking a bootcamp to aid in that process.  You should hire me once I have my skills up.</p>
        <p> Originally from Buffalo, NY, I'm a big fan of the Bills and Sabres.  I earned a Bachelors of Arts in English literature from Columbia University, and have lived in New York City since my undergrad days. For the last few years I've been working in the non-profit sector in youth development.  To learn more about my proffesional history, please see my linkedin, below. </p>
    </div>
  );
}