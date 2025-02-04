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
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Job Dashboard</h1>
      <form className="mb-8" onSubmit={addJob}>
        <div className="flex mb-4">
          <input
            className="p-2 border rounded mr-2 flex-1"
            type="text"
            name="title"
            placeholder="Job Title"
            value={newJob.title}
            onChange={handleNewJobChange}
            required
          />
          <input
            className="p-2 border rounded flex-1"
            type="text"
            name="description"
            placeholder="Job Description"
            value={newJob.description}
            onChange={handleNewJobChange}
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Post Job
        </button>
      </form>

      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-700">{job.description}</p>
            <button
              className={`mt-2 py-2 px-4 rounded ${
                job.isApplied ? "bg-red-500" : "bg-blue-500"
              } text-white hover:opacity-90`}
              onClick={() => toggleApplication(job.id)}
            >
              {job.isApplied ? "Withdraw Application" : "Apply"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;