import { FaHandHoldingHeart, FaSchool, FaHeartbeat } from 'react-icons/fa';

const ImpactStats = () => {
  const stats = [
    {
      icon: <FaHandHoldingHeart className="text-pink-600 text-4xl" />,
      title: '3,200+ Lives Touched',
      desc: 'Direct aid provided to families in need through food, shelter, and care.',
    },
    {
      icon: <FaSchool className="text-[#ed9039] text-4xl" />,
      title: '150+ Schools Supported',
      desc: 'We fund education for underprivileged children across continents.',
    },
    {
      icon: <FaHeartbeat className="text-[#0F867C] text-4xl" />,
      title: '$5M+ in Medical Aid',
      desc: 'Invested in essential healthcare and vaccinations globally.',
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="lg:text-[37px] md:text-[30px] text-[24px] font-semibold text-[#171717] mb-10">
          How Your Donation Helps
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{stat.title}</h3>
              <p className="text-gray-600 mt-2">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
