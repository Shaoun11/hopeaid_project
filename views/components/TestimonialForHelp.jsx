const Newsletter = () => {
  return (
    <section className="bg-[#ffffff] py-20 px-6 md:px-24 text-center rounded-t-3xl">
      <h2 className="lg:text-[37px] md:text-[30px] text-[24px] font-semibold text-[#171717]">Stay Informed</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Be the first to hear stories of impact, new initiatives, and how your support is making a difference.
      </p>
      <form className="flex bg-[#f4fdfb] flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="px-6 py-3 rounded-full border border-gray-300 w-full focus:outline-none"
        />
        <button className="bg-[#0F867C] hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
