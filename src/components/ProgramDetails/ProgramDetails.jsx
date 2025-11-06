import { MapPin } from "lucide-react";
import background from "../../assets/images/uniBanner.png";
import ProgramDetailsTab from "./ProgramDetailsTab";

export default function ProgramDetails() {
  return (
    <div>
      {/* Header */}
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-cover bg-no-repeat h-[50vh] text-white py-12 px-8 relative overflow-hidden flex items-center justify-center"
      >
        <div className="w-11/12 mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-full flex-shrink-0"></div>
            <div>
              <h1 className="text-3xl xl:text-5xl font-bold mb-2">
                Bachelor of Arts in Economics
              </h1>
              <p className="text-blue-100 flex items-center">
                <MapPin size={16} className="mr-2" />
                Cambridge, Massachusetts, USA
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProgramDetailsTab />
    </div>
  );
}
