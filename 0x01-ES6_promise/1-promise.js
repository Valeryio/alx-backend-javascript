export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {

    try {
      if (success) {
        const response = {
          status: 200,
          body: 'Success'
        };
        resolve(response);
      } else {
        throw new Error('');
      }
    } catch (error) {
      reject("The fape API is not working currently");
    }
  });
}
