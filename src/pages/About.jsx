import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          About Our Alumni Association Platform
        </h1>
        
        <section className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <p className="text-gray-700">
              The Alumni Association platform for the Government Engineering College aims to foster lifelong connections between graduates and their alma mater, facilitating networking, mentorship, and philanthropic support. Our comprehensive web and mobile applications address the challenges of maintaining engagement, facilitating donations, and providing valuable services such as job networking and tracking alumni success stories.
            </p>
          </div>
        </section>

        <section className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>User-friendly Alumni Registration</li>
              <li>Secure Donation Portal</li>
              <li>Comprehensive Networking Hub</li>
              <li>Integrated Job Portal</li>
              <li>Searchable Alumni Directory</li>
              <li>Success Story Tracking</li>
              <li>Events and Reunions Management</li>
              <li>Feedback and Surveys System</li>
            </ul>
          </div>
        </section>

        <section className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Expected Outcomes</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Enhanced Alumni Engagement</li>
              <li>Increased Philanthropic Support</li>
              <li>Career Advancement Opportunities</li>
              <li>Facilitated Knowledge Sharing</li>
              <li>Boosted Pride and Recognition</li>
              <li>Strengthened Community Building</li>
            </ul>
          </div>
        </section>

        <p className="mt-8 text-center text-gray-600">
          Join us in creating a dynamic and supportive ecosystem where alumni can connect, contribute, and thrive, enriching the overall educational experience and legacy of our institution.
        </p>
      </div>
    </div>
  );
};

export default About;