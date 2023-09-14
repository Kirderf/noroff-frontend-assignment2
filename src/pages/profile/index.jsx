import React from 'react'
import InputField from '../../components/InputField'
import AuthGuard from '../auth/AuthGuard'


const Profile = () => {
  return (
    <div><InputField placeHolder={"Tst"} /></div>
  )
}

export default AuthGuard(Profile)