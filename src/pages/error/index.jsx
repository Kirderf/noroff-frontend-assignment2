import React from 'react'

const Error = (props) => {
  const url = "https://http.cat/" + props.code
  return (
    <div>
      <img src={url}/>
    </div>
  )
}

export default Error