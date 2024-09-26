import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className=" tracking-wide">
      <h2 className="text-3xl sm:text-5xl text-yellow-800 lg:text-6xl text-center lg:my-10">
        What People are saying about Us
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-[#FFFBE6] rounded-md p-6  border  border-neutral-800 ">
              <p className="text-amber-950 font-semibold">{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6 className=" text-[#347928]">{testimonial.user}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;