import React from 'react'

function ImgCon({data}) {
  return (
    <div className="img-con">
    <img src={data.imgUrl} alt="" />
  </div>
  )
}

export default ImgCon
