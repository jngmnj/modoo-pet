import React, { useEffect, useState } from 'react'
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import app from "../../../firebase";
import { Link, useNavigate } from 'react-router-dom';
import colors from '../../styles/colors';
import storage from '../../utils/storage';

// const userDataFromStorage = localStorage.getItem("userData");
// const initialUserData = localStorage.getItem("userData") ? 
//   JSON.parse(localStorage.getItem("userData")) : {};
const initialUserData = storage.get("userData");

const LoginPage = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(initialUserData);

  // sign-in
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData(result.user);
        // console.log("result.user",JSON.stringify(result.user));
        localStorage.setItem("userData", JSON.stringify(result.user));
        // storage.set("userData", result.user);
        navigate("/")
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="/images/logo_symbol.svg"
            alt="Your Company"
          /> */}
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            로그인
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                이메일
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  비밀번호
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-orange-500 transition px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 `}
              >
                로그인
              </button>
            </div>
          </form>
          <div className="mt-10 text-sm flex justify-between">
            <Link
              to="/"
              className="text-orange-600 hover:text-orange-500"
            >
              비밀번호를 잊으셨나요?
            </Link>
            <Link
              to="/register"
              className="text-orange-600 hover:text-orange-500"
            >
              회원가입
            </Link>
          </div>
          {/* 간단로그인 */}
          <div className="mt-10 text-center text-sm">
            <p className="mt-10 text-center text-sm text-gray-500">
              간편로그인
            </p>
            <button
              onClick={handleAuth}
              className="font-semibold leading-6 text-orange-600 hover:text-orange-500"
            >
              구글로그인
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage