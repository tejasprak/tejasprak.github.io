/* Biography component */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpeg"
        width={160}
        height={160}
        quality={95}
        alt="Profile picture"
      />
      { (
        <p>
          i'm a student and software engineer who loves to code and build <br></br>
          studying cs, math, and statistics at <strong>purdue</strong> (graduating dec '22) <br></br>
          currently working on conversational AI apps at <strong>csg</strong><br></br>
          incoming sde intern @ <strong>amazon</strong> (summer '22) <br></br>
          interested in sports analytics, computer vision, trivia, and speedcubing
        </p>
       
      )}
    </div>
  )
}

export default Bio
