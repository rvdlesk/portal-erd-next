'use client';
import Image from 'next/image';
import Link from 'next/link';
import MainSearch from './main-search/MainSearch';
import Portals from './portals/Portals';

const TopBar = () => {
    return ( 
        <div className="topbar-cont">
              <Link href="/" className="logo">
                <div className="logo-container">
                  <img src="/img/logo-new.png" alt="Logo"  className="logotipo" />
                  <div className="logo-title"><h2>Ejército de<br/> República Dominicana</h2></div>
                </div>
              </Link>
              <div className="topbar-right">
               <MainSearch />
                <Portals />
              </div>
            </div>
     );
}
 
export default TopBar;