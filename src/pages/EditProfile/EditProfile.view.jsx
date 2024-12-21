import React from 'react'
import ProfileForm from '../../Components/ProfileDetails/EditProfile.view'
import { pagetitle } from '../../helper/CommonFunction';

const EditProfile = (props) => {
  // title is too important for onpage seo
  pagetitle(props.pageTitle);
  return (
    <div>
        <ProfileForm/>
    </div>
  )
}

export default EditProfile