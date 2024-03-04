
function ProfilePicture() {
    const imageUrl = './src/assets/perfect_selfie.jpg';
    const handleClick = (e) => e.target.style.display = 'none';

    return(<img onClick={(e) => handleClick(e)} src={imageUrl} width={'200px'}></img>);
}

export default ProfilePicture