import ServiceCards from "./ServiceCards";
import type { Service } from "./ServiceCards";
import "../../styles/Services.css";

const servicesData: Service[] = [
  {
    event: "WEDDING ENTERTAINMENT",
    description: "Make your special day even more memorable with music for your ceremony, reception and celebration.",
  },
  {
    event: "CORPORATE & BRAND EVENTS",
    description: "Professional DJ entertainment for corporate functions, launches, brand activations and company celebrations.",
  },
  {
    event: "PRIVATE PARTIES",
    description: "Give your guests a reason to celebrate with music that fits your crowd and occasion.",
  },
  {
    event: "BIRTHDAY CELEBRATIONS",
    description: "From small gatherings to full-on parties, let's make your birthday one to remember.",
  },
  {
    event: "CLUBS & LOUNGES",
    description: "The right music selections to match the venue, crowd and vibe.",
  },
  {
    event: "SOCIAL & SPECIAL EVENTS",
    description: "From reunions and community gatherings to other special occasions, we'll help set the right mood.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
        <div className="services-container">
            <h1>Services We Offer</h1>
            <h2 className="services-statement">
                The right sound <br />
                <span>for every occasion</span>
            </h2>
            <p>
                From special celebrations to corporate events and unforgettable parties, we've got your sound covered.
            </p>
        </div>
      <ServiceCards services={servicesData} />
    </section>
  );
};

export default Services;