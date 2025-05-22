const teamMembers = [
  {
    name: 'Sabrina Jahan',
    role: 'Field Coordinator',
    image: "https://i.ibb.co/YZJtDGR/images-1.jpg",
  },
  {
    name: 'Alvia Rahman',
    role: 'Medical Lead',
    image: "https://i.ibb.co/Ry8vG9P/images-2.jpg",
  },
  {
    name: 'Luna Park',
    role: 'Education Program Manager',
    image: "https://i.ibb.co/g7GFg10/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait-321.jpg",
  },
];

const MeetTheTeam = () => {
  return (
    <section className="bg-[#fffefc] py-20 px-6 md:px-24 text-center">
      <h2 className="lg:text-[37px] md:text-[30px] text-[24px] font-semibold text-[#171717]  mb-12">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-emerald-700">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
