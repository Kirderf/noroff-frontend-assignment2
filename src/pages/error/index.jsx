import React from 'react'

const Error = (props) => {
  const url = "https://http.cat/" + props.code
  return (
    <div className='min-w-max centering flex justify-center'>
      <img className="" src={url}/>
    </div>
  )
}

export default Error