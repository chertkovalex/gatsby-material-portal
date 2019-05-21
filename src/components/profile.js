import React from 'react';
import { getCurrentUser } from '../services/auth';

const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <ul>
        <li>Name: {getCurrentUser().name}</li>
        <li>E-mail: {getCurrentUser().email}</li>
      </ul>
    </ul>
  </>
);

export default Profile;
