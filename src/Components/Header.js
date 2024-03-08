import React from 'react';
import Overview from './Overview';
import Sentiments from './Sentiments';
import Fundamentals from './Fundamentals';
import Team from './Team';
import Technicals from './Technicals';
import Tokenomics from './Tokenomics';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <div id="Overview">
        <Overview />
      </div>
      <div id="Fundamentals">
        <Fundamentals />
      </div>
      <div id="Sentiments">
        <Sentiments />
      </div>
      <div id="Technicals">
        <Technicals />
      </div>
      <div id="Tokenomics">
        <Tokenomics />
      </div>
      <div id="Team">
        <Team />
      </div>
    </div>
  );
};

const Navbar = ({ scrollToSection }) => {
  return (
    <>
      <nav className="mx-4 md:mx-10 w-screen md:w-[980px] text-black py-4 mt-60">
        <div className="md:flex md:justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start">
            <a className='text-black px-4 py-2 hover:bg-gray-600 hover:underline' href="#Overview" onClick={() => scrollToSection('Overview')}>Overview</a>
            <a className='text-black px-4 py-2 hover:bg-gray-600 hover:underline' href="#Fundamentals" onClick={() => scrollToSection('Fundamentals')}>Fundamentals</a>
            <a className='text-black px-4 py-2 hover:bg-gray-600 hover:underline' href="#News" onClick={() => scrollToSection('News')}>News</a>
            <a className='text-black px-4 py-2 hover:bg-gray-600 hover:underline' href="#Insights" onClick={() => scrollToSection('Insights')}>Insights</a>
            <a className='text-black px-4 py-2 hover:bg-gray-600 hover:underline' href="#Sentiments" onClick={() => scrollToSection('Sentiments')}>Sentiments</a>
            <a className='text-black px-4 py-2 hover:bg-gray-600 hover:underline' href="#Team" onClick={() => scrollToSection('Team')}>Team</a>
            <a className='text-black px-4 py-2 hover:bg-gray-600 hover:underline' href="#Technicals" onClick={() => scrollToSection('Technicals')}>Technicals</a>
            <a className='text-black px-4 py-2 hover:bg-gray-600 hover:underline' href="#Tokenomics" onClick={() => scrollToSection('Tokenomics')}>Tokenomics</a>
          </div>
          <div className='md:hidden bg-gray-700 w-full h-[1px]'></div>
        </div>
        <div className='hidden md:block bg-gray-700 h-[1px]'></div>
      </nav>
    </>
  );
};

export default Header;
