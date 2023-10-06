import logo from '../../../assets/react.svg'

import moment from 'moment';
const Header = () => {
    return (
        <div>
           {/* <img src={} alt="" />  */}
            <p>Journalism without fear or favour</p>
            <p className='text-xl'> {moment().format("dddd, MMMM D, YYYY")}</p>
           <h2 className="text-2xl">Header</h2> 
        </div>
    );
};

export default Header;