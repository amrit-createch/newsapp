import React from "react"

function Card({ image, title, url }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <p className="text-lg font-semibold mb-2">{title}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Read Article
        </a>
      </div>
    </div>
  )
}

export default Card
