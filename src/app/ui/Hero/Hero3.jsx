import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';
import Button from '../Button';
import VerticalLinks from '../VerticalLinks';

export default function Hero3({
  title,
  socialLinksHeading,
  heroSocialLinks,
  btnLink,
  btnText,
  bgImageUrl,
}) {
  return (
    <Div className="cs-hero cs-style1 cs-type2" id="home">
      <div
        className="cs-hero_bg cs-bg cs-ripple_version cs-center"
        style={bgImageUrl ? {backgroundImage: `url(${bgImageUrl})`} : {}}>          <Div className="container">
            <Div className="cs-hero_text text-center">
              <h1 className="cs-hero_title" style={{textShadow: '2px 2px 8px rgba(220, 38, 38, 0.8), -2px -2px 8px rgba(220, 38, 38, 0.6), 0 0 20px rgba(220, 38, 38, 0.5)'}}>{parse(title)}</h1>
              <Div style={{display: 'inline-block', boxShadow: '0 4px 20px rgba(220, 38, 38, 0.6), 0 0 30px rgba(220, 38, 38, 0.4)'}}>
                <Button btnLink={btnLink} btnText={btnText} />
              </Div>
            </Div>
          </Div>
      </div>
      <VerticalLinks
        data={heroSocialLinks}
        title={socialLinksHeading}
        variant="cs-left_side"
      />
    </Div>
  );
}
