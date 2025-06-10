import PropTypes from 'prop-types'

function UserGreeting(props){
    let loginMes=<h2 className="logMes">Please Login To continue</h2>
    let WelcomeMes= <h2 className="welcomeMes"> Welcome {props.name}</h2>

    return (props.isLogged ? WelcomeMes : loginMes)
    // return (props.isLogged ?  <h3 className="welcomeMes"> Welcome {props.name} </h3> :
    //                           <h3 className="logMes">Login to continue</h3>)
}

UserGreeting.PropTypes ={
    isLogged:PropTypes.bool,
    name:PropTypes.string
}

export default UserGreeting