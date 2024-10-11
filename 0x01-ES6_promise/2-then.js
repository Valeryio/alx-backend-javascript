
export default function handleResponseFromAPI(promise) {
  promise.then(() => {
      const response = {
        status: 200,
	body: 'Success'
      };
      resolve(response);
    }).catch((error) => {
      console.log("L'erreur est : ", error);
    });
}
