import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          HONORABLE LEGISLATURA DE TUCUMAN
        </a>
      </div>
    </MDBFooter>
  );
}