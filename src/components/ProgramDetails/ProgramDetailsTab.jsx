import React, { useState } from "react";
import {
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Award,
} from "lucide-react";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/speaker.png";
export default function ProgramDetailsTab() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <div className="min-h-screen bg-base">
      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 font-medium border-b-2 transition-colors ${
                activeTab === "overview"
                  ? "border-blue text-blue"
                  : "border-transparent text-gray hover:text-gray-900"
              }`}
            >
              Overview & Curriculum
            </button>
            <button
              onClick={() => setActiveTab("admission")}
              className={`py-4 font-medium border-b-2 transition-colors ${
                activeTab === "admission"
                  ? "border-blue text-blue"
                  : "border-transparent text-gray hover:text-gray-900"
              }`}
            >
              Admission
            </button>
            <button
              onClick={() => setActiveTab("fees")}
              className={`py-4 font-medium border-b-2 transition-colors ${
                activeTab === "fees"
                  ? "border-blue text-blue"
                  : "border-transparent text-gray hover:text-gray-900"
              }`}
            >
              Fees & Scholarships
            </button>
            <button
              onClick={() => setActiveTab("careers")}
              className={`py-4 font-medium border-b-2 transition-colors ${
                activeTab === "careers"
                  ? "border-blue text-blue"
                  : "border-transparent text-gray hover:text-gray-900"
              }`}
            >
              Careers
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="col-span-2 space-y-6">
            {activeTab === "overview" && (
              <>
                {/* Program Overview */}
                <div className="bg-white rounded-lg p-6 ">
                  <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The Bachelor of Arts in Economics program at Harvard
                    University provides a comprehensive foundation in economic
                    theory and its applications. Students will develop
                    analytical skills and gain insights into microeconomic and
                    macroeconomic principles, econometric techniques, and
                    economic history and development. The program prepares
                    graduates for careers in finance, consulting, public policy,
                    research, data analytics, and development economics.
                  </p>

                  {/* Learning Outcomes */}
                  <h3 className="text-lg font-bold mb-4">Learning Outcomes</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        strokeWidth={3.0}
                        className="text-[#16A34A] mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        Understand and apply macroeconomic and microeconomic
                        theories
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        strokeWidth={3.0}
                        className="text-[#16A34A] mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        Analyze economic data using statistical and econometric
                        methods
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        strokeWidth={3.0}
                        className="text-[#16A34A] mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        Evaluate economic policies and their impacts on society
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        strokeWidth={3.0}
                        className="text-[#16A34A] mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        Develop critical thinking and problem-solving skills for
                        economic issues
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        strokeWidth={3.0}
                        className="text-[#16A34A] mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        Communicate economic concepts effectively in written and
                        oral forms
                      </span>
                    </div>
                  </div>

                  {/* Key Faculty */}
                  <h3 className="text-lg font-bold mb-4">Key Faculty</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <img className="w-16 h-16" src={profile1} alt="" />{" "}
                      <div>
                        <p className="font-semibold">Dr. Jane Smith</p>
                        <p className=" text-gray-600">Professor of Economics</p>
                        <p className=" text-gray-500 mt-1">
                          Macroeconomic Theory
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="w-16 h-16" src={profile2} alt="" />{" "}
                      <div>
                        <p className="font-semibold">Dr. Robert Johnson</p>
                        <p className=" text-gray-600">Associate Professor</p>
                        <p className=" text-gray-500 mt-1">
                          Experimental Economics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Program Curriculum */}
                <div className="bg-white rounded-lg p-6 ">
                  <h2 className="text-2xl font-bold mb-4">
                    Program Curriculum
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The curriculum is designed to provide a comprehensive
                    understanding of economic principles and their applications.
                    Students will progress through foundational courses to
                    advanced topics and specialized electives.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    {/* First Year */}
                    <div className="border border-blue-200 rounded-lg p-5 bg-blue-50">
                      <h4 className="font-bold text-base mb-4 text-gray-900">
                        First Year
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            1
                          </div>
                          <span className=" text-gray-700">
                            Principles of Microeconomics
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            2
                          </div>
                          <span className=" text-gray-700">
                            Principles of Macroeconomics
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            3
                          </div>
                          <span className=" text-gray-700">
                            Calculus I & II
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            4
                          </div>
                          <span className=" text-gray-700">
                            Introduction to Statistics
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            5
                          </div>
                          <span className=" text-gray-700">
                            Writing and Communication
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Second Year */}
                    <div className="border border-blue-200 rounded-lg p-5 bg-blue-50">
                      <h4 className="font-bold text-base mb-4 text-gray-900">
                        Second Year
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            1
                          </div>
                          <span className=" text-gray-700">
                            Intermediate Microeconomics
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            2
                          </div>
                          <span className=" text-gray-700">
                            Intermediate Macroeconomics
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            3
                          </div>
                          <span className=" text-gray-700">Econometrics</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            4
                          </div>
                          <span className=" text-gray-700">
                            Economic History
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            5
                          </div>
                          <span className=" text-gray-700">Electives</span>
                        </div>
                      </div>
                    </div>

                    {/* Third Year */}
                    <div className="border border-blue-200 rounded-lg p-5 bg-blue-50">
                      <h4 className="font-bold text-base mb-4 text-gray-900">
                        Third Year
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            1
                          </div>
                          <span className=" text-gray-700">
                            Advanced Microeconomics
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            2
                          </div>
                          <span className=" text-gray-700">
                            Advanced Macroeconomics
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            3
                          </div>
                          <span className="text-sm text-gray-700">
                            Econometrics II
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            4
                          </div>
                          <span className="text-sm text-gray-700">
                            International Economics
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            5
                          </div>
                          <span className="text-sm text-gray-700">
                            Electives
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Fourth Year */}
                    <div className="border border-blue-200 rounded-lg p-5 bg-blue-50">
                      <h4 className="font-bold text-base mb-4 text-gray-900">
                        Fourth Year
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            1
                          </div>
                          <span className="text-sm text-gray-700">
                            Senior Seminar
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            2
                          </div>
                          <span className="text-sm text-gray-700">
                            Economic Policy
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            3
                          </div>
                          <span className="text-sm text-gray-700">
                            Development Economics
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            4
                          </div>
                          <span className="text-sm text-gray-700">
                            Behavioral Economics
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                            5
                          </div>
                          <span className="text-sm text-gray-700">
                            Capstone Project
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="bg-base p-4 mt-8 rounded-lg">
                    {" "}
                    <h1 className="font-medium mb-4">Program Details</h1>
                    <div className=" grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">
                          Total Credits
                        </p>
                        <p className="text-sm font-medium">120 credits</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">
                          Program Duration
                        </p>
                        <p className="text-sm font-medium">4 years</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">
                          Instruction Language
                        </p>
                        <p className="text-sm font-medium">English</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Modality</p>
                        <p className="text-sm font-medium">On-campus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "admission" && (
              <div className="bg-white p-6">
                {/* Admission Requirements */}
                <div className="bg-white rounded-lg mb-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Admission Requirements
                  </h2>

                  {/* Application Deadlines */}
                  <div className="bg-[#EFF6FF] border border-[#EFF6FF] rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-blue mb-3">
                      Application Deadlines
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="">
                          <Calendar
                            size={16}
                            strokeWidth={2.75}
                            className="text-blue"
                          />
                        </div>
                        <span className="text-gray-700">
                          September 30th - (Early:{" "}
                          <strong>January 1, 2025</strong>)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="">
                          <Calendar
                            size={16}
                            strokeWidth={2.75}
                            className="text-blue"
                          />
                        </div>
                        <span className="text-gray-700">
                          January 15th - (Regular:{" "}
                          <strong>October 1, 2025</strong>)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Requirements List */}
                  <h3 className="font-semibold mb-4">Requirements</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle
                        strokeWidth={3.0}
                        size={18}
                        className="text-green mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        High school diploma or equivalent
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle
                        strokeWidth={3.0}
                        size={18}
                        className="text-green mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        Completed GPA (typically 3.8 or higher)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle
                        strokeWidth={3.0}
                        size={18}
                        className="text-green mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">SAT/ACT scores</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle
                        strokeWidth={3.0}
                        size={18}
                        className="text-green mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">Personal Statement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle
                        strokeWidth={3.0}
                        size={18}
                        className="text-green mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        Letters of recommendation
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle
                        strokeWidth={3.0}
                        size={18}
                        className="text-green mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        Demonstrated interest in economics or related fields
                      </span>
                    </div>
                  </div>
                </div>

                {/* Application Process */}
                <div className="bg-white rounded-lg">
                  <h2 className="text-2xl font-bold mb-6">
                    Application Process
                  </h2>

                  <div className="space-y-4">
                    {/* Step 1 */}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-blue text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold  mb-1">
                          Create an Account
                        </h4>
                        <p className=" text-gray-600">
                          Register on the university's application portal.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-blue text-white rounded-full flex items-center justify-center flex-shrink-0  ">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold  mb-1">
                          Complete the Application Form
                        </h4>
                        <p className=" text-gray-600">
                          Fill in your personal details, academic information,
                          and program preferences.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-blue text-white rounded-full flex items-center justify-center flex-shrink-0 ">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold  mb-1">
                          Upload Required Documents
                        </h4>
                        <p className=" text-gray-600">
                          Submit transcripts, test scores, letters of
                          recommendation, and personal statement.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-blue text-white rounded-full flex items-center justify-center flex-shrink-0  ">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold  mb-1">
                          Pay Application Fee
                        </h4>
                        <p className=" text-gray-600">
                          Complete payment of the application fee.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-blue text-white rounded-full flex items-center justify-center flex-shrink-0  ">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold  mb-1">
                          Interview (if required)
                        </h4>
                        <p className=" text-gray-600">
                          Selected applicants may be invited for an interview.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Apply Now Button */}
                  <div className="mt-6 text-center">
                    <button className="bg-blue hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "fees" && (
              <>
                {/* Tuition Fees */}
                <div className="bg-white rounded-lg p-6  mb-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Tuition Fees & Financial Aid
                  </h2>

                  <div className="border border-[#CCCCCC] mb-6 rounded-xl">
                    {/* Tuition Fees Section */}
                    <h3 className="text-xl font-bold bg-base p-4 rounded-t-xl border-b border-[#CCCCCC]">
                      Tuition Fees
                    </h3>

                    <div className="grid grid-cols-2 gap-6 mb-4 p-4 pb-0">
                      <div className="bg-base rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="text-green" />{" "}
                          <span className=" font-medium text-gray-700">
                            Domestic Students
                          </span>
                        </div>
                        <p className="text-2xl font-bold">$52,000 per year</p>
                      </div>
                      <div className="bg-base rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="text-green" />
                          <span className=" font-medium text-gray-700">
                            International Students
                          </span>
                        </div>
                        <p className="text-2xl font-bold">$55,000 per year</p>
                      </div>
                    </div>

                    <p className=" text-gray-600 p-4 pt-0">
                      Does not include accommodation, books, and other expenses
                    </p>
                  </div>

                  {/* Additional Expenses */}
                  <h3 className="text-xl font-bold mb-4">
                    Additional Expenses (Estimated)
                  </h3>

                  <div className="space-y-3 mb-6 rounded-xl border border-[#CCCCCC]">
                    <div className="flex justify-between items-center py-3 border-b rounded-t-xl border-[#CCCCCC] bg-base px-6">
                      <span className="text-gray-700">Expense</span>
                      <span className="">Cost (Annual)</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-[#CCCCCC] px-6">
                      <span className=" text-gray-700">Accommodation</span>
                      <span className="">$16,000 - $18,000</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-[#CCCCCC] px-6">
                      <span className=" text-gray-700">Books & Supplies</span>
                      <span className="">$1,000 - $1,500</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-[#CCCCCC] px-6">
                      <span className=" text-gray-700">Health Insurance</span>
                      <span className="">$3,000</span>
                    </div>
                    <div className="flex justify-between items-center py-3 px-6">
                      <span className=" text-gray-700">Personal Expenses</span>
                      <span className="">$2,000 - $3,000</span>
                    </div>
                  </div>
                  {/* Scholarships & Financial Aid */}
                  <div className="bg-white rounded-lg">
                    <h2 className="text-xl font-bold mb-4">
                      Scholarships & Financial Aid
                    </h2>

                    {/* Merit-Based Scholarship */}
                    <div className="border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="text-[#CA8A04]" />
                        <span className=" font-semibold text-gray-900">
                          Merit-Based Scholarship
                        </span>
                      </div>
                      <div className="  mb-2">
                        <span className="font-medium">Amount:</span> Up to
                        $10,000
                      </div>
                      <div className="">
                        <span className="font-medium">Eligibility:</span> Must
                        have a GPA of 3.8 or higher
                      </div>
                    </div>

                    {/* Need-Based Aid */}
                    <div className="border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="text-[#CA8A04]" />
                        <span className=" font-semibold text-gray-900">
                          Need-Based Aid
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className="font-medium">Amount:</span> $5,000 -
                        $20,000
                      </div>
                      <div className="">
                        <span className="font-medium">Eligibility:</span> Based
                        on financial need and academic performance
                      </div>
                    </div>

                    {/* Financial Aid Office */}
                    <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-4 mt-6">
                      <h4 className="font-semibold text-[#1E40AF] mb-2">
                        Financial Aid Office
                      </h4>
                      <p className=" text-gray-700 mb-3">
                        For more information about scholarships, grants, and
                        loans, please contact our Financial Aid Office.
                      </p>
                      <div className="space-y-1">
                        <p className=" text-gray-700">
                          <span className="font-medium">Email:</span>{" "}
                          financialaid@harvard.edu
                        </p>
                        <p className=" text-gray-700">
                          <span className="font-medium">Phone:</span> +1 (123)
                          456-7890
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "careers" && (
              <div className="bg-white p-6 rounded-xl">
                {/* Career Opportunities */}
                <div className="bg-white rounded-lg mt-6">
                  <h2 className="text-4xl font-bold mb-4">
                    Career Opportunities
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Graduates of the Bachelor of Arts in Economics program at
                    Harvard University are well-prepared to compete in various
                    sectors. The strong analytical skills and knowledge in
                    economics, data analysis, and policy analysis make graduates
                    highly sought after.
                  </p>

                  {/* Career Paths */}
                  <h3 className="text-2xl font-medium mb-4">Career Paths</h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-sky text-blue rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-medium text-blue-600">
                          1
                        </span>
                      </div>
                      <p className=" font-medium">Economic Researcher</p>
                    </div>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-sky text-blue rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-medium text-blue-600">
                          2
                        </span>
                      </div>
                      <p className=" font-medium">Financial Consultant</p>
                    </div>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-sky text-blue rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-medium text-blue-600">
                          3
                        </span>
                      </div>
                      <p className=" font-medium">Market Research Analyst</p>
                    </div>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-sky text-blue rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-medium text-blue-600">
                          4
                        </span>
                      </div>
                      <p className=" font-medium">Policy Advisor</p>
                    </div>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-sky text-blue rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-medium text-blue-600">
                          5
                        </span>
                      </div>
                      <p className=" font-medium">
                        Graduate studies in Economics, Business, or Law
                      </p>
                    </div>
                  </div>
                </div>

                {/* Employment Statistics */}
                <div className="bg-white rounded-lg mb-6">
                  <h3 className="text-2xl font-medium mb-4">
                    Employment Statistics
                  </h3>
                  <div className="space-y-3 border border-[#CCCCCC] rounded-xl">
                    <div className="flex justify-between items-center px-6 py-3 font-medium bg-base rounded-t-xl text-grey border-b border-[#CCCCCC]">
                      <span className="">Metric</span>
                      <span className="">Value</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-3 border-b border-[#CCCCCC]">
                      <span className="">
                        Employed or Not Active (3 months)
                      </span>
                      <span className="">95%</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-3 border-b border-[#CCCCCC]">
                      <span className="">Average Starting Salary</span>
                      <span className="">$75K</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-3">
                      <span className="">Graduate School Placement</span>
                      <span className="">20%</span>
                    </div>
                  </div>
                </div>

                {/* Career Services */}
                <div className="bg-white rounded-lg mb-6">
                  <h3 className="text-2xl font-medium mb-4">Career Services</h3>
                  <p className="text-gray-700  leading-relaxed mb-4">
                    Harvard University's Career Services provides career
                    services to help students prepare for and find employment.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        strokeWidth={3.0}
                        size={18}
                        className="text-green mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        One-on-one career counseling
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        strokeWidth={3.0}
                        size={18}
                        className="text-green mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        Resume and cover letter workshops
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        strokeWidth={3.0}
                        size={18}
                        className="text-green mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        Interview preparation and mock interviews
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        strokeWidth={3.0}
                        size={18}
                        className="text-green mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        Job and internship fairs
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        strokeWidth={3.0}
                        size={18}
                        className="text-green mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        Networking events with alumni and industry professionals
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        strokeWidth={3.0}
                        size={18}
                        className="text-green mt-0.5 flex-shrink-0"
                      />
                      <span className=" text-gray-700">
                        Access to exclusive job postings database
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Fixed */}
          <div className="space-y-6">
            {/* Apply Now */}
            <div className=" rounded-lg sticky top-16">
              {!showApplicationForm ? (
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-3">Apply Now</h3>
                  <p className=" text-gray-600 mb-4">
                    Ready to take the next step in your education? Apply now for
                    the Bachelor of Arts in Economics program.
                  </p>
                  <button
                    onClick={() => setShowApplicationForm(true)}
                    className="w-full bg-blue hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Start Application
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold mb-4">Apply Now</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block  font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                      />
                    </div>

                    <div>
                      <label className="block  font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                      />
                    </div>

                    <div>
                      <label className="block  font-medium text-gray-700 mb-2">
                        Documents
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="CV, Transcript, ..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block  font-medium text-gray-700 mb-2">
                        Highest Education
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-gray-500">
                        <option>Select education level</option>
                        <option>High School</option>
                        <option>Bachelor's Degree</option>
                        <option>Master's Degree</option>
                        <option>PhD</option>
                      </select>
                    </div>

                    <div>
                      <label className="block  font-medium text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none "
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-blue hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors ">
                      Submit Application
                    </button>
                    <button
                      onClick={() => setShowApplicationForm(false)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium transition-colors "
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}

              <>
                {/* Key Information */}
                <div className="mt-6 p-6 rounded-lg bg-white space-y-4">
                  <h3 className="text-lg font-medium mb-3">Key Information</h3>
                  <div className="flex justify-between items-center">
                    <p className=" text-gray-500 mb-1">Level</p>
                    <p className="">Bachelor's</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 mb-1">Duration</p>
                    <p className="">4 years</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 mb-1">Credits</p>
                    <p className="">120</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 mb-1">Language</p>
                    <p className="">English</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 mb-1">Modality</p>
                    <p className="">On-campus</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 mb-1">Next Start</p>
                    <p className="">September 2023</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 mb-1">Application Deadline</p>
                    <p className="">January 1, 2023</p>
                  </div>
                </div>

                {/* Have Questions */}
                <div className="mt-6 p-6 rounded-lg bg-white">
                  <h4 className="font-semibold  mb-3">Have Questions?</h4>
                  <p className="text-xs text-gray-600 mb-3">
                    Contact our admissions team for any questions about this
                    program.
                  </p>
                  <div className="space-y-2 text-blue">
                    <div className="flex items-center gap-2 text-blue-600">
                      <Mail size={14} />
                      <span className="">admissions@harvard.edu</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Phone size={14} />
                      <span className="">+1 (123) 456-7890</span>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
