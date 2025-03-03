import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap';

const Emptypage = () => {
  const navigate = useNavigate();

  return (
    <ToastContainer position="middle-center" >
      <Toast >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Team4U</strong>
        </Toast.Header>
        <Toast.Body className='col text-center'>비정상적인 접근입니다.</Toast.Body>
        <Toast.Body className='col text-center'>
          <Button size="sm" onClick={() => navigate('/')}>메인으로 돌아가기</Button>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Emptypage;