import profileImage from './assets/1.png'
function Card(){
    return(
        <div className='card'>
            <img className='image' src={profileImage} alt="profie" />
            <h3 className='cardHead'>Ashika Sivan</h3>
            <p className='cardText'>Im a Full stack developer who focuses on React.</p>
        </div>
    )
}
export default Card;