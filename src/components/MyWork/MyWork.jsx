import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { FaArrowLeft } from "react-icons/fa";
const MyWork = () => {
    const [showMore,setShowMore]=useState(false)
    const visibleProject=showMore?mywork_data:mywork_data.slice(0,6)
    const hadnleToggle=()=>{
        setShowMore(!showMore)
    }
  return (
    <div id='projects' className='mywork'>
        <div className="mywork-title">
            <h1>My latest Work</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="mywork-container">
            {visibleProject.map((work,index)=>{
                return <img key={index} src={work.w_img} onClick={() => window.open(work.w_link, "_blank")}/>
            })}
        </div>
        <div className="mywork-showmore" onClick={hadnleToggle}>
            <p>{showMore ? 'Show Less' : 'Show More'}</p>
            {showMore?(
                <FaArrowLeft className='arrow-left-icon'/>
            ):
             <img src={arrow_icon} alt="" />
          }
        </div>
    </div>
  )
}

export default MyWork