import React from 'react'

export default function About() {
  return (
    <div className='bg-base pb-16'>
          {/* Header Section */}
              <div
                style={{ backgroundImage: `url(${background})` }}
                className="text-white flex items-center justify-center relative overflow-hidden bg-cover bg-no-repeat h-[50vh]"
              >
                <div className="mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                  <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-8 uppercase">
                   About US
                  </h1>
                </div>
              </div>
    </div>
  )
}
