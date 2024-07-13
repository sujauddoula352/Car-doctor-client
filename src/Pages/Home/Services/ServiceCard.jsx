import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card bg-base-100 w-96 border">
            <figure className="px-5 pt-5">
                <img
                    src={img}
                    alt={title}
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <p className='text-2xl text-red-500 font-bold'>Price: ${price}</p>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.shape({
        service_id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ServiceCard;
