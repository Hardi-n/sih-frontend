import React from "react";
import { Button } from "@/shadcn/ui/button"; // Ensure the import path is correct
import TwoButtonPage from "./TwoButtonPage";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <h1 className="text-center text-green-500 underline text-3xl mb-8">
          Home
        </h1>
        <div className="flex flex-col items-center gap-4">
          <Button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Example ShadCN Button
          </Button>
          <TwoButtonPage />
        </div>
      </div>
    </div>
  );
}

export default Home;
