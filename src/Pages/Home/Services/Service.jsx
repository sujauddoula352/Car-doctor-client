import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="my-32">
            <div className="text-center space-y-5">
                <h3 className="text-3xl font-bold text-orange-600">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    Services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="flex justify-center my-6">
                <button className="text-xl btn btn-outline btn-secondary">More Service</button>

            </div>
        </div>
    );
};

export default Service;