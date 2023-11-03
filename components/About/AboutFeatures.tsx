import React from 'react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  headerTitle: string;
  headerDescription: string;
  services: Service[];
}

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ headerTitle, headerDescription, services }) => {
  return (
    <section className="bg-white px-6 dark:bg-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {headerTitle}
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">{headerDescription}</p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
          
          {/* This is where we map the array of services/about */}
          
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
       
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
