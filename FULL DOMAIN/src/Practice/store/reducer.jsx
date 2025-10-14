import React from 'react'
const inital= {theme:'light'}

const reducer = (state=inital,action) => {
    switch (action,type){
        case 'theme_toggle':
            return {theme:state.theme ==='light' ? 'dark' :'light' }
        default :
            return state
    }
}

export default reducer