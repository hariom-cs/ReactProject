import React from 'react'

function card({username, course='M.Tech'}) {//here Mtech work as default value for course and if VAL. PASS IT WILL CHANGED TO PASSED VALUE
    // console.log('props' , props);
    console.log(username);
    
    
    return(
    <div className="bg-black rounded-2xl shadow-lg  w-[300px] h-[400px] p-6 text-center items-center justify-center">
            <img
            className="w-240 h-340 rounded-2xl mx-auto"
            src="https://images.pexels.com/photos/92129/pexels-photo-92129.jpeg"
            alt="Profile"
            />
        
        <h2 className="mt-4 text-xl font-semibold text-gray-800 text-white">{username}</h2>

            <p className="mt-2 text-gray-600 text-white">
            {course} student | Security & AI enthusiast | Loves building smart tools.
            </p>
    </div>
    )
}

export default card