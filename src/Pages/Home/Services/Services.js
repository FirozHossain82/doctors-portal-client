import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description: "Fluoride varnish is a dental treatment that can help prevent tooth decay, slow it down, or stop it from getting worse. Fluoride varnish is made with fluoride, a mineral that can strengthen tooth enamel (outer coating on teeth). ",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "A dental filling treats tooth decay. Having a filling can prevent further damage, reduce the risks of  pain and infection, and help maintain.",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        " Everyone notices a bright, white, glowing smile.And everyone notices how confident you feel when       you have that beautiful smile.That's why we utilize long-lasting Teeth Whitening procedure because we want you to glow with pride and confidence. ",
      img: whitening,
    },
  ];

  return (
    <div className="mt-20">
      <div className="text-center">
        <h3 className="text-xl font-bold  text-primary uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl font-bold">Services We Provide </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {
                servicesData.map(service =><Service
                key={service.id}
                service={service}
                ></Service>)
            }
      </div>
    </div>
  );
};

export default Services;
