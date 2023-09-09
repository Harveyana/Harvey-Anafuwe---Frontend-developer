
// import NavLink from './NavLink';
// import BaseButton from './baseButton';

function Nav(){
    return (
        <>
        <nav id="navbar" className="relative z-10 w-full text-neutral-800">
      <div className="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
        <div className="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
          <div className="w-full flex flex-row items-center justify-between py-6">
            <div>
              <img src='./img/logo/SpaceXia.svg' className=" w-24 xl:w-28" alt="spacexpedia Logo"/>
            </div>
            
          </div>
          {/* <ul
            className="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
          >
            <NavLink name="Link 1" url="#" />
            <NavLink name="Link 2" url="#" />
            <NavLink name="Link 3" url="#" />
            <NavLink name="link 4" url="#" />
          </ul>  */}
        </div>
      </div>
    </nav>
        </>
    )
}
export default Nav;