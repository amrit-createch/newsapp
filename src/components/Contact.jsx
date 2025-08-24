import React from 'react'

function Contact() {
   return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg text-center">
        <img
          src="https://images.unsplash.com/photo-1581091012184-5c50d1c3d82f"
          alt="Contact Us"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600">
          Have questions? We’d love to hear from you. Reach out to us via email
          or through our contact form.
        </p>
      </div>
    </div>
  )
}

export default Contact
