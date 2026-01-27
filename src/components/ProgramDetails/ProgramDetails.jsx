import { MapPin } from "lucide-react";
import backgroundPlaceholder from "../../assets/images/uniBanner.png";
import ProgramDetailsTab from "./ProgramDetailsTab";
import { useParams } from "react-router-dom";
import { useGetProgramDetailsQuery } from "../../Api/universityApi";

export default function ProgramDetails() {
  const { id } = useParams();
  const { data: program, isLoading, error } = useGetProgramDetailsQuery(id);
console.log(program)
  const getFullUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("blob:")) return path;
    return `http://10.10.13.20:8005${path}`;
  };

  if (isLoading) return <div className="min-h-screen bg-base p-8 text-center text-gray-500 font-inter">Loading program details...</div>;
  if (error) return <div className="min-h-screen bg-base p-8 text-center text-red-500 font-inter">Error loading program details.</div>;
  if (!program) return <div className="min-h-screen bg-base p-8 text-center text-gray-500 font-inter">Program not found.</div>;

  return (
    <div className="font-inter">
      {/* Header */}
      <div
        style={{ backgroundImage: `url(${getFullUrl(program.image) || backgroundPlaceholder})` }}
        className="bg-cover bg-no-repeat h-[50vh] text-white py-12 px-8 relative overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="w-11/12 mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-full flex-shrink-0 flex items-center justify-center p-2 shadow-lg">
              {/* Fallback for university icon if needed, for now using a placeholder or initials */}
              <span className="text-blue-900 font-bold text-2xl">{program.university_name?.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-3xl xl:text-5xl font-bold mb-3 drop-shadow-md">
                {program.title}
              </h1>
              <p className="text-blue-50 flex items-center text-lg font-medium">
                <MapPin size={20} className="mr-2" />
                {program.university_name}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProgramDetailsTab program={program} />
    </div>
  );
}
