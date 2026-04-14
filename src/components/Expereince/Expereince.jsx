  import theme_pattern from '../../assets/theme_pattern.svg'
  import myexp_data from '../../assets/myexp_data'
  import { useEffect, useState } from 'react'
  import './Expereince.css'
  const Expereince = () => {
    const [isMobile,setIsMobile]=useState(window.innerWidth < 768)
    useEffect(()=>{
      function handleResize(){
        setIsMobile(window.innerWidth < 768);
      }
      window.addEventListener("resize",handleResize)
      return ()=>window.removeEventListener("resize",handleResize)
    },[])
    return (
      <div className="experience" id='experience'>
        <div className="experience-title">
            <h1>Work Experience</h1>
          <img src={theme_pattern} alt=""/>
        </div>
          <div className="experience-container">
            {myexp_data.map((exp,index)=>(
              <div className="experience-wrapper" key={index}>
                <div className="exp-title">
                  <h3 className="company-name">{exp.employer_name}</h3>
                  <h3 className="company-location">{exp.e_location}</h3>
                </div>
                <div className="exp-role">
                  <h4>{exp.e_role}</h4>
                  <h4>{exp.e_duration}</h4>
                </div>
                <div className="exp-desc">
                  <p>{isMobile ? exp.mobile_e_desc : exp.desktop_e_desc}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    )
  }

  export default Expereince