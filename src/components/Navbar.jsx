import {useState} from 'react'
import '../styling.css'
import logo from '/logo.svg'
import gift from '/gift.svg'
import loggedout from '/log-out.svg'
import LoginPage from '../login/pages/Login'
import { Link } from 'react-router-dom'




function Navbar() {

	const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
	const ToggleLoginWidget = (event) => {
    setIsVisible((current) => !current);
  };
	return (
    <div>
      <div className=" w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-sm z-[52] md:px-10 px-2">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto md:px-[10px] ">
          <Link to="/" className="h-auto w-auto flex flex-row items-center ">
            <img src={logo} className=" h-[40px]" />

            <span className="font-bold ml-[10px] md:text-gray-300">
              QuickOCR
            </span>
          </Link>

          <div className="md:w-[500px] h-full flex flex-row items-center justify-between md:mr-20 ">
            <div
              className={`${
                isOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row items-center justify-between w-full h-auto border
  border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full translate-y-32
  text-gray-200 text-lg relative md:translate-y-0 `}
            >
              <button
                className="absolute top-2 right-2 md:hidden"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
              <div className="h-full w-full text-center cursor-pointer mx-8 my-4 md:mx-0 md:my-0 hover:text-white">
                <Link to='/documentation'>Documentation</Link>
              </div>
              <div className="h-full w-full text-center cursor-pointer mx-8 my-4 md:mx-0 md:my-0 hover:text-white">
                <Link to="/pricing">Pricing</Link>
              </div>
              <div className="h-full w-full text-center cursor-pointer mx-8 my-4 md:mx-0 md:my-0 hover:text-white">
                <Link to="/home">Services</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-row md:gap-5 gap-1">
            <Link to="/" title="Rewards">
              <img src={gift} className="header-button max-h-[24px] hidden " />
            </Link>
            <button title="Login/signup" onClick={ToggleLoginWidget}>
              <img src={loggedout} className="header-button max-h-[24px] " />
            </button>
            {!isOpen ? (
              <button
                className="md:hidden p-1 rounded-lg border-[#7042f861] bg-[#0300145e]"
                onClick={() => setIsOpen(!isOpen)}
              >
                Menu
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <div className={"h-[100vh] bg-black/20" + (!isVisible ? " hidden" : "")}>
        <LoginPage setIsVisible={setIsVisible} />
      </div>
    </div>
    // <div>
    // 	<div className="flex items-center justify-between px-4 fixed top-0 z-50 w-full
    // 		 gap-8 text-lg text-white shadow-lg shadow-[#2A0E61]/50
    // 		 bg-[#03001417] backdrop-blur-md">
    // 		<a href="/" title="Homepage" className='flex items-center gap-1'>
    // 			<img src={logo} className=' h-[64px]' />
    // 			<h1 className=' font-cursive rotate-[-20deg]'>QuickOCR</h1>
    // 		</a>
    // 		<ul className='flex gap-20 justify-around'>
    // 			<li>
    // 				<a href='/about' className='header-button'>About</a>
    // 			</li>
    // 			<li>
    // 				<a href='/services' className='header-button'>Services</a>
    // 			</li>
    // 			<li>
    // 				<a href='/pricing' className='header-button'>Pricing</a>
    // 			</li>
    // 		</ul>
    // 		<a href="/" title="Login/signup">
    // 			<img src={logout} className='header-button max-h-[24px] ' />
    // 		</a>
    // 	</div>
    // </div>
  );
}

export default Navbar
