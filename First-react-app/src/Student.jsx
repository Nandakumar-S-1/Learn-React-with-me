import profileImage from './assets/1.png'

function Student(props){
    return(
        <div className="stdCard">
            <img className='image' src={props.img} alt="profile" />
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Standard: {props.standard}</p>
            <p>Student: {props.isStudent}</p>
        </div>
    )
}
export default Student