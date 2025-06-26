import React from 'react'

function Button({textColor, btnColor, textName, onClick}) {

  return (
    <button onClick={onClick} style={{"color":textColor, "backgroundColor":btnColor}} className="rounded-4xl px-3 py-1 cursor-pointer shadow-xl/30">{textName}</button>
  )
}

export default Button