const page = () => {
  return (
    <section className="my-16 px-6 md:px-20 text-neutral-200">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <h4 className="text-sm uppercase tracking-widest text-neutral-400">
          Want to work with us
        </h4>
        <h1 className="text-5xl md:text-6xl font-bold text-primary mt-3">
          Services We Provide
        </h1>
      </div>

      {/* Service 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Web Development</h2>
          <p className="text-neutral-400 leading-relaxed">
            We build fast, secure, and modern websites tailored to your business
            needs. Our web development services focus on clean code, performance,
            and scalability. Every website we create is fully responsive,
            ensuring a seamless experience across desktops, tablets, and mobile
            devices.
          </p>
        </div>

        {/* Placeholder box */}
        <div className="h-64 border border-neutral-400 bg-[#3a2f28] rounded-md" />
      </div>

      {/* Service 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        {/* Placeholder box */}
        <div className="h-64 border border-neutral-400 bg-[#5b3566] rounded-md" />

        <div>
          <h2 className="text-3xl font-semibold mb-4">App Development</h2>
          <p className="text-neutral-400 leading-relaxed">
            Our app development services deliver reliable and user-friendly
            applications designed to solve real-world problems. We focus on
            performance, intuitive interfaces, and smooth functionality to
            ensure your users enjoy a consistent experience on every device.
          </p>
        </div>
      </div>

      {/* Service 3 */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-semibold mb-4">UI & UX Design</h2>
          <p className="text-neutral-400 leading-relaxed">
            We design clean, engaging, and user-centered interfaces that enhance
            usability and visual appeal. Our UI & UX process focuses on
            understanding user behavior, creating intuitive layouts, and
            delivering designs that feel natural and modern.
          </p>
        </div>

        {/* Placeholder box */}
        <div className="h-64 border border-neutral-400 bg-[#0b3f2c] rounded-md" />
      </div>

      {/* Service 4 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Placeholder box */}
        <div className="h-64 border border-neutral-400 bg-[#5a2b2b] rounded-md" />

        <div>
          <h2 className="text-3xl font-semibold mb-4">Shopify Store</h2>
          <p className="text-neutral-400 leading-relaxed">
            We create professional Shopify stores optimized for conversions and
            performance. From custom themes to smooth checkout experiences, we
            help you build an online store that is easy to manage, visually
            appealing, and ready to scale with your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
