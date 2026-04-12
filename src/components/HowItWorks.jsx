const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Create an Account",
      description: "Sign up for free and create your personal profile on HobbyHub.",
    },
    {
      step: "02",
      title: "Explore Groups",
      description: "Browse through various hobby groups and find ones that interest you.",
    },
    {
      step: "03",
      title: "Join or Create",
      description: "Join an existing group or create your own hobby group for others to join.",
    },
    {
      step: "04",
      title: "Connect & Enjoy",
      description: "Meet your group members, share experiences and enjoy your hobbies together.",
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;