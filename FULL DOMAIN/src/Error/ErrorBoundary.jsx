import React from "react";
class ErrorBoundary extends React.Component{
    state={hasError:false}
// this will be called when ever theres an error 
//this function is mainly for updatindg the state
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    //this function will  also run if thers an eroor occured in the componet or children but 
    //the difference to the getDerivedStateFromError is here we will put some code to run like console logs and all
    componentDidCatch(error,errorInfo){
        console.log(error,errorInfo);
        
    }
    render(){
        if(this.state.hasError){
            return this.props.fallback
        }
        return this.props.children
    }
}

export default ErrorBoundary