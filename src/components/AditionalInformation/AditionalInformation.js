import { NavLink, Outlet } from 'react-router-dom';
import './AditionalInformation.css';


const AditionalInformation = () => {
  return (
    <div className='mb-3'>
      <h3 className=" mt-md-5 mt-3 text-center">
        Додаткова інформація
      </h3 >
      <hr className=' mt-4 mb-4'/>
      <div className='aditional-information__wrapper'>
      <NavLink className="aditional-information__link" to="trailer" replace>
        Трейлер
      </NavLink>
      
      <NavLink className="aditional-information__link" to="credits" replace>
        В ролях
      </NavLink>
      
      <NavLink className="aditional-information__link" to="similar" replace>
        Схожі
      </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default AditionalInformation;
