import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import { Slide } from 'react-awesome-reveal';

function Nav({ isWhite }) {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowNav(false);
      }
    }
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [navRef]);

  function handleNavTitleClick() {
    setShowNav(false);
  }

  return (

    <nav ref={navRef} className={`nav ${isWhite ? 'white-nav' : ''}`}>
        <div>
            <a className="home-button" href="/">
                Home
            </a>
        </div>
      {window.innerWidth < 665 ? (
        <>
          <div className={`nav-titles ${showNav ? 'show' : 'hide'}`}>
              <div
                style={{
                  backgroundColor: 'rgb(0,0,0,0.5)',
                  height: '99vh',
                  width: '250%',
                  marginLeft: '-150%',
                  borderRadius: '10px',
                  paddingTop: '10px',
                  marginTop:'18px',
                }}
                direction="right"
              >
                <div style={{marginBottom: '10px', fontSize: '1.4em'}}>
                  <a
                    className="navbar-title"
                    href="/about"
                    onClick={handleNavTitleClick}
                  >
                    About
                  </a>
                </div>
                <div style={{marginBottom: '10px', fontSize: '1.4em'}}>
                  <a
                    className="navbar-title"
                    href="/projects"
                    onClick={handleNavTitleClick}
                  >
                    Projects
                  </a>
                </div>
                <div style={{marginBottom: '10px', fontSize: '1.4em'}}>
                  <a
                    className="navbar-title"
                    href="/art"
                    onClick={handleNavTitleClick}
                  >
                    Art
                  </a>
                </div>
                <div style={{marginBottom: '10px', fontSize: '1.4em'}}>
                  <a
                    className="navbar-title"
                    href="/blog"
                    onClick={handleNavTitleClick}
                  >
                    Blog
                  </a>
                </div>
                <div style={{marginBottom: '10px', fontSize: '1.4em'}}>
                  <a
                    className="navbar-title"
                    href="/resume"
                    onClick={handleNavTitleClick}
                  >
                    Resume
                  </a>
                </div>
              </div>
          </div>
          <div className="menu-icon" onClick={() => setShowNav(!showNav)}>
            &#9776;
          </div>
        </>
      ) : (
        <>
          <div className={`nav-titles ${showNav ? 'show' : 'hide'}`}>
            <div>
              <a
                className="navbar-title"
                href="/about"
                onClick={handleNavTitleClick}
              >
                About
              </a>
            </div>
            <div>
                <a
                className="navbar-title"
                href="/projects"
                onClick={handleNavTitleClick}
                >
                Projects
                </a>
            </div>
            <div>
              <a
                className="navbar-title"
                href="/art"
                onClick={handleNavTitleClick} >
                Art
              </a>
            </div>
            <div>
              <a 
                className="navbar-title"
                href="/blog"
                onClick={handleNavTitleClick}>
                Blog
              </a>
            </div>
            <div>
              <a 
                className="navbar-title"
                href="/resume"
                onClick={handleNavTitleClick}>
                Resume
              </a>
            </div>
          </div>
          <div className="menu-icon" onClick={() => setShowNav(!showNav
)}>
                &#9776;
                </div>
            </>


        )}
    </nav>
  )
}

export default Nav
