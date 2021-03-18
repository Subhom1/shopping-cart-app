import { BASE_URL } from "../constant/config";
import { HANDLE_BAD_REQUEST } from "../redux/action/commonAction";
import { store } from "../redux/store";
export const fetchRequest = (endpoint, data) => {
  let finalUrl = `${BASE_URL}/${endpoint}`;
  return fetch(finalUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.json().then((jsonData) => {
          return {
            data: jsonData,
            status: response.status,
          };
        });
      } else if (response.status === 400) {
        store.dispatch(HANDLE_BAD_REQUEST("Something Went Wrong"));
      } else if (response.status === 404) {
        store.dispatch(HANDLE_BAD_REQUEST("Invalid Request, not found"));
      }
    })
    .catch((error) => console.error(error));
};
