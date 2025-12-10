import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-screen mx-2 lg:mx-10 xl:mx-20 mt-10">

      {/* Top Intro */}
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="relative border py-1 px-4 w-fit rounded-full">
          <h3 className="font-semibold text-xs sm:text-base">Hello!</h3>

          <Image
            alt=""
            width={15}
            height={15}
            src="/images/lines1.png"
            className="absolute w-4 sm:w-5 -top-3 -right-3 sm:-top-4 sm:-right-4"
          />
        </div>

        {/* Heading */}
        <div className="relative w-fit z-10">
          <h1
            className="
              text-center font-bold
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
            "
          >
            I'm <span className="text-orange-500">Shahzad</span> <br />
            Full-Stack Developer
          </h1>

          {/* Decorative Lines */}
          <Image
            alt=""
            width={30}
            height={30}
            src="/images/lines2.png"
            className="
              absolute
              w-0
              sm:w-[45px]
              md:w-[70px]
              xl:w-[100px]
              -bottom-5 -left-6
              sm:-bottom-10 sm:-left-10
              md:-bottom-14 md:-left-14
              xl:-bottom-20 xl:-left-20
            "
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="mt-8 xl:mt-10 2xl:mt-12 flex justify-center items-center relative">

        {/* Left Text */}
        <div className="hidden md:block">
          <Image alt="" width={20} height={20} src="/images/quote-up.png" />
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>

        {/* Circle + Photo */}
        <div className="relative flex justify-center items-center overflow-visible">

          {/* Background Circle */}
          <Image
            alt=""
            src="/images/circle2.png"
            width={600}
            height={600}
            className="
              relative z-0
              w-[300px]
              sm:w-[400px]
              md:w-[550px]
              lg:w-[750px]
              xl:w-[820px]
              2xl:w-[1100px]
            "
          />

          {/* Foreground Photo */}
          <Image
            alt=""
            src="/images/myPhoto3.png"
            width={500}
            height={1200}
            className="
              absolute bottom-0 z-20

              w-[170px]
              sm:w-[200px]
              md:w-[236px]
              lg:w-[320px]
              xl:w-[420px]
              2xl:w-[560px]

              -mt-20
              sm:-mt-28
              md:-mt-36
              lg:-mt-48
              xl:-mt-56
              2xl:-mt-72
            "
          />
        </div>

        {/* Right Text */}
        <div className="hidden md:block">
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
