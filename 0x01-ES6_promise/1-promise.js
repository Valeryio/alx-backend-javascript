
export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const response = {
        status: 200,
	body: 'Success'
      };
      resolve(response);
    } else {
      reject("The fape API is not working currently");
    }
  });
}
