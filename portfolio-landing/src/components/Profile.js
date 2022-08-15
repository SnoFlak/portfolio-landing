import PROFILE_IMG from '../imgs/man.png';

const Profile = () => {
    const defaultStyles = {
        profilePic: {
            backgroundImage: `url(${PROFILE_IMG})`,
        }
    }

    return(
        <div className="profile-pic" style={defaultStyles.profilePic}>
        </div>
    )
}

export default Profile;