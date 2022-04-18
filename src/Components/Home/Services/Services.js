import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="container mx-auto px-2">
            <div>
                <h1 className="text-slate-700 font-semibold text-4xl my-20">Services</h1>
            </div>
            <div className="my-5 md:flex container mx-auto w-full gap-10">
                {
                    services.map(service => <ServicesCard
                        key={service.id} service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;