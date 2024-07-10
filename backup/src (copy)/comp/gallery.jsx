import React, {useEffect} from 'react';
import imgKotak from "../assets/1.png";

const Gallery = () => {
  console.log(imgKotak);
  return(
    <>
    <div className='container'>
      <div className='gallery'>
      {
        imgKotak.map((file, index) => (
          <div key={index}>
            {console.log({file})}
          </div>
        ))
      }
      </div>
    </div>
    </>
  )
}
export default Gallery

// <img src={imgKotak} className='content-1' />
// <img src={imgKotak} className='content-2'/>
// <img src={imgKotak} className='content-3'/>
// <img src={imgKotak} className='content-4'/>
// <img src={imgKotak} className='content-5'/>
// <img src={imgKotak} className='content-6'/>
// <img src={imgKotak} className='content-7'/>
// <img src={imgKotak} className='content-8'/>
