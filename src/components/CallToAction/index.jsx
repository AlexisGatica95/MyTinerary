import React from 'react'
import './style.css'

function CallToAction() {
  return (
    <div className='call-to-action'>
        <div className="left">
            <h3>Titulo Ilustrativo</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ratione, maxime necessitatibus unde temporibus vitae reiciendis minima facere quaerat consectetur. Dolorem aliquid consequatur odio sit quaerat officiis, accusantium voluptatum iste.</p>
            <button>Ir a Cities</button>
        </div>
        <div className="right">
            <img src="https://images.hindustantimes.com/img/2023/01/10/1600x900/While-the-past-year-was-about-revenge-and-revival-_1673351689949.jpg" alt="imagen viaje" />
        </div>
        
    </div>
  )
}

export default CallToAction