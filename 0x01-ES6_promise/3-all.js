import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignUp() {
  const photo = uploadPhoto();
  const userP = createUser();

  return Promise.all([photo, userP])
    .then((data) => {
      const result = Object.assign(...data);
      console.log(`${result.body} ${result.firstName} ${result.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
