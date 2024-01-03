import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const userP = await createUser();
    const [photoResponse, userResponse] = await Promise.all([photo, userP]);
    return {
      photo,
      userP,
    };
  } catch (error) {
    return {
      photo: null,
      userP: null,
    };
  }
}
export default asyncUploadUser;
