import React from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

import "./layout.css"

const BizTech = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bixby2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      
      const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      cssEase: "linear"
    };
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData} backgroundColor={`transparent`} 
          style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, backgroundRepeat: `no-repeat`, 
          backgroundSize: `cover`, backgroundPosition: `top`}}>
            <div style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, overflow:`auto`}}>
              <div style={{fontSize:`1.25rem`, color:`black`, backgroundColor: `rgba(255,255,255,.3)`, height: `100%`,
                padding:`1rem 1rem 1rem 1rem`, borderLeft:`2px solid rgba(255,255,255,.5)`, borderRight:`2px solid rgba(255,255,255,.5)`, maxWidth:`90%`
                }}>
                <p style={{marginTop: `5rem`}}><h2><span className='wholisticfont'>Although</span> there are many systems and debates, the essence of right action is authenticity.</h2></p>
                <p>Beliefs and circumstance changes, but honest interaction remains.</p>
                <p></p>
                <p>The discipline of software is art, as well as logic. </p>
                <p>The truth is that the art of software is more about <em>people</em> than technology.</p>
                <p>Good people working well together is <em>the</em> basis of successful software.</p>
                <p>Sincerety as always is the criterion of effective relation.</p>
                <p>I offer my sincere greeting and curiousity for what projects you undertake today.</p>
                <p>Perhaps we can work togeter officially.</p>
                <p>Or, I would love to just hear about what you are working on and your vision for it.</p>
                <p>Matt Tyson</p>
                <p>Just North of Big Sur, 2020</p>              
              </div>
            </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledWelcome = styled(BizTech)`
  width: 100%;
  background-position: left;
  background-repeat: repeat-y;
  background-size: cover;
`
export default StyledWelcome