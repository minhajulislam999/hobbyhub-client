const WhyJoinUs = () => {
  const reasons = [
    {
      icon: "🤝",
      title: "Meet New People",
      description: "Connect with like-minded individuals who share your passions and interests.",
    },
    {
      icon: "🎯",
      title: "Find Your Hobby",
      description: "Explore a wide range of hobby groups and find the perfect one for you.",
    },
    {
      icon: "🌍",
      title: "Local Communities",
      description: "Join groups in your local area and build meaningful connections.",
    },
    {
      icon: "🚀",
      title: "Grow Together",
      description: "Learn, grow and improve your skills with your hobby group members.",
    },
  ];

  return (
    <div className="bg-base-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="card bg-base-100 shadow-md p-6 text-center">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-500 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;