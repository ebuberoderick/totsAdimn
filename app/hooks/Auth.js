'use client'
import Cookies from 'js-cookie';
import { addData } from '../Store/reducers/UsersReducer';

export function SignInAuth(data, dispatch) {
  dispatch(addData(data?.data));
  Cookies.set('TOTSADMIN', data?.data?.bearer_token)
}


export function SignOut(dispatch) {
  dispatch(addData({}))
  Cookies.remove('TOTSADMIN')
}

export function Session(user) {
  const session = {
    status: '',
    user
  }

  
  if (Object?.keys(user).length !== 0 && Cookies.get('TOTSADMIN')) {
    session.status = verifyJWT(user?.value?.bearer_token)
  } else {
    session.status = 'unauthenticated'
  }
  return session
}

export function verifyJWT(jwtToken) {
  if (jwtToken) {
    return 'authenticated'
  } else {
    return 'unauthenticated'
  }
}






