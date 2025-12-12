import React from 'react';
import { useState } from 'react';
import Div from '../Div';

export default function VideoModal({ videoSrc, bgUrl, variant }) {
  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);
  const handelClick = () => {
    let embedUrl = '';
    
    // Check if it's a TikTok link
    if (videoSrc.includes('tiktok.com')) {
      // Extract video ID from TikTok URL
      const videoIdMatch = videoSrc.match(/video\/(\d+)/);
      if (videoIdMatch) {
        const videoId = videoIdMatch[1];
        embedUrl = `https://www.tiktok.com/embed/v2/${videoId}`;
      }
    } 
    // Check if it's a YouTube link
    else if (videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be')) {
      if (videoSrc.includes('?v=')) {
        const video = videoSrc.split('?v=')[1].trim();
        embedUrl = `https://www.youtube.com/embed/${video}`;
      } else if (videoSrc.includes('youtu.be/')) {
        const video = videoSrc.split('youtu.be/')[1].trim();
        embedUrl = `https://www.youtube.com/embed/${video}`;
      }
    }
    
    setIframeSrc(embedUrl);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };
  return (
    <>
      <Div
        className={`cs-video_block ${
          variant ? variant : 'cs-style1'
        } cs-video_open cs-bg`}
        style={{ backgroundImage: `url(${bgUrl})` }}
        onClick={handelClick}
      >
        <span className="cs-player_btn cs-accent_color">
          <span />
        </span>
      </Div>
      <Div className={toggle ? 'cs-video_popup active' : 'cs-video_popup'}>
        <Div className="cs-video_popup_overlay" />
        <Div className="cs-video_popup_content">
          <Div className="cs-video_popup_layer" />
          <Div className="cs-video_popup_container">
            <Div className="cs-video_popup_align">
              <Div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={iframeSrc}
                  title="video modal"
                />
              </Div>
            </Div>
            <Div className="cs-video_popup_close" onClick={handelClose} />
          </Div>
        </Div>
      </Div>
    </>
  );
}
