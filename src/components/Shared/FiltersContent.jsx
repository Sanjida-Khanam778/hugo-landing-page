import { useState } from "react";

export default function FiltersContent() {
  const [studyType, setStudyType] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedField, setSelectedField] = useState("all");
  return (
    <div className="bg-[#ECF5FF] text-black p-6 shadow-sm z-[10000]">
      <h3 className="font-bold text-xl mb-4">Filters</h3>

      {/* Study type Filter */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Study Type</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={studyType === "all"}
              onChange={() => setStudyType("all")}
            />
            <span className="text-sm cursor-pointer">All Type</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={studyType === "college"}
              onChange={() => setStudyType("college")}
            />
            <span className="text-sm cursor-pointer">College</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={studyType === "master"}
              onChange={() => setStudyType("master")}
            />
            <span className="text-sm cursor-pointer">Master</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={studyType === "degree"}
              onChange={() => setStudyType("degree")}
            />
            <span className="text-sm cursor-pointer">Degree</span>
          </label>

          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={studyType === "online courses"}
              onChange={() => setStudyType("online courses")}
            />
            <span className="text-sm cursor-pointer">Online courses</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={studyType === "professional Formation"}
              onChange={() => setStudyType("professional Formation")}
            />
            <span className="text-sm cursor-pointer">Professional Formation</span>
          </label>
        </div>
      </div>

      {/* Programs Filter */}
      <div>
        <h4 className="font-semibold mb-3">Programs</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "bma"}
              onChange={() => setSelectedField("bma")}
            />
            <span className="text-sm cursor-pointer">
              Business Management and Administration
            </span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "lss"}
              onChange={() => setSelectedField("lss")}
            />
            <span className="text-sm cursor-pointer">
              Legal and Social Sciences
            </span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "healthcare"}
              onChange={() => setSelectedField("healthcare")}
            />
            <span className="text-sm cursor-pointer">Healthcare</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "mathematics"}
              onChange={() => setSelectedField("mathematics")}
            />
            <span className="text-sm cursor-pointer">
              Natural Sciences and Mathematics
            </span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "humanities"}
              onChange={() => setSelectedField("humanities")}
            />
            <span className="text-sm cursor-pointer">Humanities and Letters</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "education"}
              onChange={() => setSelectedField("education")}
            />
            <span className="text-sm cursor-pointer">Education</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "technology"}
              onChange={() => setSelectedField("technology")}
            />
            <span className="text-sm cursor-pointer">
              Technology and Telecommunications
            </span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "economics"}
              onChange={() => setSelectedField("economics")}
            />
            <span className="text-sm cursor-pointer">Economics and Finance</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "languages"}
              onChange={() => setSelectedField("languages")}
            />
            <span className="text-sm cursor-pointer">Languages</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "marketing"}
              onChange={() => setSelectedField("marketing")}
            />
            <span className="text-sm cursor-pointer">Commerce and Marketing</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "tourism"}
              onChange={() => setSelectedField("tourism")}
            />
            <span className="text-sm cursor-pointer">
              {" "}
              Hospitality and Tourism
            </span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "sports"}
              onChange={() => setSelectedField("sports")}
            />
            <span className="text-sm cursor-pointer">
              {" "}
              Sports and Physical Activity
            </span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "agriculture"}
              onChange={() => setSelectedField("agriculture")}
            />
            <span className="text-sm cursor-pointer">
              Agriculture, Mining, and Gardening
            </span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "image"}
              onChange={() => setSelectedField("image")}
            />
            <span className="text-sm cursor-pointer">Image, Film, and Sound</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "arts"}
              onChange={() => setSelectedField("arts")}
            />
            <span className="text-sm cursor-pointer">Fine Arts</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "civil"}
              onChange={() => setSelectedField("civil")}
            />
            <span className="text-sm cursor-pointer">
              Security and Civil Protection
            </span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "logistics"}
              onChange={() => setSelectedField("logistics")}
            />
            <span className="text-sm cursor-pointer">
              Logistics and Transportation
            </span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "graphic"}
              onChange={() => setSelectedField("graphic")}
            />
            <span className="text-sm cursor-pointer">Graphic Arts</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "textile"}
              onChange={() => setSelectedField("textile")}
            />
            <span className="text-sm cursor-pointer">
              Fashion and Textile Production
            </span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "music"}
              onChange={() => setSelectedField("music")}
            />
            <span className="text-sm cursor-pointer">
              Music, Performing Arts, and Dance
            </span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "animals"}
              onChange={() => setSelectedField("animals")}
            />
            <span className="text-sm cursor-pointer">
              Veterinary Medicine and Animals
            </span>
          </label>
        </div>
      </div>
      {/* Locations Filter */}
      <div className="my-6">
        <h4 className="font-semibold mb-3">Locations</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "madrid"}
              onChange={() => setSelectedCountry("madrid")}
            />
            <span className="text-sm cursor-pointer">Comunidad de Madrid</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "barcelona"}
              onChange={() => setSelectedCountry("barcelona")}
            />
            <span className="text-sm cursor-pointer">Barcelona</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "valencia"}
              onChange={() => setSelectedCountry("valencia")}
            />
            <span className="text-sm cursor-pointer">Valencia</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "alicante"}
              onChange={() => setSelectedCountry("alicante")}
            />
            <span className="text-sm cursor-pointer">Alicante</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "sevilla"}
              onChange={() => setSelectedCountry("sevilla")}
            />
            <span className="text-sm cursor-pointer">Sevilla</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "salamanca"}
              onChange={() => setSelectedCountry("salamanca")}
            />
            <span className="text-sm cursor-pointer">Salamanca</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "málaga"}
              onChange={() => setSelectedCountry("málaga")}
            />
            <span className="text-sm cursor-pointer">Málaga</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "murcia"}
              onChange={() => setSelectedCountry("murcia")}
            />
            <span className="text-sm cursor-pointer">Murcia</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "cádiz"}
              onChange={() => setSelectedCountry("cádiz")}
            />
            <span className="text-sm cursor-pointer">Cádiz</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "vizcaya"}
              onChange={() => setSelectedCountry("vizcaya")}
            />
            <span className="text-sm cursor-pointer">Vizcaya</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "asturias"}
              onChange={() => setSelectedCountry("asturias")}
            />
            <span className="text-sm cursor-pointer">Asturias</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "zaragoza"}
              onChange={() => setSelectedCountry("zaragoza")}
            />
            <span className="text-sm cursor-pointer">Zaragoza</span>
          </label>
        </div>
      </div>
      {/* Condition */}
      <div className="my-6">
        <h4 className="font-semibold mb-3">Condition</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="level"
              className="mr-2 cursor-pointer"
              checked={selectedLevel === "public"}
              onChange={() => setSelectedLevel("public")}
            />
            <span className="text-sm cursor-pointer">Public</span>
          </label>

          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="level"
              className="mr-2 cursor-pointer"
              checked={selectedLevel === "private"}
              onChange={() => setSelectedLevel("private")}
            />
            <span className="text-sm cursor-pointer">Private</span>
          </label>
        </div>
      </div>
    </div>
  );
}
