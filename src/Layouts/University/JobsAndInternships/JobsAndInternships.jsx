"use client"

import { useState } from "react"
import JobsTable from "../components/jobs/JobsTable"
import PostNewJobModal from "../components/modals/PostNewJobModal"
import JobDetailsModal from "../components/modals/JobDetailsModal"
import AddCareerModal from "../components/modals/AddCareerModal"

export default function JobsAndInternships() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Research Assistant - Computer Science",
      department: "Computer Science",
      type: "Full Time",
      category: "Research",
      applications: 32,
      status: "Active",
      createdDate: "2025-09-15",
      salary: "$45,000 - $55,000",
      jobDescription: "We are looking for a research assistant to support our computer science research initiatives.",
      responsibilities: ["Conduct research", "Write papers", "Assist faculty"],
      requirements: ["BS in Computer Science", "Python proficiency"],
      qualifications: ["Experience with ML"],
      benefits: ["Health insurance", "Flexible schedule"],
      applicationProcess: ["Submit CV", "Technical Interview", "Final Interview"],
      admissionRequirements: ["GPA > 3.0", "Sophomore standing or above"],
    },
    {
      id: 2,
      title: "Marketing Intern",
      department: "Business School",
      type: "Internship",
      category: "Internship",
      applications: 18,
      status: "Active",
      createdDate: "2025-09-10",
      salary: "$18/hour",
      jobDescription: "Marketing internship opportunity for business students.",
      responsibilities: ["Social media management", "Content creation", "Campaign support"],
      requirements: ["Currently enrolled in business program"],
      qualifications: ["Social media experience"],
      benefits: ["Flexible hours", "Resume building"],
      applicationProcess: ["Submit application", "Interview"],
      admissionRequirements: ["Business major"],
    },
    {
      id: 3,
      title: "Teaching Assistant - Economics",
      department: "Economics",
      type: "Part Time",
      category: "Teaching",
      applications: 24,
      status: "Active",
      createdDate: "2025-09-05",
      salary: "$20/hour",
      jobDescription: "Help teach economics courses and support student learning.",
      responsibilities: ["Grade assignments", "Lead discussions", "Office hours"],
      requirements: ["Economics major", "Excellent GPA"],
      qualifications: ["Teaching experience"],
      benefits: ["Tuition discount"],
      applicationProcess: ["Submit CV", "Teaching demo"],
      admissionRequirements: ["Graduate student or senior undergraduate"],
    },
    {
      id: 4,
      title: "Software Developer - University IT",
      department: "Information Technology",
      type: "Full Time",
      category: "Technology",
      applications: 45,
      status: "Active",
      createdDate: "2025-08-28",
      salary: "$60,000 - $75,000",
      jobDescription: "Develop and maintain university IT systems.",
      responsibilities: ["Code development", "System maintenance", "Troubleshooting"],
      requirements: ["BS in Computer Science", "JavaScript/React"],
      qualifications: ["3+ years experience"],
      benefits: ["Health insurance", "401k", "Professional development"],
      applicationProcess: ["Submit CV", "Coding assessment", "Technical interview", "Final round"],
      admissionRequirements: ["Bachelor's degree"],
    },
  ])

  const [careers, setCareers] = useState([
    {
      id: 1,
      title: "Financial Consultant",
      description: "Work with clients on financial planning and investment strategies",
    },
  ])

  const [showPostJobModal, setShowPostJobModal] = useState(false)
  const [showAddCareerModal, setShowAddCareerModal] = useState(false)
  const [viewingJob, setViewingJob] = useState(null)
  const [editingJob, setEditingJob] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSaveJob = (jobData) => {
    if (editingJob) {
      setJobs(jobs.map((j) => (j.id === editingJob.id ? { ...jobData, id: j.id } : j)))
      setEditingJob(null)
    } else {
      setJobs([...jobs, { ...jobData, id: Date.now() }])
    }
    setShowPostJobModal(false)
  }

  const handleEditJob = (job) => {
    setEditingJob(job)
    setShowPostJobModal(true)
  }

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter((j) => j.id !== id))
  }

  const handleAddCareer = (careerData) => {
    setCareers([...careers, { ...careerData, id: Date.now() }])
    setShowAddCareerModal(false)
  }

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Jobs & Internships</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowAddCareerModal(true)}
            className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 font-medium"
          >
            + Add Career
          </button>
          <button
            onClick={() => {
              setEditingJob(null)
              setShowPostJobModal(true)
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
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

      <JobsTable jobs={filteredJobs} onView={setViewingJob} onEdit={handleEditJob} onDelete={handleDeleteJob} />

      {showPostJobModal && (
        <PostNewJobModal
          job={editingJob}
          onSave={handleSaveJob}
          onClose={() => {
            setShowPostJobModal(false)
            setEditingJob(null)
          }}
        />
      )}

      {showAddCareerModal && <AddCareerModal onSave={handleAddCareer} onClose={() => setShowAddCareerModal(false)} />}

      {viewingJob && <JobDetailsModal job={viewingJob} onClose={() => setViewingJob(null)} />}
    </div>
  )
}
