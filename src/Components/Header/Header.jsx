import {Link} from 'react-router-dom';
import Dizipro from '../../assets/img/Group 34294.svg';
import Dashboard from '../../assets/img/dashboard-fill.svg';
import Vector19 from '../../assets/img/Vector (19).png';
import Vector20 from '../../assets/img/Vector (20).png';
import Vector21 from '../../assets/img/Vector (21).png';
import Frame from '../../assets/img/Frame.svg'


const Header = () =>{
    return <>
    <div className="header">
        <div className="container">
           <div className="header-page">
               <img className='header-img' src={Dizipro} alt="" />    
                    <ul className="header-list">
                        <li className="header-item">
                            <Link to="/" className='header-link'><img src={Dashboard} alt="" className="header-pic" /></Link>
                       </li> 
                        <li className="header-item">
                            <img src={Vector19} alt="" className="header-pic" />
                        </li> 
                        <li className="header-item">
                            <img src={Vector20} alt="" className="header-pic" />
                        </li>
                        <li className="header-item">
                            <img src={Vector21} alt="" className="header-pic" />
                        </li>
                        <li className="header-item">
                            <img src={Frame} alt="" className="header-pic" />
                        </li>
                    </ul>

            </div>    
        </div>          
    </div> 
      
      
      
    </>
}

export default Header;

