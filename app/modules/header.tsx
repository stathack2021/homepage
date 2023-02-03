
import { useState } from "react";
import useLocale from "../hooks/useLocale"

export interface Props {
  locale: string;
}

export const Header: React.FC<Props> = (props) => {
    const { locale } = props;
    const t = useLocale(locale);
    const [openMenu, setOpenMenu] = useState(false);
    const menuFunction = () => {
      setOpenMenu(!openMenu);
    }

    return (
        <header className="text-white body-font bg-sp-fv md:bg-fv bg-no-repeat bg-cover bg-center h-screen md:h-50vh lg:h-screen">
        <div className="container mx-auto flex flex-wrap py-8 lg:py-16 flex-col md:flex-row items-center px-8 xl:px-16">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mx-auto xl:w-96">
            <img className="hidden lg:block" src="/images/logo_white.svg" alt="Logo" height={'64'} width={'300'} />
            <img className="hidden md:block lg:hidden" src="/images/logo_white.svg" alt="Logo" height={'64'} width={'200'} />
            <img className="md:hidden" src="/images/logo_white.svg" alt="Logo" height={'64'} width={'160'} />
            <button type="button" onClick={ menuFunction } className="absolute right-1 lg:hidden p-2 rounded-md text-sh-white mr-3" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="hidden lg:flex md:ml-auto text-lg lg:flex-wrap items-center lg:text-base xl:text-xl justify-center font-en">
            <a className="mr-10 hover:text-blue-400" href="/#about">ABOUT US</a>
            <a className="mr-10 hover:text-blue-400" href="/#service">SERVICE</a>
            <a className="mr-10 hover:text-blue-400" href="/#company">COMPANY</a>
            <a className="mr-10 hover:text-blue-400" href="/#value">VALUE</a>
            <a className="mr-10 hover:text-blue-400" href="/#board">BOARD</a>
            <div className="mr-10">
              <div className="w-40 h-9 rounded-full flex justify-center  bg-gradient-to-b from-sh-blue to-sh-dark-blue">
                <a className="mt-1.5 mb-1 hover:text-blue-400 inline-flex" href="/#contact">CONTACT</a>
              </div>
            </div>
          </nav>

          {
            openMenu &&

            <div onClick={ menuFunction } className="fixed z-10 inset-0 overflow-y-auto transform" aria-labelledby="modal-title" role="dialog" aria-modal="true">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center p-0">
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <nav  className="lg:hidden mx-auto my-auto text-white font-en z-20 list-none text-left space-y-5" id="mobile-menu">
                  <li className="hover:text-blue-400"><a href="/#about">― ABOUT US</a></li>
                  <li className="hover:text-blue-400"><a href="/#value">― VALUE</a></li>
                  <li className="hover:text-blue-400"><a href="/#service">― SERVICE</a></li>
                  <li className="hover:text-blue-400"><a href="/#news">― NEWS</a></li>
                  <li className="hover:text-blue-400"><a href="/#member">― MEMBER</a></li>
                  <li className="hover:text-blue-400"><a href="/#company">― COMPANY</a></li>
                  <li className="hover:text-blue-400"><a href="/#contact">― CONTACT</a></li>
                </nav>
              </div>
            </div>
            
          }
        </div>
        <div className="flex flex-wrap content-center md:h-40vh lg:h-70vh">
        <div className="container relative mx-auto my-auto md:h-20vh lg:h-50vh py-8 lg:py-16 flex-col md:flex-row items-center px-8 xl:px-16">
          <img className="absolute top-48 my-auto hidden lg:block" src="/images/logo_white.svg" alt="Logo" height={'140'} width={'800'} />
          <img className="absolute left-28 ml-20 top-10 my-auto mix-blend-overlay hidden lg:block" src="/images/logo_symbol.svg" alt="Logo" height={'140'} width={'500'} />
          
          <img className="absolute top-0 my-auto hidden md:block lg:hidden" src="/images/logo_white.svg" alt="Logo" height={'140'} width={'600'} />
          <img className="absolute left-28 ml-10 -top-20 my-auto mix-blend-overlay hidden md:block lg:hidden" src="/images/logo_symbol.svg" alt="Logo" height={'140'} width={'300'} />

          <img className="absolute top-40 my-auto md:hidden" src="/images/logo_white.svg" alt="Logo" height={'140'} width={'300'} />
          <img className="absolute left-12 top-20 my-auto mix-blend-overlay md:hidden" src="/images/logo_symbol.svg" alt="Logo" height={'140'} width={'250'} />
          
          {
            locale == "ja" ?
            <h2 className="absolute hidden md:block md:top-32 lg:top-96 my-auto text-3xl xl:text-4xl font-jp tracking-mission ml-10" >{ t.header.mission}</h2>
            :
            <h2 className="absolute hidden md:block md:top-32 lg:top-96 my-auto text-3xl xl:text-4xl font-en tracking-wide ml-5" >{ t.header.mission}</h2>
          }
            
          {
            locale == "ja" ?
            <h2 className="absolute top-64 md:hidden my-auto text-xl font-jp tracking-mission ml-10" >{t.header.mission_sp.former}<br />{ t.header.mission_sp.latter}</h2>
            :
            <h2 className="absolute top-64 md:hidden my-auto text-xl font-en tracking-wide ml-5" >{t.header.mission_sp.former}<br />{ t.header.mission_sp.latter}</h2>
          }
        </div>
        </div>
      </header>
    )
}
