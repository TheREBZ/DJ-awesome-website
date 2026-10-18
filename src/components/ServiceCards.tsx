import "../../styles/Services.css"

export interface Service {
    event: string;
    description: string;
  }
  
  interface ServiceCardsProps {
    services: Service[];
  }
  
  const ServiceCards = ({ services }: ServiceCardsProps) => {
    return (
      <div className="services-card-container">
        {services.map((service) => (
          <article key={service.event} className="service-card">
            <h3>{service.event}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    );
  };
  
  export default ServiceCards;