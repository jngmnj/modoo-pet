import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#243441] pt-10 pb-4 text-white">
      <Container>
        <div>
          {/* top */}
          <div className="xl:grid xl:grid-cols-2 border-b border-b-[#516477] pb-8 mb-8">
            <div>
              <div className="mb-8">
                <Link to="/">
                  <img src="/images/logo_w.svg" alt="" />
                </Link>
              </div>
              <p className="font-medium text-base">
                한눈에 찾아보는 반려동물 정보 모두펫
              </p>
            </div>
            {/* 반응형.. */}
            <div className="xl:grid xl:grid-cols-3 gap-8">
              <div>
                <div className="font-semibold text-lg mb-4">Services</div>
                <div className="text-[#BFC3C7] text-sm">
                  <ul>
                    <li>
                      <a
                        onClick={() => alert("준비중입니다.")}
                        className="py-1 pr-2"
                      >
                        마케팅 제휴
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={() => alert("준비중입니다.")}
                        className="py-1 pr-2"
                      >
                        병원등록
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="font-semibold text-lg mb-4">About</div>
                <div className="text-[#BFC3C7] text-sm">
                  <ul>
                    <li>
                      <button
                        onClick={() => alert("준비중입니다.")}
                        className="py-1 pr-2"
                      >
                        모두펫 소개
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => alert("준비중입니다.")}
                        className="py-1 pr-2"
                      >
                        부서안내
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => alert("준비중입니다.")}
                        className="py-1 pr-2"
                      >
                        회사연혁
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="font-semibold text-lg mb-4">Help</div>
                <div className="text-[#BFC3C7] text-sm">
                  <ul>
                    <li>
                      <button
                        onClick={() => alert("준비중입니다.")}
                        className="py-1 pr-2"
                      >
                        자주묻는 질문
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => alert("준비중입니다.")}
                        className="py-1 pr-2"
                      >
                        고객센터
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* bottom1 */}
          <div className="text-[#BFC3C7]">
            <h3 className="font-semibold text-base mb-2">모두펫</h3>
            <div className="leading-6">
              <p className="text-sm">
                주소 : 서울특별시 성동구 모두펫 빌딩 2101호&emsp;대표자 : 지정민
              </p>
              <p className="text-sm">
                사업자등록번호 : 000-00-00000&emsp;통신판매업신고 :
                제2023-서울성동-0000호
              </p>
              <p className="text-sm">
                개인정보보호책임자 : 지정민&emsp;info@modoopet.com
              </p>
            </div>
          </div>
          {/* bottom2 */}
          <div className="text-[#BFC3C7] pt-12 pb-2 xl:grid xl:grid-cols-2 text-sm">
            <p className="text-sm">©2023 Modoopet Corp. All rights reserved.</p>
            <ul className="xl:flex gap-6 justify-end">
              <li>
                <button
                  onClick={() => alert("준비중입니다.")}
                  className="py-1 pl-2 text-sm"
                >
                  이용약관
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("준비중입니다.")}
                  className="py-1 pl-2 text-sm"
                >
                  개인정보처리방침
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("준비중입니다.")}
                  className="py-1 pl-2 text-sm"
                >
                  위치정보서비스 이용약관
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer