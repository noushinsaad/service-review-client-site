import banner01 from '../../assets/banner/HomeAndMaintainence.jpg'
import banner02 from '../../assets/banner/EducationalServicesa.jpeg'
import banner03 from '../../assets/banner/IT_Service.jpg'
import banner04 from '../../assets/banner/TransportationServices.jpg'

const Banner = () => {
    return (
        <div className="md:m-8 shadow-2xl p-8 rounded-lg bg-blue-50">
            <div className="carousel w-full">
                {/* Slide 1 */}
                <div id="item1" className="flex flex-col-reverse md:flex-row gap-2 carousel-item w-full relative">
                    <div className="w-full md:w-1/2">
                        <img
                            src={banner01}
                            alt="Banner 1"
                            className="w-full h-[350px] rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
                        <h2 className="text-3xl font-bold text-blue-900 text-center">
                            Reliable Home and Maintenance Services
                        </h2>
                        <p className="text-gray-700 mt-4 text-center">
                            Get professional help for plumbing, electrical repairs, and other home maintenance needs.
                            Ensure your home stays in perfect condition with trusted services.
                        </p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#item4" className="btn btn-circle bg-transparent">❮</a>
                        <a href="#item2" className="btn btn-circle bg-transparent">❯</a>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="item2" className="flex flex-col-reverse md:flex-row gap-2 carousel-item w-full relative">
                    <div className="md:w-1/2 flex flex-col items-center justify-center p-6">
                        <h2 className="text-3xl font-bold text-blue-900 text-center">
                            Empowering Minds Through Education
                        </h2>
                        <p className="text-gray-700 mt-4 text-center">
                            Unlock a brighter future with expert tutoring, skill development programs,
                            and personalized learning solutions. Transform your potential into success with our trusted educational services.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src={banner02}
                            alt="Banner 2"
                            className="w-full h-[350px] rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#item1" className="btn btn-circle bg-transparent">❮</a>
                        <a href="#item3" className="btn btn-circle bg-transparent">❯</a>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="item3" className="flex flex-col-reverse md:flex-row gap-2 carousel-item w-full relative">
                    <div className="md:w-1/2">
                        <img
                            src={banner03}
                            alt="Banner 3"
                            className="w-full h-[350px] rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 flex flex-col items-center justify-center p-6">
                        <h2 className="text-3xl font-bold text-blue-900 text-center">
                            Innovative IT Solutions for Your Success
                        </h2>
                        <p className="text-gray-700 mt-4 text-center">
                            Stay ahead in the digital world with reliable IT services, including software development,
                            cybersecurity, and technical support. Let us help you transform your ideas into powerful solutions.
                        </p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#item2" className="btn btn-circle bg-transparent">❮</a>
                        <a href="#item4" className="btn btn-circle bg-transparent">❯</a>
                    </div>
                </div>

                {/* Slide 4 */}
                <div id="item4" className="flex flex-col-reverse md:flex-row gap-2 carousel-item w-full relative">
                    <div className="md:w-1/2 flex flex-col items-center justify-center p-6">
                        <h2 className="text-3xl font-bold text-blue-900 text-center">
                            Effortless and Reliable Transportation
                        </h2>
                        <p className="text-gray-700 mt-4 text-center">
                            Experience hassle-free travel with professional transportation services. Whether
                            it’s logistics, commuting, or leisure trips, we’ve got you covered for a smooth journey.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src={banner04}
                            alt="Banner 4"
                            className="w-full h-[350px] rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#item3" className="btn btn-circle bg-transparent">❮</a>
                        <a href="#item1" className="btn btn-circle bg-transparent">❯</a>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            {/* <div className="flex justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs rounded-full bg-green-500 text-white hover:bg-green-700">
                    1
                </a>
                <a href="#item2" className="btn btn-xs rounded-full bg-green-500 text-white hover:bg-green-700">
                    2
                </a>
                <a href="#item3" className="btn btn-xs rounded-full bg-green-500 text-white hover:bg-green-700">
                    3
                </a>
                <a href="#item4" className="btn btn-xs rounded-full bg-green-500 text-white hover:bg-green-700">
                    4
                </a>
            </div> */}
        </div>

    );
};

export default Banner;