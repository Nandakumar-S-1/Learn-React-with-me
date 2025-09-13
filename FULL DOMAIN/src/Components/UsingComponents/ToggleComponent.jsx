import React from 'react'
import useToggle from '../../useState/ToggleHook'

const ToggleComponent = () => {
    const [isVisible,toggle]=useToggle(false)
    return (
    <div>
        <button onClick={toggle}>{isVisible ? 'hide' : 'show'}</button>
        {isVisible && <p>content is visible </p>}
    </div>
  )
}

export default ToggleComponent
