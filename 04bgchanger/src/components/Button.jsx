import React from 'react'

function Button({textColor, btnColor, textName}) {
//   const handleClick = ()=>{
//     document.body
//   }

  return (
    <button style={{"color":textColor, "backgroundColor":btnColor}} className="rounded-4xl px-3 py-1">{textName}</button>
  )
}

export default Button