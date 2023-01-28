import React, { createContext, useState } from "react";
import { apiGet, apiPost } from "../utils/api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  courseDetails,
  CourseDetails,
} from "../pages/TutorCourseOperations/TutorCourseOperations";
import { UploadFile, User } from "../utils/Interfaces/index.dto";
import { AxiosResponse } from "axios";

export interface LoginData {
  email: string;
  password: string;
}
export interface GlobalStateInterface {
  LoginConfig: (data: LoginData) => Promise<void>;
  user: User | undefined;
  loading: Boolean;
  error: null | String;
  loggedInUser: () => void;
}
export const dataContext = createContext<GlobalStateInterface | null>(null);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<String | null>(null);
  /** ==============Login======= **/
  const LoginConfig: (data: LoginData) => Promise<void> = async (
    data: LoginData
  ) => {
    try {
      const response: AxiosResponse<any, any> = await apiPost(
        "/users/login",
        data
      );
      const signature: string = response.data.signature;

      localStorage.setItem("signature", signature);
      localStorage.setItem("user", response.data.areaOfInterest || "backend");
      if (response.status === 200) {
        window.location.href = "/dashboard";
      }
    } catch (err: any) {
      console.log(err.response.data, "error message");
      toast.error(err.response?.data?.Error || "Something went wrong");
    }
  };

  // method should be placed into actions
  const loggedInUser = async () => {
    const { data } = await apiGet("/users/profile");
    setUser(data.userDetails);
    setLoading(false);
  };

  return (
    <dataContext.Provider
      value={{
        LoginConfig,
        loggedInUser,
        user,
        loading,
        error,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(dataContext) as GlobalStateInterface;
  if (context === undefined) {
    throw new Error("useAuth must be used within the auth provider");
  }
  return context;
};

export default DataProvider;
