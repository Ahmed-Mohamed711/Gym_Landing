import React, { useState } from 'react'
import "./navbar3.css"
import Logo from "../../images3/logo.png";
import Bars from "../../images3/bars.png";
import { Link } from 'react-scroll';
const Navbar3 = () => {
  const mobile = window.innerWidth<=768?true:false;
  const [menuOpend,setMenuOpend]=useState(false);
  return (
    <div className='navbar3'>
        <img src={Logo} alt='' className='logo'/> 
        {(menuOpend=== false && mobile===true)?(
          <div
          style={{backgroundColor:'gray',
          padding:'0.5rem',
          borderRadius:'5px',
          cursor:'pointer'
        }}

          onClick={()=> setMenuOpend(true)}
          >
            <img src={Bars} alt='' style={{width:"1.5rem" ,height:'1.5rem'}}/></div>
        ): 
        (<ul className='navbar3-menu'>
          <li>
            <Link
            onClick={()=>setMenuOpend(false)}
            to='hero3'
            span={true}
            smooth={true}
            >Home</Link>
            </li>

          <li >
            <Link
            onClick={()=>setMenuOpend(false)}
            to='Project3'
            span={true}
            smooth={true}
            >Programs</Link></li>
          <li >
            <Link
            onClick={()=>setMenuOpend(false)}
            to='Reasons3'
            span={true}
            smooth={true}
          >Why us</Link></li>
          <li>
            <Link
            onClick={()=>setMenuOpend(false)}
            to='plans3'
            span={true}
            smooth={true}
            >Plans</Link></li>
          <li><Link
          onClick={()=>setMenuOpend(false)}
          to='testimonials3'
          span={true}
          smooth={true}
          >Testimonials</Link></li>
       </ul>
        )}
        
    </div>
  )
}

export default Navbar3