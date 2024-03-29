import React, { useEffect, useRef, useState } from 'react'
import Data from './file'
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import ImgCon from './ImgCon';
import './imgPage.css'

function Page() {
  let [data, setData] = useState(Data)
  let [i, setI] = useState(0)

  let LeftClick = () => {
    if (i <= 0) {
      setI(data.length - 1)
    }
    else {
      setI(i - 1)
    }

  }
  let RightClick = () => {

    if (i == data.length - 1) {
      setI(0)
    } else {
      setI(i + 1)
    }
  }

  let  changeSlide=()=>{
    if(i==data.length-1){
      setI(0)
    }else{
      setI(i + 1)
    }

  }
  // console.log(i)

  // useEffect(()=>{
  //   setTimeout(()=>{
      
  //   changeSlide()
  //   },5000)
  // })



  return (
    <div className='ImgPage'>
    <ImgCon data={data[i]}/>
      <div className="left" onClick={LeftClick}>{<FaChevronCircleLeft />}</div>
      <div className="right" onClick={RightClick}>{<FaChevronCircleRight />}</div>
      <div className="dot-icon">
        {data.map((val, i) => {

          return <div className="dot" key={i} onClick={() => { setI(i) }}><GoDot /></div>
        })}
      </div>


    </div>
  )
}

export default Page
