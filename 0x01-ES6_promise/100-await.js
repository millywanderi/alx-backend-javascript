import { uploadPhoto, createUser } from './utilis';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const userP = await createUser();

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
