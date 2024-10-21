'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainMenu from '../menus/menu/MainMenu';
import TopBar from '../menus/topbar/TopBar';


export default function Header() {
  return (
    <>

      <official-header></official-header>
      <header className="header-light">
        <div className="topbar">
          <div className="container">
            <TopBar />
          </div>
        </div>
        <MainMenu />
      </header>
    </>
  );
}
