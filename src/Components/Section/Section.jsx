import {Link} from 'react-router-dom';
import Group3 from '../../assets/img/Group (3).png'
import Dizipro from '../../assets/img/Group 34294.svg';
import Group4 from '../../assets/img/Group (4).png'
import Vector20 from '../../assets/img/Vector (20).png';
import Vector21 from '../../assets/img/Vector (21).png';
import Frame from '../../assets/img/Frame.svg'
import Vector22 from '../../assets/img/Vector (22).png';
import Group1 from '../../assets/img/Group 34300.png';
import Ellipse from '../../assets/img/Ellipse 123.png';
import Elipse from '../../assets/img/Ellipse 7.png'
import { useState } from 'react';
import { useEffect } from 'react';

function Section (){
  // const [data,setdata] = useState([])
  // console.log(data);
  // useEffect(() =>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then (res => res.json())
  //   .then(data => setdata(data))
  // }, []);
    return <>
  
    
    
    
    <div className="section">
        <div className="container"> 
            <div className="section-skill">
              <div className="section-dizipro">
              <img className='section-img' src={Dizipro} alt="" />
              <h2 className="section-name">Users</h2>
              </div>
                <div className="section-left">
                <p className="section-text"><img src={Vector22} alt="" className="section-pic" /> Notifications  <img src={Group1} alt="" className="section-pic" /></p>
                <p className="section-names"><img className='section-pics' src={Ellipse} alt="" />Jaloliddin Esonboyev</p>
                </div>
            </div>
            <div className='section-right'>
              <ul className="section-title">
                <li className="section-items">
                  <a href="#" className="section-link">All</a>
                </li>
                <li className="section-items">
                  <a href="#" className="section-link">Not Seen</a>
                </li>
                <li className="section-items">
                  <a href="#" className="section-link">Saved</a>
                </li>
                <li className="section-items">
                  <a href="#" className="section-link">Blocked</a>
                </li>
              </ul>
            </div>
            <div className="section-form">
             <div className="section_form">
             <form class="section-fr">
                <input class="form-control " type="search" placeholder="Name or ID" aria-label="Search" />
                <button class="section-btn" type="submit">Search</button>
              </form>
              <ul className='section-lists'>
                <li className="section-titles">
                    <a href="#" className="section_link">Filters</a>
                </li>
                <li className="section_titles">
                    <a href="#" className="section__link">Only women</a>
                </li>
                <li className="section_titles">
                    <a href="#" className="section__link">Only men</a>
                </li>
                <li className="section_titles">
                    <a href="#" className="section__link">A-Z</a>
                </li>
                <li className="section_titles">
                    <a href="#" className="section__link">Oldest</a>
                </li>
              </ul>
             </div>
            </div>
            <ul className="section-list">
                <li className="section-item">
                  < img src={Group4} alt="" className="section-pic" />
              </li> 
                <li className="section-item">
                  <Link to="/Header" className='page-link'><img src={Group3} alt="" className="section-pic" /></Link> 
                </li> 
                <li className="section-item">
                    <img src={Vector20} alt="" className="section-pic" />
                </li>
                <li className="section-item">
                    <img src={Vector21} alt="" className="section-pic" />
                </li>
                <li className="section-item">
                    <img src={Frame} alt="" className="section-pic" />
                </li>
            </ul>
        </div>
    </div>
      
    </>
}

export default Section;