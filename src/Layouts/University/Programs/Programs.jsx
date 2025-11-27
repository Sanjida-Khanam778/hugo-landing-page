import { useState } from "react";
import ProgramsView from "./ProgramView";
import ProgramDetailView from "./ProgramDetailView";
import ProgramForm from "./ProgramForm";

export default function Programs() {
  const [view, setView] = useState("list"); // list, add, edit
  const [viewingProgram, setViewingProgram] = useState(null);
  const [programs, setPrograms] = useState([
    {
      id: 1,
      name: "Bachelor of Computer Science",
      code: "BCS",
      status: "Published",
      level: "Bachelor",
      duration: "4 years",
      language: "English",
      applications: 48,
      lastUpdated: "2025-09-15",
      description: "A comprehensive program in computer science",
      learningOutcomes: ["Outcome 1", "Outcome 2"],
      faculties: [{ name: "Dr. Jane Smith", expertise: "AI" }],
      curriculum: {
        years: [
          {
            title: "First Year",
            courses: [
              "Principles of Microeconomics",
              "Principles of Macroeconomics",
              "Calculus I & II",
              "Statistics for Economists",
              "Writing and Communication",
            ],
          },
          {
            title: "Second Year",
            courses: [
              "Intermediate Microeconomics",
              "Intermediate Macroeconomics",
              "Econometrics I",
              "Economic History",
              "Electives",
            ],
          },
          {
            title: "Third Year",
            courses: [
              "Advanced Microeconomics",
              "Advanced Macroeconomics",
              "Econometrics II",
              "International Economics",
              "Electives",
            ],
          },
          {
            title: "Fourth Year",
            courses: [
              "Senior Thesis",
              "Economic Policy",
              "Development Economics",
              "Behavioral Economics",
              "Electives",
            ],
          },
        ],
      },
      requirements: {
        deadlines: [
          { intake: "September 2025", deadline: "January 1, 2025" },
          { intake: "January 2026", deadline: "October 1, 2025" },
        ],
        req: [
          "High school diploma or equivalent",
          "Competitive GPA (typically 3.8 or higher)",
          "SAT/ACT scores",
          "Personal statement",
          "Letters of recommendation",
          "Demonstrated interest in economics or related fields",
        ],
      },
      admissionReqs: [],
      appProcess: [
        {
          title: "Create an Account",
          description: "Register on the university's application portal.",
        },
        {
          title: "Complete the Application Form",
          description:
            "Fill in all required personal and academic information.",
        },
        {
          title: "Upload Required Documents",
          description:
            "Submit transcripts, test scores, recommendations, and personal statement.",
        },
        {
          title: "Pay Application Fee",
          description: "Submit the non-refundable application fee.",
        },
        {
          title: "Interview (if required)",
          description: "Selected candidates may be invited for an interview.",
        },
      ],
    },
    {
      id: 2,
      name: "Master of Business Administration",
      code: "MBA",
      status: "Published",
      level: "Master",
      duration: "2 years",
      language: "English",
      applications: 126,
      lastUpdated: "2025-09-15",
      description: "Advanced business management program",
      learningOutcomes: ["Outcome 1", "Outcome 2"],
      faculties: [{ name: "Prof. John Doe", expertise: "Finance" }],
      curriculum: {
        years: [
          {
            title: "First Year",
            courses: [
              "Principles of Microeconomics",
              "Principles of Macroeconomics",
              "Calculus I & II",
              "Statistics for Economists",
              "Writing and Communication",
            ],
          },
          {
            title: "Second Year",
            courses: [
              "Intermediate Microeconomics",
              "Intermediate Macroeconomics",
              "Econometrics I",
              "Economic History",
              "Electives",
            ],
          },
          {
            title: "Third Year",
            courses: [
              "Advanced Microeconomics",
              "Advanced Macroeconomics",
              "Econometrics II",
              "International Economics",
              "Electives",
            ],
          },
          {
            title: "Fourth Year",
            courses: [
              "Senior Thesis",
              "Economic Policy",
              "Development Economics",
              "Behavioral Economics",
              "Electives",
            ],
          },
        ],
      },
      requirements: {
        deadlines: [
          { intake: "September 2025", deadline: "January 1, 2025" },
          { intake: "January 2026", deadline: "October 1, 2025" },
        ],
        req: [
          "High school diploma or equivalent",
          "Competitive GPA (typically 3.8 or higher)",
          "SAT/ACT scores",
          "Personal statement",
          "Letters of recommendation",
          "Demonstrated interest in economics or related fields",
        ],
      },
      admissionReqs: [],
      appProcess: [
        {
          title: "Create an Account",
          description: "Register on the university's application portal.",
        },
        {
          title: "Complete the Application Form",
          description:
            "Fill in all required personal and academic information.",
        },
        {
          title: "Upload Required Documents",
          description:
            "Submit transcripts, test scores, recommendations, and personal statement.",
        },
        {
          title: "Pay Application Fee",
          description: "Submit the non-refundable application fee.",
        },
        {
          title: "Interview (if required)",
          description: "Selected candidates may be invited for an interview.",
        },
      ],
    },
    {
      id: 3,
      name: "PhD in Artificial Intelligence",
      code: "PhD-AI",
      status: "Draft",
      level: "PhD",
      duration: "4 years",
      language: "English",
      applications: 0,
      lastUpdated: "2025-09-15",
      description: "Research-focused AI program",
      learningOutcomes: ["Outcome 1", "Outcome 2"],
      faculties: [{ name: "Dr. Sarah Wilson", expertise: "ML" }],
      curriculum: {
        years: [
          {
            title: "First Year",
            courses: [
              "Principles of Microeconomics",
              "Principles of Macroeconomics",
              "Calculus I & II",
              "Statistics for Economists",
              "Writing and Communication",
            ],
          },
          {
            title: "Second Year",
            courses: [
              "Intermediate Microeconomics",
              "Intermediate Macroeconomics",
              "Econometrics I",
              "Economic History",
              "Electives",
            ],
          },
          {
            title: "Third Year",
            courses: [
              "Advanced Microeconomics",
              "Advanced Macroeconomics",
              "Econometrics II",
              "International Economics",
              "Electives",
            ],
          },
          {
            title: "Fourth Year",
            courses: [
              "Senior Thesis",
              "Economic Policy",
              "Development Economics",
              "Behavioral Economics",
              "Electives",
            ],
          },
        ],
      },
      requirements: {
        deadlines: [
          { intake: "September 2025", deadline: "January 1, 2025" },
          { intake: "January 2026", deadline: "October 1, 2025" },
        ],
        req: [
          "High school diploma or equivalent",
          "Competitive GPA (typically 3.8 or higher)",
          "SAT/ACT scores",
          "Personal statement",
          "Letters of recommendation",
          "Demonstrated interest in economics or related fields",
        ],
      },
      admissionReqs: [],
      appProcess: [
        {
          title: "Create an Account",
          description: "Register on the university's application portal.",
        },
        {
          title: "Complete the Application Form",
          description:
            "Fill in all required personal and academic information.",
        },
        {
          title: "Upload Required Documents",
          description:
            "Submit transcripts, test scores, recommendations, and personal statement.",
        },
        {
          title: "Pay Application Fee",
          description: "Submit the non-refundable application fee.",
        },
        {
          title: "Interview (if required)",
          description: "Selected candidates may be invited for an interview.",
        },
      ],
    },
    {
      id: 4,
      name: "Master of Data Science",
      code: "MDS",
      status: "Published",
      level: "Master",
      duration: "1.5 years",
      language: "English",
      applications: 87,
      lastUpdated: "2025-09-15",
      description: "Data science and analytics program",
      learningOutcomes: ["Outcome 1", "Outcome 2"],
      faculties: [{ name: "Prof. Mike Johnson", expertise: "Statistics" }],
      curriculum: {
        years: [
          {
            title: "First Year",
            courses: [
              "Principles of Microeconomics",
              "Principles of Macroeconomics",
              "Calculus I & II",
              "Statistics for Economists",
              "Writing and Communication",
            ],
          },
          {
            title: "Second Year",
            courses: [
              "Intermediate Microeconomics",
              "Intermediate Macroeconomics",
              "Econometrics I",
              "Economic History",
              "Electives",
            ],
          },
          {
            title: "Third Year",
            courses: [
              "Advanced Microeconomics",
              "Advanced Macroeconomics",
              "Econometrics II",
              "International Economics",
              "Electives",
            ],
          },
          {
            title: "Fourth Year",
            courses: [
              "Senior Thesis",
              "Economic Policy",
              "Development Economics",
              "Behavioral Economics",
              "Electives",
            ],
          },
        ],
      },
      requirements: {
        deadlines: [
          { intake: "September 2025", deadline: "January 1, 2025" },
          { intake: "January 2026", deadline: "October 1, 2025" },
        ],
        req: [
          "High school diploma or equivalent",
          "Competitive GPA (typically 3.8 or higher)",
          "SAT/ACT scores",
          "Personal statement",
          "Letters of recommendation",
          "Demonstrated interest in economics or related fields",
        ],
      },
      admissionReqs: [],
      appProcess: [
        {
          title: "Create an Account",
          description: "Register on the university's application portal.",
        },
        {
          title: "Complete the Application Form",
          description:
            "Fill in all required personal and academic information.",
        },
        {
          title: "Upload Required Documents",
          description:
            "Submit transcripts, test scores, recommendations, and personal statement.",
        },
        {
          title: "Pay Application Fee",
          description: "Submit the non-refundable application fee.",
        },
        {
          title: "Interview (if required)",
          description: "Selected candidates may be invited for an interview.",
        },
      ],
    },
    {
      id: 5,
      name: "Bachelor of Business Administration",
      code: "BBA",
      status: "Published",
      level: "Bachelor",
      duration: "3 years",
      language: "English",
      applications: 103,
      lastUpdated: "2025-09-15",
      description: "Business administration program",
      learningOutcomes: ["Outcome 1", "Outcome 2"],
      faculties: [{ name: "Dr. Emily Davis", expertise: "Management" }],
      curriculum: {
        years: [
          {
            title: "First Year",
            courses: [
              "Principles of Microeconomics",
              "Principles of Macroeconomics",
              "Calculus I & II",
              "Statistics for Economists",
              "Writing and Communication",
            ],
          },
          {
            title: "Second Year",
            courses: [
              "Intermediate Microeconomics",
              "Intermediate Macroeconomics",
              "Econometrics I",
              "Economic History",
              "Electives",
            ],
          },
          {
            title: "Third Year",
            courses: [
              "Advanced Microeconomics",
              "Advanced Macroeconomics",
              "Econometrics II",
              "International Economics",
              "Electives",
            ],
          },
          {
            title: "Fourth Year",
            courses: [
              "Senior Thesis",
              "Economic Policy",
              "Development Economics",
              "Behavioral Economics",
              "Electives",
            ],
          },
        ],
      },
      requirements: {
        deadlines: [
          { intake: "September 2025", deadline: "January 1, 2025" },
          { intake: "January 2026", deadline: "October 1, 2025" },
        ],
        req: [
          "High school diploma or equivalent",
          "Competitive GPA (typically 3.8 or higher)",
          "SAT/ACT scores",
          "Personal statement",
          "Letters of recommendation",
          "Demonstrated interest in economics or related fields",
        ],
      },
      admissionReqs: [],
      appProcess: [
        {
          title: "Create an Account",
          description: "Register on the university's application portal.",
        },
        {
          title: "Complete the Application Form",
          description:
            "Fill in all required personal and academic information.",
        },
        {
          title: "Upload Required Documents",
          description:
            "Submit transcripts, test scores, recommendations, and personal statement.",
        },
        {
          title: "Pay Application Fee",
          description: "Submit the non-refundable application fee.",
        },
        {
          title: "Interview (if required)",
          description: "Selected candidates may be invited for an interview.",
        },
      ],
    },
    {
      id: 6,
      name: "Master of Public Health",
      code: "MPH",
      status: "Draft",
      level: "Master",
      duration: "2 years",
      language: "English",
      applications: 0,
      lastUpdated: "2025-09-15",
      description: "Public health program",
      learningOutcomes: ["Outcome 1", "Outcome 2"],
      faculties: [{ name: "Dr. Robert Brown", expertise: "Epidemiology" }],
      curriculum: {
        years: [
          {
            title: "First Year",
            courses: [
              "Principles of Microeconomics",
              "Principles of Macroeconomics",
              "Calculus I & II",
              "Statistics for Economists",
              "Writing and Communication",
            ],
          },
          {
            title: "Second Year",
            courses: [
              "Intermediate Microeconomics",
              "Intermediate Macroeconomics",
              "Econometrics I",
              "Economic History",
              "Electives",
            ],
          },
          {
            title: "Third Year",
            courses: [
              "Advanced Microeconomics",
              "Advanced Macroeconomics",
              "Econometrics II",
              "International Economics",
              "Electives",
            ],
          },
          {
            title: "Fourth Year",
            courses: [
              "Senior Thesis",
              "Economic Policy",
              "Development Economics",
              "Behavioral Economics",
              "Electives",
            ],
          },
        ],
      },
      requirements: {
        deadlines: [
          { intake: "September 2025", deadline: "January 1, 2025" },
          { intake: "January 2026", deadline: "October 1, 2025" },
        ],
        req: [
          "High school diploma or equivalent",
          "Competitive GPA (typically 3.8 or higher)",
          "SAT/ACT scores",
          "Personal statement",
          "Letters of recommendation",
          "Demonstrated interest in economics or related fields",
        ],
      },
      admissionReqs: [],
      appProcess: [
        {
          title: "Create an Account",
          description: "Register on the university's application portal.",
        },
        {
          title: "Complete the Application Form",
          description:
            "Fill in all required personal and academic information.",
        },
        {
          title: "Upload Required Documents",
          description:
            "Submit transcripts, test scores, recommendations, and personal statement.",
        },
        {
          title: "Pay Application Fee",
          description: "Submit the non-refundable application fee.",
        },
        {
          title: "Interview (if required)",
          description: "Selected candidates may be invited for an interview.",
        },
      ],
    },
  ]);

  const [editingProgram, setEditingProgram] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [programToDelete, setProgramToDelete] = useState(null);

  const handleAddClick = () => {
    setEditingProgram(null);
    setView("add");
  };

  const handleEditClick = (program) => {
    setEditingProgram(program);
    setView("edit");
  };

  const handleViewClick = (program) => {
    setViewingProgram(program);
  };

  const handleDeleteClick = (program) => {
    setProgramToDelete(program);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setPrograms(programs.filter((p) => p.id !== programToDelete.id));
    setShowDeleteModal(false);
    setProgramToDelete(null);
  };

  const handleSave = (programData) => {
    if (editingProgram) {
      // Edit existing
      setPrograms(
        programs.map((p) =>
          p.id === editingProgram.id
            ? {
                ...p,
                ...programData,
                lastUpdated: new Date().toISOString().split("T")[0],
              }
            : p
        )
      );
    } else {
      // Add new
      const newProgram = {
        id: Math.max(...programs.map((p) => p.id), 0) + 1,
        ...programData,
        lastUpdated: new Date().toISOString().split("T")[0],
      };
      setPrograms([...programs, newProgram]);
    }
    setView("list");
  };

  const handleBackToList = () => {
    setView("list");
  };

  if (view === "list") {
    return (
      <>
        <ProgramsView
          programs={programs}
          onAdd={handleAddClick}
          onEdit={handleEditClick}
          onView={handleViewClick}
          onDelete={handleDeleteClick}
        />

        {viewingProgram && (
          <ProgramDetailView
            program={viewingProgram}
            onEdit={handleEditClick}
            onClose={() => setViewingProgram(null)}
          />
        )}
      </>
    );
  }

  if (view === "add" || view === "edit") {
    return (
      <ProgramForm
        program={editingProgram}
        onSave={handleSave}
        onCancel={handleBackToList}
        isEdit={view === "edit"}
      />
    );
  }

  return null;
}
