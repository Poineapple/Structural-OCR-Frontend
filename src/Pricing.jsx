import React from 'react'
import "./styling.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Pricing() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-white font-bold text-6xl mt-[80px]">
        OUR{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          PRICING{" "}
        </span>
      </h1>
      <div className="md:h-[80vh] h-auto flex flex-col md:flex-row gap-10 justify-evenly items-center py-4 text-center">
        <div
          className="md:w-[30vw] w-[80vw] h-[80%] rounded-[2.5rem]
        p-8 bg-[#212534] border-8 border-cyan-400 text-white flex flex-col justify-around"
        >
          <div>
            <h1 className="text-3xl font-bold my-8">Free Version</h1>
            <div className="text-xl text-left">
              Benefits:
              <ul className="text-base list-disc para pl-4">
                <li>Only 8 coversions at a time</li>
              </ul>
            </div>
          </div>
          <label className="p-2 text-2xl rounded-[.85rem] bg-black">
            Current subscription
          </label>
        </div>
        <div
          className="md:w-[30vw] w-[80vw] h-[80%] spin-border p-8
         text-white flex flex-col justify-around"
        >
          <div>
            <h1 className="text-4xl font-bold my-8">
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Premium{" "}
              </span>{" "}
              <br/>(1 Year)
            </h1>
            <div className="text-xl text-left">
              Benefits:
              <ul className="text-base list-disc para pl-4">
                <li>Unlimited conversions</li>
                <li>Included access to API</li>
                <li>Custom Model Training</li>
              </ul>
            </div>
          </div>
          <label className="p-2 spin-border-button z-[1] font-bold text-2xl">
            Upgrade
          </label>
        </div>
      </div>
      <div className="h-[10vh]"></div>
      <Footer />
    </div>
  );
}

export default Pricing
