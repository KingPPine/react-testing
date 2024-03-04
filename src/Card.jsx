import perfectSelfie from './assets/perfect_selfie.jpg'

function Card() {
    return (
        <div className='card'>
            <img  className='card-image' src={perfectSelfie} alt="profile picture"/>
            <h2 className='card-title'>Zachary</h2>
            <p className='card-text'>Software Engineer II at Grainger and I make video games</p>
        </div>
    )
}

export default Card;