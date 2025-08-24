import React from 'react'

function Privacy() {
     return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg text-center">
        <img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d7"
          alt="Privacy Policy"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-600">
          We value your privacy and are committed to protecting your personal
          information. This page explains how we handle your data.
        </p>
      </div>
    </div>
    )
}

export default Privacy
