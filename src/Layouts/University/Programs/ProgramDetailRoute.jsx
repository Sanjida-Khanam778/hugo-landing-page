import { useLocation, useNavigate } from "react-router-dom";
import ProgramDetailView from "./ProgramDetailView";

export default function ProgramDetailRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const program = location.state && location.state.program;

  const handleClose = () => {
    // go back to programs list
    navigate("/university/programs");
  };

  if (!program) {
    return (
      <div className="min-h-screen p-8 bg-gray-50">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">No program selected</h2>
          <p className="text-gray-600 mb-6">
            This page expects program data passed from the Programs list. Open
            the program from the Programs page or go back.
          </p>
          <div className="flex justify-end">
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Back to Programs
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ProgramDetailView
      program={program}
      onEdit={(p) => {
        // navigate to edit in the Programs UI if needed
        navigate("/university/programs");
      }}
      onClose={handleClose}
    />
  );
}
