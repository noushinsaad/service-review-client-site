const partners = [
    {
        name: "TechWave Solutions",
        logo: "https://i.postimg.cc/KjrsY5JT/images.png",
        description: "Providing cutting-edge IT solutions to streamline operations and enhance efficiency.",
    },
    {
        name: "HomeFix Experts",
        logo: "https://i.postimg.cc/P5FVNJzS/images-1.png",
        description: "Experts in home maintenance, offering top-notch plumbing, electrical, and repair services.",
    },
    {
        name: "EduLearn",
        logo: "https://i.postimg.cc/zvj0NGGS/images-2.png",
        description: "Dedicated to offering world-class educational resources for learners of all ages.",
    },
    {
        name: "SwiftMove Transport",
        logo: "https://i.postimg.cc/WbN5ng59/images.jpg",
        description: "Ensuring seamless and reliable transportation solutions for individuals and businesses.",
    },
];

const MeetOurPartners = () => {
    return (
        <div className="my-6 bg-blue-200 rounded-md shadow-lg mx-10 p-6">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Meet Our Partners</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <div key={index}
                            className="bg-white rounded-lg shadow-lg p-6
                        bg-gradient-to-br from-blue-400 to-blue-100 overflow-hidden 
                        text-center group transform hover:scale-110 transition-transform duration-300 border border-gray-200">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-20 h-20 mx-auto mb-4 rounded-full"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">{partner.name}</h3>
                            <p className="text-sm text-gray-600 mt-2">{partner.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetOurPartners;