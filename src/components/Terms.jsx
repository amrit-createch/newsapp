import React from 'react'

function Terms() {
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg text-center">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
          alt="Terms and Conditions"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-gray-600">
          Please read these terms and conditions carefully before using our
          website. By accessing our service, you agree to follow these terms.
        </p>
      </div>
    </div>
  )
}

export default Terms
