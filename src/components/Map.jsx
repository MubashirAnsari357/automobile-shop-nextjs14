import React from 'react'

const Map = ({link}) => {
  return (
    <div className="inset-0 bg-gray-300 h-96 my-2">
        <iframe
          width="100%"
          height="100%"
          title="map"
          loading="lazy"
          seamless={true}
          src={link}
        ></iframe>
      </div>
  )
}

export default Map