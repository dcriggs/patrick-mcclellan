import React from 'react';

const InstagramEmbed = () => {
  return (
    <blockquote 
      className="instagram-media" 
      data-instgrm-captioned 
      data-instgrm-permalink="https://www.instagram.com/reel/DBYnfGjSUg3/?utm_source=ig_embed&utm_campaign=loading" 
      data-instgrm-version="14" 
      style={{
        background: '#FFF',
        border: '0',
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0, 0, 0, 0.5), 0 1px 10px 0 rgba(0, 0, 0, 0.15)',
        margin: '1px',
        maxWidth: '540px',
        minWidth: '326px',
        padding: '0',
        width: 'calc(100% - 2px)',
      }}
    >
      <div style={{ padding: '16px' }}>
        <a 
          href="https://www.instagram.com/reel/DBYnfGjSUg3/?utm_source=ig_embed&utm_campaign=loading" 
          style={{
            background: '#FFFFFF',
            lineHeight: 0,
            padding: '0',
            textAlign: 'center',
            textDecoration: 'none',
            width: '100%',
          }} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div 
              style={{
                backgroundColor: '#F4F4F4',
                borderRadius: '50%',
                height: '40px',
                marginRight: '14px',
                width: '40px',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
              <div 
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '4px',
                  height: '14px',
                  marginBottom: '6px',
                  width: '100px',
                }}
              />
              <div 
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '4px',
                  height: '14px',
                  width: '60px',
                }}
              />
            </div>
          </div>
          <div style={{ padding: '19% 0' }} />
          <div 
            style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}
          >
            <svg 
              width="50px" 
              height="50px" 
              viewBox="0 0 60 60" 
              xmlns="http://www.w3.org/2000/svg" 
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              {/* SVG paths */}
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                  <g>
                    <path d="M556.869,30.41 C..."></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div style={{ paddingTop: '8px' }}>
            <div 
              style={{
                color: '#3897f0',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
                fontWeight: 550,
                lineHeight: '18px',
              }}
            >
              View this post on Instagram
            </div>
          </div>
          <div style={{ padding: '12.5% 0' }} />
          {/* Additional styling blocks */}
        </a>
      </div>
    </blockquote>
  );
};

export default InstagramEmbed;
