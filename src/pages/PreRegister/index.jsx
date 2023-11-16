import React from "react";
import Container from "../../components/Container";

const RegisterPage = () => {
  return (
    <Container>
      <form>
        <div className="space-y-12">
          {/*  */}
          <div className="">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              회원가입
            </h2>
            <p className="text-center mt-1 text-sm leading-6 text-gray-600">
              모두펫 가입하시고 회원전용 기능을 사용해 보세요!
            </p>

            <div className="max-w-2xl mx-auto mt-12">
              {/* 이름 */}
              <div className="w-full mb-4">
                <label
                  htmlFor="username"
                  className="block text-base font-semibold leading-7 text-gray-900"
                >
                  아이디
                </label>
                <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                    placeholder="janesmith"
                  />
                </div>
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="username"
                  className="block text-base font-semibold leading-7 text-gray-900"
                >
                  비밀번호
                </label>
                <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                    placeholder="janesmith"
                  />
                </div>
              </div>
              <div className="w-full border-b border-gray-900/10 pb-12">
                <label
                  htmlFor="username"
                  className="block text-base font-semibold leading-7 text-gray-900"
                >
                  비밀번호 확인
                </label>
                <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                    placeholder="janesmith"
                  />
                </div>
              </div>
              {/* 약관 */}
              <div className="w-full pt-12 mb-4">
                <label
                  htmlFor="username"
                  className="block text-base font-semibold leading-7 text-gray-900"
                >
                  이름
                </label>
                <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                    placeholder="janesmith"
                  />
                </div>
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="username"
                  className="block text-base font-semibold leading-7 text-gray-900"
                >
                  닉네임
                </label>
                <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                    placeholder="janesmith"
                  />
                </div>
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="username"
                  className="block text-base font-semibold leading-7 text-gray-900"
                >
                  이메일
                </label>
                <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                    placeholder="janesmith"
                  />
                </div>
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="username"
                  className="block text-base font-semibold leading-7 text-gray-900"
                >
                  생년월일
                </label>
                <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                    placeholder="janesmith"
                  />
                </div>
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="username"
                  className="block text-base font-semibold leading-7 text-gray-900"
                >
                  성별
                </label>
                <div className="mt-2 flex">
                  <div className="radio_box">
                    <input
                      type="radio"
                      name="usergender"
                      id="radio01"
                      className="w-full h-full"
                      value="F"
                    />
                    <label htmlFor="radio01" className="absolute left-0 z-10">
                      여자
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            가입하기
          </button>
        </div>
      </form>
    </Container>
  );
};

export default RegisterPage;
