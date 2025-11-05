import { useState } from "react";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import uni_logo from "../../../assets/icons/uni_logo.png";
import background from "../../../assets/images/uni_directory.png";

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

  const getBadgeColor = (color) => {
    const colors = {
      green: "bg-[#DCFCE7] text-[#16A34A]",
      blue: "bg-[#BFDBFE] text-[#1E40AF]",
      yellow: "bg-[#FEF9C3] text-[#854D0E]",
      red: "bg-red-100 text-red-800",
      purple: "bg-[#F3E8FF] text-[#6B21A8]",
    };
    return colors[color] || "bg-[#F3F4F6] text-[#111827]";
  };

  const jobs = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Internship",
      salary: "$4,000/month",
      posted: "Posted 2 days ago",
      badge: "Internship",
      badgeColor: "green",
      description:
        "Join our dynamic software engineering team to work on cutting-edge projects. Gain hands-on experience with modern technologies and learn from experienced engineers and gain experience in software development.",
      fullDescription:
        "Join our dynamic software engineering team to work on cutting-edge projects. Gain hands-on experience with modern technologies and learn from experienced engineers. This internship will provide practical experience in software development that can complement your academic studies and prepare you for a successful career in the field of software engineering.",
      requirements: [
        "Currently pursuing a Bachelor's or Master's degree in Computer Science or related field",
        "Strong programming skills in at least one language (e.g., Python, Java, C++)",
        "Excellent problem-solving and analytical skills",
        "Ability to work in a team environment",
      ],
      responsibilities: [
        "Collaborate with senior engineers on real-world projects",
        "Write clean, efficient, and maintainable code",
        "Participate in code reviews and team meetings",
        "Document code and processes according to company standards",
        "Present project update in biweekly meetings",
      ],
      qualifications: [
        "Familiarity with version control systems (Git)",
        "Understanding of data structures and algorithms",
        "Personal internship or project experience",
        "Knowledge with cloud platforms (AWS, Azure, GCP)",
        "Strong communication skills",
        "Open-source contributions",
      ],
      benefits: [
        "Competitive salary",
        "Health insurance (medical, dental)",
        "Flexible working environment",
        "Professional development",
        "Free meals and coffee lounge",
      ],
      applicationProcess: [
        { step: "Submit Resume via online portal", icon: "file" },
        { step: "Complete coding assessment", icon: "code" },
        { step: "Participate in technical interview", icon: "phone" },
        { step: "Final interview with hiring manager", icon: "users" },
      ],
      contact: {
        email: "internship.recruiting@techcorp.com",
        phone: "(415) - 555 - 0123",
      },
      details: {
        category: "Technology",
        experience: "Entry Level",
        openings: "5 Positions",
        deadline: "July 1, 2025",
        duration: "3 months",
      },
    },
    {
      id: 2,
      title: "Marketing Assistant",
      company: "Brand Boost Agency",
      location: "New York, NY",
      type: "Part-time",
      salary: "$25/hour",
      posted: "Posted 5 days ago",
      badge: "Part-time",
      badgeColor: "blue",
      description:
        "Support the marketing team in campaign management, social media management, and email marketing campaigns and assist in content creation.",
      fullDescription:
        "Support the marketing team in campaign management, social media management, and email marketing campaigns.",
    },
    {
      id: 3,
      title: "Research Assistant - AI Lab",
      company: "University Research Center",
      location: "Cambridge, MA",
      type: "Full-time",
      salary: "$50,000 - $60,000/year",
      posted: "Posted 1 week ago",
      badge: "Research",
      badgeColor: "yellow",
      description:
        "Assist with cutting-edge research in artificial intelligence and machine learning. Contribute to experimental, data collection, and publication preparation.",
      fullDescription:
        "Assist with cutting-edge research in artificial intelligence and machine learning.",
    },
    {
      id: 4,
      title: "UI/UX Designer Intern",
      company: "Creative Studio Co.",
      location: "Los Angeles, CA",
      type: "Internship",
      salary: "$3,500/month",
      posted: "Posted 3 days ago",
      badge: "Hybrid",
      badgeColor: "purple",
      description:
        "Join our dynamic design team to support development, specifically product design research and product feature design.",
      fullDescription:
        "Join our dynamic design team to support development, specifically product design research and product feature design.",
    },
    {
      id: 5,
      title: "Teaching Assistant - Physics Department",
      company: "State University",
      location: "Austin, TX",
      type: "Part-time",
      salary: "$20/hour",
      posted: "Posted 4 days ago",
      badge: "On-site",
      badgeColor: "blue",
      description:
        "Assist professors in conducting theory labs, grading assignments, and supporting students in understanding advanced physics concepts.",
      fullDescription:
        "Assist professors in conducting theory labs, grading assignments, and supporting students in understanding advanced physics concepts.",
    },
    {
      id: 6,
      title: "Business Development Associate (Remote)",
      company: "Global Ventures Inc.",
      location: "Remote",
      type: "Full-time",
      salary: "$60,000 - $75,000/year",
      posted: "Posted 6 days ago",
      badge: "Remote",
      badgeColor: "green",
      description:
        "Identify and pursue new business opportunities, negotiate deals, prospective accounts, lead deal research and tracking opportunities.",
      fullDescription:
        "Identify and pursue new business opportunities, negotiate deals, prospective accounts.",
    },
  ];

  if (view === "detail" && selectedJob) {
    return (
      <JobDetails
        job={selectedJob}
        onBackClick={handleBackToList}
        getBadgeColor={getBadgeColor}
        background={background}
        uni_logo={uni_logo}
      />
    );
  }

  return (
    <JobList
      jobs={jobs}
      onViewDetails={handleViewDetails}
      getBadgeColor={getBadgeColor}
      background={background}
      uni_logo={uni_logo}
    />
  );
}
