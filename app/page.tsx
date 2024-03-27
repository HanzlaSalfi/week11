import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaPencilRuler } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { ImCogs } from "react-icons/im";


const HomePage = () => {
  return (
    <div className="bg-[#050522] text-white min-h-screen" >
    <div className=" w-[90%] m-auto flex justify-between pt-4">
      <h6 className="text-white text-lg">Next JS</h6>
      <button className="text-white bg-blue-400 py-2 px-8 rounded-md hover:bg-blue-500 transition">CV</button>
    </div>
    
    <div>
      <h1 className="  text-blue-300 text-2xl flex justify-center font-bold font-serif mt-8">John Wick</h1>
    </div>
    
    <div>
      <h1 className="  text-white text-sm flex justify-center font-bold font-serif mt-2">Actor and Artist</h1>
    </div>
    
    <div>
      <h6 className="  text-white text-[12px] flex justify-center font-serif mt-2">John wick is a 2014 American neo-noir action thriller film directed by Chand <br />
      Stahelski in his directional debut from a screenplay by Derek Kolstad.</h6>
    </div>

    <div className='mt-6 flex items-center justify-center gap-[80px]'>
    <FaFacebook /> 
    <IoLogoYoutube />
    <IoLogoYoutube />

    </div>
    <div className=' flex justify-center mt-8'>
      <img src="/images/john.png" alt="" className=" rounded-full h-[100px] w-[100px]"/>
    </div>
    <div>
      <h6 className=" w-[90%] m-auto mt-10 text-white font-bold font-serif">Services I Offer</h6>
    </div>
    <div>
      <h6 className=" w-[90%] m-auto text-[11px] mt-5 text-white font-serif">Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster losef Tarasov (Alfie Allen) and his thugs steal Johns prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, losefs father (Michael Nyqvist) - Johns former colleague - puts a huge bounty on Johns head.</h6>
    </div>
    <div className=' mt-16 flex justify-between ml-[70px] mr-[70px] '>
     
      <div className="card1 rounded-md  text-black h-60 w-80 bg-white ">
      <h6 className=' text-black flex justify-center'><FaPencilRuler  size={30} className='mt-5 ' />
      </h6>
        <p className='mt-10 text-xs pr-3 pl-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat numquam iste optio aspernatur nisi doloribus, fugit illum quisquam omnis.</p>
      </div>
      
      <div className="card2 rounded-md  text-black h-60 w-80 bg-white ">
      <h6 className=' text-black flex justify-center'><FaBriefcaseMedical  size={30} className='mt-5 ' />
      </h6>
        <p className='mt-10 text-xs pr-3 pl-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat numquam iste optio aspernatur nisi doloribus, fugit illum quisquam omnis.</p>
      </div>

      <div className="card3 rounded-md  text-black h-60 w-80 bg-white ">
      <h6 className=' text-black flex justify-center'><ImCogs  size={30} className='mt-5 ' />
      </h6>
        <p className='mt-10 text-xs pr-3 pl-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat numquam iste optio aspernatur nisi doloribus, fugit illum quisquam omnis.</p>
      </div>
      
    </div>
    <div>
    <h6 className=" w-[90%] m-auto mt-10 text-white font-bold font-serif">Services I Offer</h6>
    </div>
    <div>
      <h6 className=" w-[90%] m-auto text-[11px] mt-5 text-white font-serif">Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster losef Tarasov (Alfie Allen) and his thugs steal Johns prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, losefs father (Michael Nyqvist) - Johns former colleague - puts a huge bounty on Johns head.</h6>
    </div>
    <div className=' flex justify-center mt-8 gap-16'>
      <img src="/images/image1.jpg" alt="" className="  h-[300px] w-[500px] "/>
      <img src="/images/image2.jpg" alt="" className="  h-[300px] w-[500px] "/>
    </div>
    <div className=' flex justify-between mt-8 gap-16'>
      <img src="/images/image3.jpg" alt="" className="  h-[300px] w-[500px]"/>
      <img src="/images/image4.jpg" alt="" className="  h-[300px] w-[500px]"/>
    </div>
    <div className=' flex justify-between mt-8 gap-16'>
      <img src="/images/image5.jpg" alt="" className="  h-[300px] w-[500px]"/>
      <img src="/images/image6.jpg" alt="" className="  h-[300px] w-[500px]"/>
    </div>

    
    </div>
    
  )
}

export default HomePage
