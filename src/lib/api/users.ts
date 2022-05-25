import axios from "axios";
import { IRegisterUserValues } from "@types";
import { nanoid } from "nanoid";

export const getUsers = async (userId: string | string[] | undefined) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId ?? ""}`
  );
  return data;
};

export const addUser = async (values: IRegisterUserValues) => {
  const userId = `user-${nanoid()}`;
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
    { userId, ...values }
  );
  return data;
};

export const deleteUser = async (userId: string) => {
  const { data } = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`
  );
  return data;
};
