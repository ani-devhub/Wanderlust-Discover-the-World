import React from 'react';

function FeatureCard({ feature }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-emerald-600 mb-4">
        {feature.icon}
      </div>
      <h4 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h4>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
}

export default FeatureCard;