import React from 'react'
import UserProfile from '../../Components/ProfileDetails/ProfileDetails.view'
import { pagetitle } from '../../helper/CommonFunction';

const Profile = (props) => {
  // title is too important for onpage seo
  pagetitle(props.pageTitle);

  return (
    <div>
        <UserProfile/>
    </div>
  )
}

export default Profile