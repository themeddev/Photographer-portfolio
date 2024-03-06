import React from 'react';
import { ImFacebook, ImTwitter, ImPinterest, ImInstagram, ImYoutube} from 'react-icons/im'



const Socials = () => {
  return (
    <div className='hidden xl:flex ml-20'>
      <ul className='flex gap-4'>
        <li>
          <a href='#' target='_blank'> <ImFacebook /> </a>
        </li> 
        <li> 
          <a href='#' target='_blank'> <ImTwitter /> </a>
        </li> 
        <li> 
          <a href='#' target='_blank'> <ImInstagram /> </a>
        </li> 
        <li> 
          <a href='#' target='_blank'> <ImPinterest /> </a>
        </li> 
        <li> 
          <a href='#' target='_blank'> <ImYoutube/> </a>
        </li>
        
      </ul>
    </div>
    
  )
};

export default Socials;
