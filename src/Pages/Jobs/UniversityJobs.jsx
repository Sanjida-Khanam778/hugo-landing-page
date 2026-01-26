import { useState } from "react";
import JobList from "./JobList";
import JobDetails from "./JobDetails";

export default function UniversityJobs() {
  const [view, setView] = useState("list");
  const [selectedJob, setSelectedJob] = useState(null);

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setView("detail");
  };

  const handleBackToList = () => {
    setView("list");
    setSelectedJob(null);
  };



  if (view === "detail" && selectedJob) {
    return (
      <JobDetails
        jobId={selectedJob.id}
        onBackClick={handleBackToList}
        all={true}
      />
    );
  }

  return (
    <JobList
      onViewDetails={handleViewDetails}
    />
  );
}
