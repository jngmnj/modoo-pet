import React from 'react'
import Container from '../../components/Container'

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
              <div className="border-b border-gray-900/10 pb-12">
                <div className="w-full mb-4">
                  <label
                    htmlFor="id"
                    className="block text-base font-semibold leading-7 text-gray-900"
                  >
                    아이디
                  </label>
                  <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500">
                    <input
                      type="text"
                      name="id"
                      id="id"
                      autoComplete="id"
                      className="outline-none block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                      placeholder="아이디를 입력해주세요."
                    />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <label
                    htmlFor="password"
                    className="block text-base font-semibold leading-7 text-gray-900"
                  >
                    비밀번호
                  </label>
                  <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      className="outline-none block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                      placeholder="비밀번호를 입력해주세요."
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="password2"
                    className="block text-base font-semibold leading-7 text-gray-900"
                  >
                    비밀번호 확인
                  </label>
                  <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500">
                    <input
                      type="password"
                      name="password2"
                      id="password2"
                      autoComplete="password2"
                      className="outline-none block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                      placeholder="비밀번호를 다시 입력해주세요."
                    />
                  </div>
                </div>
              </div>
              {/* 약관 */}
              <div className="border-b border-gray-900/10 pb-12">
                <div className="w-full pt-12 mb-4">
                  <label
                    htmlFor="name"
                    className="block text-base font-semibold leading-7 text-gray-900"
                  >
                    이름
                  </label>
                  <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="outline-none block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                      placeholder="이름을 입력해주세요."
                    />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <label
                    htmlFor="nickname"
                    className="block text-base font-semibold leading-7 text-gray-900"
                  >
                    닉네임
                  </label>
                  <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500">
                    <input
                      type="text"
                      name="nickname"
                      id="nickname"
                      autoComplete="username"
                      className="outline-none block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                      placeholder="닉네임을 입력해주세요."
                    />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold leading-7 text-gray-900"
                  >
                    이메일
                  </label>
                  <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="outline-none block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                      placeholder="이메일을 입력해주세요."
                    />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <label
                    htmlFor="birth"
                    className="block text-base font-semibold leading-7 text-gray-900"
                  >
                    생년월일
                  </label>
                  <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500">
                    <input
                      type="text"
                      name="birth"
                      id="birth"
                      autoComplete="birth"
                      className="outline-none block flex-1 border-0 bg-transparent py-2 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-8"
                      placeholder="생년월일을 8자리를 입력해주세요."
                    />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <label
                    htmlFor="gender"
                    className="block text-base font-semibold leading-7 text-gray-900"
                  >
                    성별
                  </label>
                  <div className="mt-2 flex gap-4">
                    <div className="radio_box relative w-1/2">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          id="radio01"
                          className="hidden appearance-none peer"
                          value="F"
                          checked
                        />
                        <div className="cursor-pointer peer-checked:bg-orange-500 peer-checked:text-white peer-checked:border-none bg-gray-50 w-full py-3 text-center rounded-lg border box-border ">
                          여자
                        </div>
                      </label>
                    </div>
                    <div className="radio_box relative w-1/2">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          id="radio02"
                          className="hidden appearance-none peer"
                          value="M"
                        />
                        <div className="cursor-pointer transition peer-checked:bg-orange-500 peer-checked:text-white peer-checked:border-none bg-gray-50 w-full py-3 text-center rounded-lg border box-border ">
                          남자
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-md transition bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            가입하기
          </button>
        </div>
      </form>
    </Container>
  );
}

export default RegisterPage