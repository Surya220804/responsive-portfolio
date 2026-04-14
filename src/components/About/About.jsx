import React from 'react'
import './About.css'    
import Profile from '../../assets/surya.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={Profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>B.Sc.graduate with 6 months of internship experience in web development, skilled in React and JavaScript, and eager to grow as a frontend developer.</p>
                    <p>My passion for frontend development is reflected not only in my learning journey but also in the enthusiasm and dedication I bring to every project I work on.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p>HTML</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"> <p>CSS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"> <p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"> <p>React.js</p><hr style={{width:"70%"}}/></div>
                </div>
            </div>
        </div>
             <div className="about-achievments">
                    <div className="about-achievment">
                        <h1>6</h1>
                        <p>Months Of Internship Experience </p>
                    </div>
                    <hr />
                    <div className="about-achievment">
                        <h1>10+</h1>
                        <p>Projects </p>
                    </div>
             </div>
    </div>
  )
}

export default About