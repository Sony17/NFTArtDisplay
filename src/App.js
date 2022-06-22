import './App.css';
import data from './data'
import React from 'react';


export default function App(props) {

  

  
  return (
    <div className="box">
    <h2 className='emoji'>{props.emoji}</h2>
    <h1 className='title'>{props.name}'s Generative Art NFT</h1>
    <div className="grid">
    { 
        data.map(photo => {
        return (
          <div  className="item">
            <img
              className="img"
              alt={"images"}
              src={photo.img}
            />
            <div className="caption ">
              <span className="credits">Photo by Sony
             
                <span> on </span> 
                <a href={photo.img} target="_blank" rel="noopener">  Deep Dream Generator
                  </a>
              </span>
            </div>
          </div>
          );
      }) }
    </div>
    <div className='footer'>
    {/* <a href="mailto:sohni2012@gmal.com" class="footer__link">sohni2012@gmail.com</a> */}
    <li class="social-list__item">
                    <a class="social-list__link" href="https://www.linkedin.com/in/sonyy/"  target="_blank" rel="noopener">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://www.instagram.com/sony.nft/"  target="_blank" rel="noopener">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>            
    </div>
  </div>
  );
}


