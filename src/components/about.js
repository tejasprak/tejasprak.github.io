/* About component */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <div className="about">
      { (
        <div>
        <h2>my rankings/models</h2> 
        <ul>
            <li><strong><a href="http://github.com/tejasprak/NBAVisionApp">nfl-weighted-elo</a></strong>, my weekly NFL power rankings model w/ projections based on DPR </li>
            <li><strong><a href="http://github.com/tejasprak/NBAVisionApp">FBATool</a></strong>, my fantasy basketball rankings and league projections tool for 9-category leagues</li>
            <li><strong><a href="http://github.com/tejasprak/NBAVisionApp">view</a></strong> my calculated rolling RAPM (Regularized Adjusted Plus-Minus) rankings </li>
        </ul>
        <h2>projects</h2>
        <ul>
            <li><strong><a href="http://github.com/tejasprak/NBAVisionApp">NBAVisionApp</a></strong>, NBA game broadcast player detection, tracking, classification, and visualization</li>
            <li><strong><a href="http://github.com/tejasprak/smsnews">SMSNews</a></strong>, serving world news through SMS</li>
            <li><strong><a href="http://github.com/tejasprak/DriverWatch">DriverWatch</a></strong>, real-time driver drowsiness detector</li>
        </ul>
        <div>
            
        </div>
        <h2>blog</h2> 
                </div>

      )}
    </div>
  )
}

export default About

