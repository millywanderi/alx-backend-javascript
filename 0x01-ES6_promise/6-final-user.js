import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userP = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const data = await Promise.allSettled([userP, photo])
    .then((results) => results.map((result) => {
      if (result.status !== 'fulfilled') {
        return {
          status: 'rejected',
          value: result.reason.toString(),
        };
      }
      return result;
    }));
  return Promise.resolve(data);
}
