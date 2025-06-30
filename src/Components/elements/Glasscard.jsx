import React from "react";

const GlassCard = ({ name, image }) => {
  return (
    <div class="bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
      <div class="flex items-center text-white">
        <div class="w-14 h-14 flex items-center justify-center mr-4">
          <img src={image} class="w-8 h-8 rounded-full object-cover" />
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-1 font-satoshi">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
