import person from "../../../../public/assets/images/about_us/person.jpg";
import parts from "../../../../public/assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero  py-5 my-40">
            <div className="hero-content flex-col lg:flex-row">
               <div className="lg:w-1/2 relative">
               <img
                    src={person}
                    className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} alt="parts" className="absolute w-1/2 right-5 top-1/2 border-8 border-white
                    rounded-lg shadow-2xl" />
               </div>
                <div className="lg:w-1/2 space-y-5">
                <h3 className=" text-3xl text-orange-600 font-bold">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br></br> & of experience <br></br> in this field</h1>
                    <p className="py-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
                    </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="text-xl font-semibold text-white btn btn-active bg-[#FF3811]  ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;