"use client";

export default function PricingTable() {
  const plans = [
    {
      name: "SPORTS",
      price: 145,
      features: [
        "Built-in HD Camera",
        "Smartphone Control",
        "360 Degree Stunt Flip",
        "One Key Return",
        "Headless Flying",
      ],
      highlighted: false,
    },
    {
      name: "SHOOTING",
      price: 285,
      features: [
        "Built-in HD Camera",
        "Smartphone Control",
        "360 Degree Stunt Flip",
        "One Key Return",
        "Headless Flying",
      ],
      highlighted: true,
    },
    {
      name: "TRAVELS",
      price: 375,
      features: [
        "Built-in HD Camera",
        "Smartphone Control",
        "360 Degree Stunt Flip",
        "One Key Return",
        "Headless Flying",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="w-10 h-[2px] bg-[#038BD5]"></div>
          <p className="text-[#038BD5] font-semibold">Comfortable</p>
          <div className="w-10 h-[2px] bg-[#038BD5]"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Pricing Table
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative text-center border-[6px] transition-all duration-300 p-10 rounded-sm shadow-md 
              ${
                plan.highlighted
                  ? "border-black scale-105"
                  : "border-gray-200 hover:border-red-500"
              }`}
          >
            <h3 className="text-lg font-extrabold text-gray-900 mb-4">
              {plan.name}
            </h3>
            <p className="text-[#038BD5] text-3xl font-extrabold mb-6">
              <span className="align-top text-lg">$</span> {plan.price}
            </p>
            <ul className="text-gray-700 space-y-3 mb-8 text-sm leading-relaxed">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="bg-[#0079C0] hover:bg-red-700 text-white font-semibold py-2 px-8 text-sm transition-all">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
