import { storage } from "../firebase/config";

export async function uploadImageToFirebase(image) {
  return new Promise((resolve, reject) => {
    const uploadTask = storage.ref(`images/${image?.name}`).put(image);
    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        reject(error);
      },
      () => {
        storage
          .ref("images")
          .child(image?.name)
          .getDownloadURL()
          .then(url => {
            resolve(url);
          })
          .catch(err => {
            reject(err);
          });
      }
    );
  });
}

  export async function deleteImgFromFirebase(imageUrl) {
    if (imageUrl && imageUrl !== "") {
      const imageRef = storage.refFromURL(imageUrl);
      try {
        await imageRef.delete();
        return true;
      } catch (err) {
        return false;
      }
    }
    return false;
  }