import React from 'react';
import Mounting from '../Pages/Mounting';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '150px',
          alignItems: 'Center',
          backgroundColor: '#301934',
          color: 'whitesmoke',
        }}
      >
        <h1>Component Life Cycle</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '900px',
          }}
        >
          <div>
            <Link
              to="Mounting"
              style={{
                textDecoration: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Mounting
            </Link>
          </div>
          <div>
            <Link
              to="Updating"
              style={{
                textDecoration: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Updating
            </Link>
          </div>
          <div>
            <Link
              to="Unmounting"
              style={{
                textDecoration: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Unmounting
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default Header;
