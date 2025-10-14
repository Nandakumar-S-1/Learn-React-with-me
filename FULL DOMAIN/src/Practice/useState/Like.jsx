import React, { useState } from 'react'

const Like = () => {
    const [like,setLike]=useState(false)
    return (
    <div>
      <button onClick={()=>setLike(!like)}>{like?"unlike":"like"}</button>
    </div>
  )
}

export default Like
