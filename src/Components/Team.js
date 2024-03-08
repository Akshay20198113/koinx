import React from 'react';

const Team = () => {
    const teamMembers = [
        {
            name: "John Smith",
            designation: "Designation here",
            description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
            imageSrc: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            name: "Elina Williams",
            designation: "Designation here",
            description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
            imageSrc: "https://images.startups.co.uk/wp-content/uploads/2017/06/Job-offer-new-employee-1.jpg?width=709&height=460&fit=crop"
        },
        // Add more team members as needed
    ];

    return (
        <div className='md:mx-10 w-screen md:w-[980px] my-10 bg-white rounded-lg'>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-4">Team</h2>
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.
                    Tellus sit ornare netus sagittis in nunc conva . In justo rutrum sit sit fermentum ut libero hendrerit id.
                    Tellus sit ornare netus sagittis</p>
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col md:flex-row bg-blue-300 my-5 rounded-xl">
                        <div className='mx-auto md:mx-5 my-10 flex-shrink-0'>
                            <img src={member.imageSrc} alt={member.name} className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-lg" />
                        </div>
                        <div className='mx-auto md:mx-6 my-8 md:my-16'>
                            <p className="text-center md:text-left">{member.name}</p>
                            <p className="text-center md:text-left text-sm text-gray-600">{member.designation}</p>
                            <p className="text-center md:text-left mt-4">{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team;
