// AlumniHomePage.js
import React from "react";
import { Button } from "@/shadcn/ui/button";

function Alumini() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">
          Welcome Alumni
        </h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          Stay connected with your alma mater, network with peers, and contribute to our community.
        </p>

        {/* Key Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-500">Networking</h2>
            <p className="text-gray-600 mt-2">
              Connect with fellow alumni, share experiences, and grow your professional network.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-green-500">Events</h2>
            <p className="text-gray-600 mt-2">
              Join alumni events, reunions, and professional development workshops.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-red-500">Donate</h2>
            <p className="text-gray-600 mt-2">
              Support the college through donations to help fund scholarships, projects, and more.
            </p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-12 flex justify-center space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-lg">
            Join the Alumni Network
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-lg">
            Donate Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Alumini;
