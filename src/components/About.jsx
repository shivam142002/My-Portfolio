import React from 'react';

const About = () => {
    return (
        <>
            <div name='about' className=" h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white">

                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

                    <div className="pb-2">
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500' >About</p>
                    </div>

                    <p className='text-xl mt-10  '>
                        My name is Shivam Kumar and I am a Front-End developer currently looking for Front-End roles.
                        <br />
                        <br />
                        I have a knack for good design and UI and have good knowledge of ReactJS, Redux , HTML,CSS and Javascript concepts such as Closures, Event-Loop, Hoisting, Callbacks, Promises, etc. I have also worked with state management tools such as REDUX and CONTEXT-API and handled asynchronous network calls in Javascript using Async/Await.
                    </p>

                    <br />

                    <p className='text-xl' >
                        Please find my attached resume. Feel free to contact me directly should you require anything further.
                        <br />
                    </p>

                </div>

            </div>
        </>
    )
}

export default About;