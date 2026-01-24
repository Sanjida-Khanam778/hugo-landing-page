"use client";

import { useState } from "react";
import JobDetailsModal from "../Modal/JobDetailsModal";
import PostNewJobModal from "../Modal/PostNewJobModal";
import JobsTable from "./JobsTable";
import AddCareerModal from "../Modal/AddCareerModal";
import {
  useGetAllJobsQuery,
  useCreateJobMutation,
  useJobUpdateMutation,
  useGetJobByIdQuery
} from "../../../Api/universityApi";
import toast from "react-hot-toast";

export default function JobsAndInternships() {
  const { data: jobs = [], isLoading, error } = useGetAllJobsQuery();

  const [createJob] = useCreateJobMutation();
  const [updateJob] = useJobUpdateMutation();

  const [showPostJobModal, setShowPostJobModal] = useState(false);
  const [viewingJob, setViewingJob] = useState(null);
  const [editingJob, setEditingJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSaveJob = async (jobData) => {
    try {
      if (editingJob) {
        await updateJob(jobData).unwrap();
        toast.success("Job updated successfully");
      } else {
        await createJob(jobData).unwrap();
        toast.success("Job posted successfully");
      }
      setShowPostJobModal(false);
      setEditingJob(null);
    } catch (err) {
      console.error("Failed to save job:", err);
      toast.error(err?.data?.detail || "An error occurred while saving the job.");
    }
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setShowPostJobModal(true);
  };

  const handleDeleteJob = (id) => {
    // Mutation will be handled later
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div className="p-8">Loading jobs...</div>;
  if (error) return <div className="p-8 text-red-500">Error loading jobs.</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Jobs & Internships</h1>
        <div className="flex gap-3">

          <button
            onClick={() => {
              setEditingJob(null);
              setShowPostJobModal(true);
            }}
            className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Post New Job
          </button>
        </div>
      </div>

      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <JobsTable
        jobs={filteredJobs}
        onView={setViewingJob}
        onEdit={handleEditJob}
        onDelete={handleDeleteJob}
      />

      {showPostJobModal && (
        <PostNewJobModal
          job={editingJob}
          onSave={handleSaveJob}
          onClose={() => {
            setShowPostJobModal(false);
            setEditingJob(null);
          }}
        />
      )}

      {viewingJob && (
        <JobDetailsModal job={viewingJob} onClose={() => setViewingJob(null)} />
      )}
    </div>
  );
}
