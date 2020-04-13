import api from "./api";
import constants from "../constans/api";

export const authenticateUser = (data) =>
	api().post(constants.endpoints.auth, { ...data });
export const registerUser = (data) => 
	api().post(constants.endpoints.register,{...data});