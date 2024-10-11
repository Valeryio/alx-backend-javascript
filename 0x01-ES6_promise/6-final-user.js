import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];
  result.push(Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]));
  return (result);
}
