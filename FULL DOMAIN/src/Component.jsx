import React,{useRef} from 'react'

const Component = () => {
    const toggle= useRef(false)
    function handleChange(){
      toggle.current.checked = !toggle.current.checked
    }
  return (
    <div>
      <input type="checkbox" ref={toggle} />
      <button onClick={handleChange}>change</button>
    </div>
  )
}

export default Component
