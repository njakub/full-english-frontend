import { axiosInstance } from "../axiosInstance";

type User = {
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export const postUser = (user: User) => {
  return axiosInstance
    .post(`/users`, user)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
