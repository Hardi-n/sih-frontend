import React from "react";
import { Button } from "@/shadcn/ui/button";

function Student() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">
          Welcome Students
        </h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          Explore resources, opportunities, and events to enhance your academic journey.
        </p>

        {/* Key Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-500">Learning Resources</h2>
            <p className="text-gray-600 mt-2">
              Access study materials, tutorials, and e-books to excel in your courses.
            </p>
            <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-600">Explore</Button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-green-500">Career Opportunities</h2>
            <p className="text-gray-600 mt-2">
              Find internships, job openings, and career guidance from industry experts.
            </p>
            <Button className="mt-4 bg-green-500 text-white hover:bg-green-600">Explore</Button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-red-500">Events & Workshops</h2>
            <p className="text-gray-600 mt-2">
              Stay updated on events, workshops, and guest lectures organized by the college.
            </p>
            <Button className="mt-4 bg-red-500 text-white hover:bg-red-600">Explore</Button>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-12 flex justify-center space-x-4">
          <Button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg text-lg">
            View Assignments
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-lg">
            Join a Club
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Student;
