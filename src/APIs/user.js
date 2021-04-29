import axios from "axios";

const userAPI = {
  getRandomUserNames: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://randomuser.me/api/?results=100")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

export default userAPI;
