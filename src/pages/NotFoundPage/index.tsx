import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';

const NotFoundPage = () => {
  return (
    <Container>
      <div className='container'>
        <div className="">
          <img src="/img/not-found.png" alt="" />
          <p>요청하신 페이지가 존재하지 않습니다. </p>
          <p>
            <Link to={'/'}>홈으로</Link>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default NotFoundPage