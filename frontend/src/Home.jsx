import React from 'react'
import {Link} from 'react-router-dom'
import {TbTruckDelivery} from 'react-icons/tb'

function Home() {
    
  return (
    
    <div>
        <div>
            {/* <Link to='/Home'>Home</Link>
            <Link to='/OurServices'>Our Services</Link>
            <Link to='/Branch'>Branch</Link>
            <Link to='/Registion'>Registion</Link>
            <Link to='/FindUs'>Find Us</Link>   
            <Link to='/ContactUs'>Contact Us</Link> */}
            <h3><TbTruckDelivery/>Yoga Transport</h3>
            
            <button>Home</button>
            <button>Our Services</button>
            <button>Branch</button>
            <button>Registion</button>
            <button>Find Us</button>
            <button>Contact Us</button>
            <button type='submit'>Log in</button>  
        </div> 

        <div>
            <h1>
                A trusted provider of
                <div>Courier services.</div>
            </h1>
            <div>
                <h4>
                    we deliver your products safely to
                    <div>your home in a reasonable time.</div>
                </h4>
            </div>
            <div>
                <button>Get started</button>
                <button>Pick-Up Request</button>

                <img src={"/images/images.png"} alt=""/>
            </div>
        </div>  
    </div>
  )

    // const component = () => {
    //     return (
    //         <div>
    //             <img src={"logo192.png"} alt="logo"/>
    //         </div>
    //     )
    // }
}

export default Home