import BaseButton from "./baseButton";

function banner(){
    return (
        <>
        <section id="banner" className="w-full pb-10">
        <div className="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden">
        <div className="col-span-12 lg:col-span-6 mt-6 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" className="text-base text-gradient font-semibold uppercase"
            >online Lookup
          </span>
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            className="text-[2rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            <span className="text-[#443081]">Spacex</span> Explorer's Guide: Rocket & Capsule <span className="text-[#D99A16]">Directory.</span> 
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className="paragraph hidden sm:block">
          Comprehensive resource for informations on SpaceX's rockets and capsules including missions and statuses
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <BaseButton
              extraClass="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#443081] border border-[#443081] text-white"
            >
              Get Started
            </BaseButton>
            <BaseButton
              extraClass="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#443081] flex items-center justify-center"
            >
              <span>Lets Takeoff</span>
            </BaseButton>
          </div>
        </div>
        <div className="hidden sm:block col-span-12 lg:col-span-6">
          <div className="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              src='./img/spaceShuttle.svg'
              className="-mt-4 lg:-mt-20 w-[45rem]"
              alt=""
            />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src='./img/pattern/ellipse-1.png'
          className="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src='./img/pattern/ellipse-2.png'
          className="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src='./img/pattern/ellipse-3.png'
          className="hidden sm:block absolute bottom-56 right-24 w-6"
        />
      </div>
      </section>
        </>
  )
}
export default banner;