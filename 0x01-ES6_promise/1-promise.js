export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    try {
      if (success) {
        const response = {
          status: 200,
          body: 'Success',
        };
        resolve(response);
      } else {
        throw new Error('The fake API is not working currently');
      }
    } catch (error) {
      reject(error);
    }
  });
}
