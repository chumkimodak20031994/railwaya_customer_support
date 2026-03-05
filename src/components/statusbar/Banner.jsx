import React from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 container mx-auto my-4 md:my-8">
      {/* In Progress */}
      <div
        className="rounded-lg p-12 text-white bg-cover bg-center items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(135deg,#7c3aed,#a855f7), url(${vector1})`,
        }}
      >
        <p className="text-sm">In-Progress</p>
        <h2 className="text-4xl font-bold">{inProgress}</h2>
      </div>

      {/* Resolved */}
      <div
        className="rounded-lg p-12 text-white bg-cover bg-center items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(135deg,#22c55e,#4ade80), url(${vector2})`,
        }}
      >
        <p className="text-sm">Resolved</p>
        <h2 className="text-4xl font-bold">{resolved}</h2>
      </div>
    </div>
  );
};

export default Banner;
