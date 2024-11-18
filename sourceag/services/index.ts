import axios from "axios";

const BASE_URL = "https://ecyfsr05hi.execute-api.eu-central-1.amazonaws.com";

axios.interceptors.request.use((config) => {
  config.headers["Content-Type"] = `application/json`;
  return config;
});

/**
 * get Stem Detail by Stem Id
 * @param stemId
 * @returns
 */
const getStemByID = async (stemId: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/stems/${stemId}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * update Stem Detail by Stem Id and updated detail JSON
 * @param {string} stemId
 * @param {*} updated
 * @return {*}
 */
const updateStem = async (stemId: string, updated: any) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${BASE_URL}/stems/${stemId}`, updated)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getStemByID, updateStem };
