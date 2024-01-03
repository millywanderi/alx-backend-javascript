import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoP = uploadPhoto();
    const userP = createUser();
    const [photoResponse, userResponse] = await Promise.all([photoP, userP]);
    return {
      photo: photoResponse,
      userP: userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
export default asyncUploadUser;
