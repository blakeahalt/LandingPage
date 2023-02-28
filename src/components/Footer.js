import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





function Footer () {
    let screen;
    if (window.innerWidth > 1200) {
        screen = (
            <div className='footer-container' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{textAlign: 'left', marginLeft: '20px', paddingTop: '10px', fontSize: '0.9em', lineHeight: '1.7', color: 'rgb(0, 62, 128, 0.9)' }}>
              <div>Blake Ahalt</div>
              <div>Los Angeles, CA</div>
              <div>508-299-9373</div>
              <div>blakeahalt@gmail.com</div>
              <div>
                <a style={{ fontSize: '1.5em' }} href='https://www.linkedin.com/in/blakeahalt/' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a style={{ fontSize: '1.5em', marginLeft: '10px' }} href='https://github.com/blakeahalt' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a style={{ fontSize: '1.5em', marginLeft: '10px' }} href='https://dev.to/blakeahalt' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faDev} />
                </a>
                <a style={{ fontSize: '1.5em', marginLeft: '10px' }} href='https://fineartamerica.com/profiles/blake-ahalt' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faPalette} />
                </a>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: '10px', fontSize: '0.9em', lineHeight: '1.4', color: 'rgb(0, 62, 128, 0.6)'}}>
                <div style={{marginTop: '-10px', marginLeft: '-40px'}}>
                    <a href="#" style={{ fontSize: '1.2em' }}>
                        <FontAwesomeIcon icon={faArrowAltCircleUp} />
                        <div style={{ fontSize: '0.7em' }}>Back to top</div>
                    </a>
                </div>
            </div>
            <div className="sitemap" style={{textAlign: 'left', marginRight: '50px', paddingTop: '10px', paddingBottom: '10px', fontSize: '1em', lineHeight: '1.15', color: 'rgb(0, 62, 128, 0.9)' }}>
              <div>
                <div><strong>Site Map</strong></div>  
                <div style={{ marginLeft: '5px', display: 'flex', flexDirection: 'column'}} >
                  <a href='/'>Home</a>
                  <a href='/about'>About</a>
                  <a href='/projects'>Projects</a>
                  <a href='/art'>Art</a>
                  <a href='/blog'>Blog</a>
                  <a href='/resume'>Resume</a>
                </div>              
              </div>
            </div>
          </div>
        )
      }
      
      else if (window.innerWidth > 665) {
        screen = (
            <div className='footer-container' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{textAlign: 'left', marginLeft: '20px', paddingTop: '10px', fontSize: '0.9em', lineHeight: '1.7', color: 'rgb(0, 62, 128, 0.9)' }}>
              <div>Blake Ahalt</div>
              <div>Los Angeles, CA</div>
              <div>508-299-9373</div>
              <div>blakeahalt@gmail.com</div>
              <div>
                <a style={{ fontSize: '1.5em' }} href='https://www.linkedin.com/in/blakeahalt/' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a style={{ fontSize: '1.5em', marginLeft: '10px' }} href='https://github.com/blakeahalt' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a style={{ fontSize: '1.5em', marginLeft: '10px' }} href='https://dev.to/blakeahalt' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faDev} />
                </a>
                <a style={{ fontSize: '1.5em', marginLeft: '10px' }} href='https://fineartamerica.com/profiles/blake-ahalt' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faPalette} />
                </a>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '10px', textAlign: 'center',fontSize: '0.9em', lineHeight: '1.4', color: 'rgb(0, 62, 128, 0.6)'}}>
            <div style={{marginTop: '-10px', marginLeft: '-60px'}}>
                    <a href="#" style={{ fontSize: '1.2em' }}>
                        <FontAwesomeIcon icon={faArrowAltCircleUp} />
                        <div style={{ fontSize: '0.7em' }}>Back to top</div>
                    </a>
                </div>
            </div>
            <div className="sitemap" style={{textAlign: 'left', marginRight: '30px', paddingTop: '10px', fontSize: '0.9em', lineHeight: '1.3', color: 'rgb(0, 62, 128, 0.9)' }}>
              <div>
                <div><strong>Site Map</strong></div>  
                <div style={{ marginLeft: '5px', display: 'flex', flexDirection: 'column'}} >
                  <a href='/'>Home</a>
                  <a href='/about'>About</a>
                  <a href='/projects'>Projects</a>
                  <a href='/art'>Art</a>
                  <a href='/blog'>Blog</a>
                  <a href='/resume'>Resume</a>
                </div>              
              </div>
            </div>
          </div>
        )
      } else {
        screen = (
            <div className='footer-container' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{textAlign: 'left', marginLeft: '10px', paddingTop: '10px', fontSize: '0.7em', lineHeight: '2.1', color: 'rgb(0, 62, 128, 0.9)' }}>
              <div>Blake Ahalt</div>
              <div>Los Angeles, CA</div>
              <div>508-299-9373</div>
              <div>blakeahalt@gmail.com</div>
              <div>
                <a style={{ fontSize: '1.5em' }} href='https://www.linkedin.com/in/blakeahalt/' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a style={{ fontSize: '1.5em', marginLeft: '10px' }} href='https://github.com/blakeahalt' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a style={{ fontSize: '1.5em', marginLeft: '10px' }} href='https://dev.to/blakeahalt' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faDev} />
                </a>
                <a style={{ fontSize: '1.5em', marginLeft: '10px' }} href='https://fineartamerica.com/profiles/blake-ahalt' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faPalette} />
                </a>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: '10px', fontSize: '0.9em', lineHeight: '1.4', color: 'rgb(0, 62, 128, 0.6)'}}>
            <div style={{marginTop: '-10px', marginLeft: '-60px'}}>
                    <a href="#" style={{ fontSize: '1.2em' }}>
                        <FontAwesomeIcon icon={faArrowAltCircleUp} />
                        <div style={{ fontSize: '0.7em' }}>Back to top</div>
                    </a>
                </div>
            </div>
            <div className="sitemap" style={{textAlign: 'left', marginRight: '15px', paddingTop: '10px', fontSize: '0.7em', lineHeight: '1.6', color: 'rgb(0, 62, 128, 0.9)' }}>
              <div>
                <div><strong>Site Map</strong></div>  
                <div style={{ marginLeft: '5px', display: 'flex', flexDirection: 'column'}} >
                  <a href='/'>Home</a>
                  <a href='/about'>About</a>
                  <a href='/projects'>Projects</a>
                  <a href='/art'>Art</a>
                  <a href='/blog'>Blog</a>
                  <a href='/resume'>Resume</a>
                </div>              
              </div>
            </div>
          </div>
        )
      }
    return (
        <div>
        {screen}
        </div>
    );
  }
  
  export default Footer
  