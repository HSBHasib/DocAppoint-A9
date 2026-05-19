import React from 'react'

const ProfileCard = ({ patient }) => {
    const { name, email, image } = patient || {};
  return (
    <div>
      This is patient profile card component
    </div>
  )
}

export default ProfileCard
