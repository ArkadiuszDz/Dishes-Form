import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import '../scss/background_section.scss';

const BackgroundSection = ({img,title,children}) => {
  return (
    <BackgroundImage fluid={img} className="form-bg" preserveStackingContext={true}>
      <h1 className="">{title}</h1>
      {children}
    </BackgroundImage>
  )
}

export default BackgroundSection;