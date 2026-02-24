import bannerVideo from "../../assets/video/banner.mp4";

export default function Overview({ data }) {
  console.log(data);
   const getFullUrl = (path) => {
    if (!path) return "";
    return `http://10.10.13.20:8005${path}`;
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 h-auto">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover rounded-lg"
          >
            <source src={getFullUrl(data?.banner_video)} type="video/mp4" />
          </video>
        </div>
        <div className="w-full md:w-1/2 h-full">
          {/* About Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              About {data?.univ_name || "the University"}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {data?.about || "No information available."}
            </p>
          </div>
          {/* Accreditation Section */}
          {data?.accreditations?.length > 0 && (
            <div className="bg-white rounded-lg p-6 shadow-sm mt-4">
              <h3 className="text-xl font-bold mb-3">Accreditation</h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                {data.accreditations.map((acc, index) => (
                  <li key={acc.id || index}>
                    {acc.name} (Valid until: {acc.valid_until})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* "What makes us different" - expanded profile section */}
      <div className="rounded-lg p-6 mt-6 bg-white shadow-sm">
        <h3 className="text-2xl font-semibold mb-3">What makes us different</h3>
        {data?.what_makes_us_different ? (
          <div
            className="text-gray-700 leading-relaxed mb-3 space-y-3"
            dangerouslySetInnerHTML={{ __html: data.what_makes_us_different }}
          />
        ) : (
          <p className="text-gray-700 leading-relaxed mb-3">
            {data?.description || "No additional information provided."}
          </p>
        )}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 border rounded">
            <h4 className="font-semibold mb-2">Research & Innovation</h4>
            <p className="text-sm text-gray-600">
              World-class research centres and industry partnerships driving new
              discoveries.
            </p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold mb-2">Student Experience</h4>
            <p className="text-sm text-gray-600">
              Strong student support, modern facilities and a vibrant campus
              life.
            </p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold mb-2">Sustainability</h4>
            <p className="text-sm text-gray-600">
              Committed to reducing environmental impact across teaching and
              operations.
            </p>
          </div>
        </div> */}
      </div>

      {/* Rankings Section */}
      {data?.rankings?.length > 0 && (
        <div className="rounded-lg p-6 mt-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Rankings</h3>
          <div className="space-y-3">
            {data.rankings.map((rank, index) => (
              <div
                key={rank.id || index}
                className="flex justify-between items-center py-2 border-b border-[#CCCCCC] last:border-0"
              >
                <span className="text-gray-700">{rank.rank_title}</span>
                <span className="text-blue font-semibold">#{rank.rank} (Year: {rank.year})</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
