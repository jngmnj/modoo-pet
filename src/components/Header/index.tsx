import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, User } from 'firebase/auth';
import app from "../../../firebase";
import storage from '../../utils/storage';

// const initialUserData = localStorage.getItem("userData")
//   ? JSON.parse(localStorage.getItem("userData"))
//   : null;
// interface userDataProps {
//   username: string;
//   photoURL: string;
// }
const initialUserData = storage.get<User>("userData");

const Header = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate()
  const [userData, setUserData] = useState(initialUserData);
  const { pathname } = useLocation();

  useEffect(() => {
    const userDataFromStorage = storage.get<User>("userData");
    setUserData(userDataFromStorage);
    console.log("setUserData 1(pathname)");
  }, [pathname]);
  
  useEffect(() => {
    function checkUserData() {
      const item = storage.get<User>("userData");

      if (item) {
        setUserData(item);
        console.log("setUserData 2(event listener)")
      }
    }

    window.addEventListener("storage", checkUserData);

    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);
  

  // sign-out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userData");
        // storage.remove("userData");
        setUserData(null);
        navigate("/");
      })
      .catch((error) => {
        alert(error.massage);
      });
  };

  return (
    <nav className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!--
                Icon when menu is closed.

                Menu open: "hidden", Menu closed: "block"
              --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
                Icon when menu is open.

                Menu open: "block", Menu closed: "hidden"
              --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <img
                  className="h-8 w-auto"
                  src="/images/logo.svg"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 transition">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-600 hover:bg-gray-700 hover:text-white" --> */}
                {/* <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a> */}
                <Link
                  to="/hospitals"
                  className="text-gray-600 hover:text-orange-500 rounded-md px-3 py-2 text-base font-semibold"
                >
                  동물병원 찾기
                </Link>
                <Link
                  to="/review"
                  className="text-gray-600 hover:text-orange-500 rounded-md px-3 py-2 text-base font-semibold"
                >
                  병원 리뷰
                </Link>
                <Link
                  to="/promotion"
                  className="text-gray-600 hover:text-orange-500 rounded-md px-3 py-2 text-base font-semibold"
                >
                  프로모션
                </Link>
                <Link
                  to="/community"
                  className="text-gray-600 hover:text-orange-500 rounded-md px-3 py-2 text-base font-semibold"
                >
                  커뮤니티
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* 로그인 상태 */}
            {userData ? (
              <>
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      {userData?.photoURL && (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={userData?.photoURL}
                          alt=""
                        />
                      )}
                    </button>
                  </div>

                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    // tabIndex="-1"
                  >
                    <a
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      // tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      내 프로필
                    </a>
                    {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">설정</a> */}
                    <button
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      // tabIndex="-1"
                      id="user-menu-item-2"
                      onClick={handleSignOut}
                    >
                      로그아웃
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-orange-600 hover:text-orange-500 rounded-md px-3 py-1 text-base font-semibold mr-4"
                >
                  로그인
                </Link>
                <Link
                  to="/register"
                  className="text-orange-600 hover:text-orange-500 border border-orange-500 rounded-md px-3 py-1 text-base font-semibold"
                >
                  회원가입
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header