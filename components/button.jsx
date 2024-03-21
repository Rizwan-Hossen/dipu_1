import React from 'react'
export default function Button(props) {
  return (
<button className={`button-6 ${props.class}`} role="button">
    {props.children}
</button>

  )
}
