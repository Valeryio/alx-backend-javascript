export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // try {
    //   throw new Error(`${fileName} cannot be processed`);
    // } catch(Error) {
    //     reject(Error);
    // }
    reject(new Error(`${fileName} cannot be processed`));
  });
}
