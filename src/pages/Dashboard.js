import React, { useState } from "react";

function Dashboard() {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", description: "React Developer required", isApplied: false },
  ]);
  const [newJob, setNewJob] = useState({ title: "", description: "" });

  const handleNewJobChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prev) => ({ ...prev, [name]: value }));
  };

  const addJob = (e) => {
    e.preventDefault();
    setJobs((prev) => [
      ...prev,
      { ...newJob, id: prev.length + 1, isApplied: false },
    ]);
    setNewJob({ title: "", description: "" });
  };

  const toggleApplication = (id) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id ? { ...job, isApplied: !job.isApplied } : job
      )
    );
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-yellow-400 to-orange-600">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Job Dashboard</h1>
        <form className="mb-8 bg-white p-6 rounded-lg shadow-lg" onSubmit={addJob}>
          <div className="flex mb-4">
            <input
              className="p-3 border border-gray-300 rounded-lg mr-2 flex-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              name="title"
              placeholder="Job Title"
              value={newJob.title}
              onChange={handleNewJobChange}
              required
            />
            <input
              className="p-3 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              name="description"
              placeholder="Job Description"
              value={newJob.description}
              onChange={handleNewJobChange}
              required
            />
          </div>
          <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300">
            Post Job
          </button>
        </form>

        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-700">{job.description}</p>
              <button
                className={`mt-4 py-2 px-6 rounded-lg ${
                  job.isApplied ? "bg-red-500" : "bg-blue-500"
                } text-white hover:opacity-90 transition duration-300`}
                onClick={() => toggleApplication(job.id)}
              >
                {job.isApplied ? "Withdraw Application" : "Apply"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;