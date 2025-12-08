import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-[70vh] mx-2 lg:mx-10 xl:mx-20">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="relative border py-0.5 px-3 sm:py-1 sm:px-4 w-fit rounded-full ">
          <h3 className="font-semibold text-xs sm:text-base">Hello!</h3>
          <Image
            alt=""
            width={15}
            height={15}
            src="/images/lines1.png"
            className="absolute sm:w-5 -top-3 -right-3 sm:-top-4 sm:-right-4 "
          />
        </div>
        <div className="relative w-fit">
          <h1 className="text-center text-3xl sm:text-4xl md:text-6xl xl:text-8xl  font-bold sm:font-semibold">
            I'm <span className="text-orange-500">Shahzad</span> <br />
            Full-Stack Developer
          </h1>
          <Image
            alt=""
            width={30}
            height={30}
            src="/images/lines2.png"
            className="absolute w-0 sm:w-[45px] md:w-[70px] xl:w-[100px] -bottom-5 -left-6 sm:-bottom-10 sm:-left-10 md:-bottom-15 md:-left-14 xl:-bottom-22 xl:-left-20"
          />
        </div>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <div className="hidden sm:block">
          <Image alt="" width={20} height={20} src="/images/quote-up.png" />
          <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative flex justify-center items-center">
            {/* Background Circle */}
            <Image
              alt=""
              width={400}
              height={600}
              src="/images/circle2.png"
              className="relative inset-0 w-[400px] tb:w-[600px] h-auto z-0"
            />

            {/* Foreground Photo */}
            <Image
              className="absolute mbs:bottom-[0.1px] mbm:-bottom-[8.1px] mbl:bottom-[0.5px] z-20  mbs:h-[250px] mbm:h-[300px] mbl:w-[500px] object-contain"
              alt=""
              width={300}
              height={1000}
              src="/images/myPhoto2.png"
            />
          </div>
        </div>

        <div className="hidden sm:block">
          <h1>Hello World!</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
