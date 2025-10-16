import React from 'react';
import profilepic from '../assets/f4.jpg';

const ProfileCard=() => {
    return (
        <div style={{border: '1px solid #ccc', padding: '20px', Width: '200px', textAlign: 'center'}}>
            <img src={profilepic} alt="Profile" style={{width: '100px', borderRadius: '50%'}} />
            <h3>John Doe</h3>
            <p>Software Engineer</p>
        </div>
    );
}
export default ProfileCard;