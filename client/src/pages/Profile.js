import React, { useState, useEffect} from 'react';
import AuthService from "../services/authService";
import API from "../utils/API";
import ProfileModal from '../components/ProfileModal';
import Badge from 'react-bootstrap/Badge'
import './css/Profile.css'

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const [profile, setProfile] = useState({
                                  avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnautiluslive.org%2Fvideo%2F2015%2F08%2F21%2Fshy-dumbo-octopus-hides-inside-its-own-tentacles&psig=AOvVaw0jo9F8ir0R5bYDQ0K3Z_Z0&ust=1616554094045000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjn37izxe8CFQAAAAAdAAAAABAD",
                                  username: "",
                                  location: "",
                                  gender: "",
                                  politics: "",
                                  children: "",
                                  drink: "",
                                  smoke: "",
                                  cannabis: "",
                                  age: "",
                                  sign: "",
                                  interests: []
                                })
  
  

  useEffect (() => {
      API.findProfileByName(currentUser.username)
          .then((res) => {
              console.log(res.data[0])
              setProfile(res.data[0])
          })
          .catch(err => { 
          if (err.response) { 
          console.log('error with response')
          } else if (err.request) { 
              console.log('error with request') 
          } else { 
              console.log('um, sh*ts really broken') 
          } });
  }, [])
  

    return(
        <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}'s</strong> Profile
          </h3>
        </header>
        <div className="card profileCard">
        <img className="profileImg" src={profile.avatar} alt='avatar'/>
            <h2>{profile.username}</h2>
                <h2>
                    <Badge variant="info"><i className="fas fa-birthday-cake"/> {profile.age}</Badge>
                    <Badge variant="info"><i className="fas fa-genderless"/> {profile.gender}</Badge>
                    <Badge variant="info"><i className="fas fa-landmark" /> {profile.politics}</Badge>
                    <Badge variant="info"><i className="fas fa-child" /> {profile.children}</Badge>
                    <Badge variant="info"><i className="fas fa-glass-martini" /> {profile.drink}</Badge>
                    <Badge variant="info"><i className="fas fa-smoking"/> {profile.smoke}</Badge>
                    <Badge variant="info"><i className="fas fa-cannabis" /> {profile.cannabis}</Badge>
                    <Badge variant="info"><i className="fas fa-star" /> {profile.sign}</Badge><br/>
                </h2>
                <h3>Interests:</h3>
                <div className="row">
                  <h3 style={{margin:"auto"}}>
                {profile.interests.map(item => (
                  <Badge pill variant="info">{item.interest}</Badge>
                ))}
                </h3>
                </div>
                <br/>
        <ProfileModal />
        </div>
        <p>
          <br></br>
          <br></br>
          <br></br>
        </p>
      </div>
    )
}

export default Profile;