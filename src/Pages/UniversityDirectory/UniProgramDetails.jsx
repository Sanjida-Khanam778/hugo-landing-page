import React, { useState } from "react";
import {
    CheckCircle,
    Phone,
    Mail,
    Calendar,
    DollarSign,
    Award,
    ArrowLeft,
} from "lucide-react";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/speaker.png";
import { useGetProgramDetailsQuery } from "../../Api/universityApi";

export default function UniProgramDetails({ programId, onBack }) {
    const { data: programData, isLoading, error } = useGetProgramDetailsQuery(programId);
    const [activeTab, setActiveTab] = useState("overview");
    const [showApplicationForm, setShowApplicationForm] = useState(false);

    const getFullUrl = (path) => {
        if (!path) return "";
        if (path.startsWith("http") || path.startsWith("blob:")) return path;
        return `http://10.10.13.20:8005${path}`;
    };

    if (isLoading) return <div className="p-8 text-center text-gray-500">Loading program details...</div>;
    if (error) return <div className="p-8 text-center text-red-500">Error loading program details.</div>;
    if (!programData) return <div className="p-8 text-center text-gray-500">No program details found.</div>;

    const data = programData;
    return (
        <div className="bg-base">
            {/* Back Button and Header */}
            <div className="bg-white p-6 rounded-t-xl border-b border-gray-200">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-blue hover:text-blue-700 transition-colors mb-4 font-medium"
                >
                    <ArrowLeft size={20} />
                    Back to Programs
                </button>
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{data?.title || "Program Details"}</h1>
                        <p className="text-gray-500 mt-1">{data?.university_name}</p>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white border-b border-gray-200">
                <div className="px-6">
                    <div className="flex gap-8">
                        <button
                            onClick={() => setActiveTab("overview")}
                            className={`py-4 font-medium border-b-2 transition-colors ${activeTab === "overview"
                                ? "border-blue text-blue"
                                : "border-transparent text-gray hover:text-gray-900"
                                }`}
                        >
                            Overview & Curriculum
                        </button>
                        <button
                            onClick={() => setActiveTab("admission")}
                            className={`py-4 font-medium border-b-2 transition-colors ${activeTab === "admission"
                                ? "border-blue text-blue"
                                : "border-transparent text-gray hover:text-gray-900"
                                }`}
                        >
                            Admission
                        </button>
                        <button
                            onClick={() => setActiveTab("fees")}
                            className={`py-4 font-medium border-b-2 transition-colors ${activeTab === "fees"
                                ? "border-blue text-blue"
                                : "border-transparent text-gray hover:text-gray-900"
                                }`}
                        >
                            Fees & Scholarships
                        </button>
                        <button
                            onClick={() => setActiveTab("careers")}
                            className={`py-4 font-medium border-b-2 transition-colors ${activeTab === "careers"
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
            <div className="py-8">
                <div className="grid grid-cols-3 gap-8">
                    {/* Left Content */}
                    <div className="col-span-2 space-y-6">
                        {activeTab === "overview" && (
                            <>
                                {/* Program Overview */}
                                <div className="bg-white rounded-lg p-6 ">
                                    <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        {data?.description || "No description available."}
                                    </p>

                                    {/* Learning Outcomes */}
                                    {data?.learning_outcomes?.length > 0 && (
                                        <>
                                            <h3 className="text-lg font-bold mb-4">Learning Outcomes</h3>
                                            <div className="space-y-3 mb-6">
                                                {data.learning_outcomes.map((outcome) => (
                                                    <div key={outcome.id} className="flex items-start gap-3">
                                                        <CheckCircle
                                                            size={18}
                                                            strokeWidth={3.0}
                                                            className="text-[#16A34A] mt-0.5 flex-shrink-0"
                                                        />
                                                        <span className=" text-gray-700">
                                                            {outcome.outcome_text}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    {/* Key Faculty */}
                                    {data?.faculties?.length > 0 && (
                                        <>
                                            <h3 className="text-lg font-bold mb-4">Key Faculty</h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                {data.faculties.map((faculty, index) => (
                                                    <div key={index} className="flex items-center gap-3">
                                                        <div className="bg-blue/10 rounded-full w-16 h-16 flex items-center justify-center text-blue font-bold text-xl uppercase">
                                                            {faculty.name?.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">{faculty.name}</p>
                                                            <p className=" text-gray-600">{faculty.department}</p>
                                                            <p className=" text-gray-500 mt-1">
                                                                {faculty.expertise}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Program Curriculum */}
                                <div className="bg-white rounded-lg p-6 ">
                                    <h2 className="text-2xl font-bold mb-4">
                                        Program Curriculum
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        {data?.curriculum_overview || "The curriculum is designed to provide a comprehensive understanding of the subjects."}
                                    </p>

                                    <div className="grid grid-cols-2 gap-6">
                                        {/* First Year */}
                                        <div className="border border-blue-200 rounded-lg p-5 bg-blue-50">
                                            <h4 className="font-bold text-base mb-4 text-gray-900">
                                                First Year
                                            </h4>
                                            <div className="space-y-2">
                                                {(data?.first_year_courses || "").split(",").map((course, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                                                            {idx + 1}
                                                        </div>
                                                        <span className=" text-gray-700">
                                                            {course.trim()}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Second Year */}
                                        <div className="border border-blue-200 rounded-lg p-5 bg-blue-50">
                                            <h4 className="font-bold text-base mb-4 text-gray-900">
                                                Second Year
                                            </h4>
                                            <div className="space-y-2">
                                                {(data?.second_year_courses || "").split(",").map((course, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                                                            {idx + 1}
                                                        </div>
                                                        <span className=" text-gray-700">
                                                            {course.trim()}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Third Year */}
                                        <div className="border border-blue-200 rounded-lg p-5 bg-blue-50">
                                            <h4 className="font-bold text-base mb-4 text-gray-900">
                                                Third Year
                                            </h4>
                                            <div className="space-y-2">
                                                {(data?.third_year_courses || "").split(",").map((course, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                                                            {idx + 1}
                                                        </div>
                                                        <span className="text-sm text-gray-700">
                                                            {course.trim()}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Fourth Year */}
                                        <div className="border border-blue-200 rounded-lg p-5 bg-blue-50">
                                            <h4 className="font-bold text-base mb-4 text-gray-900">
                                                Fourth Year
                                            </h4>
                                            <div className="space-y-2">
                                                {(data?.fourth_year_courses || "").split(",").map((course, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-6 h-6 bg-sky flex items-center justify-center text-xs font-medium text-blue rounded-full">
                                                            {idx + 1}
                                                        </div>
                                                        <span className="text-sm text-gray-700">
                                                            {course.trim()}
                                                        </span>
                                                    </div>
                                                ))}
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
                                                <p className="text-sm font-medium">{data?.credits} credits</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">
                                                    Program Duration
                                                </p>
                                                <p className="text-sm font-medium">{data?.duration}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">
                                                    Instruction Language
                                                </p>
                                                <p className="text-sm font-medium">{data?.language}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Modality</p>
                                                <p className="text-sm font-medium">{data?.modality}</p>
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
                                    {data?.deadlines?.length > 0 && (
                                        <div className="bg-[#EFF6FF] border border-[#EFF6FF] rounded-lg p-4 mb-6">
                                            <h3 className="font-semibold text-blue mb-3">
                                                Application Deadlines
                                            </h3>
                                            <div className="space-y-2">
                                                {data.deadlines.map((deadline, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-sm">
                                                        <div className="">
                                                            <Calendar
                                                                size={16}
                                                                strokeWidth={2.75}
                                                                className="text-blue"
                                                            />
                                                        </div>
                                                        <span className="text-gray-700">
                                                            {deadline.batch_name} - (Start: <strong>{deadline.start_date}</strong>, End: <strong>{deadline.end_date}</strong>)
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Requirements List */}
                                    {data?.requirements?.length > 0 && (
                                        <>
                                            <h3 className="font-semibold mb-4">Requirements</h3>
                                            <div className="space-y-3">
                                                {/* Flattening requirements based on the response structure provided */}
                                                {data.requirements.flat(Infinity).map((req, index) => (
                                                    <div key={index} className="flex items-start gap-3">
                                                        <CheckCircle
                                                            strokeWidth={3.0}
                                                            size={18}
                                                            className="text-green mt-0.5 flex-shrink-0"
                                                        />
                                                        <span className=" text-gray-700">
                                                            {req}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Application Process */}
                                {data?.steps?.length > 0 && (
                                    <div className="bg-white rounded-lg">
                                        <h2 className="text-2xl font-bold mb-6">
                                            Application Process
                                        </h2>

                                        <div className="space-y-4">
                                            {data.steps.map((step) => (
                                                <div key={step.order} className="flex gap-4">
                                                    <div className="w-8 h-8 bg-blue text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                                                        {step.order}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold  mb-1">
                                                            {step.step_title}
                                                        </h4>
                                                        <p className=" text-gray-600">
                                                            {step.step_description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
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
                                                <p className="text-2xl font-bold">${data?.domestic_tuition} per year</p>
                                            </div>
                                            <div className="bg-base rounded-lg p-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <DollarSign className="text-green" />
                                                    <span className=" font-medium text-gray-700">
                                                        International Students
                                                    </span>
                                                </div>
                                                <p className="text-2xl font-bold">${data?.international_tuition} per year</p>
                                            </div>
                                        </div>

                                        <p className=" text-gray-600 p-4 pt-0">
                                            Does not include accommodation, books, and other expenses
                                        </p>
                                    </div>

                                    {/* Additional Expenses */}
                                    {data?.additional_expenses?.length > 0 && (
                                        <>
                                            <h3 className="text-xl font-bold mb-4">
                                                Additional Expenses (Estimated)
                                            </h3>

                                            <div className="space-y-3 mb-6 rounded-xl border border-[#CCCCCC]">
                                                <div className="flex justify-between items-center py-3 border-b rounded-t-xl border-[#CCCCCC] bg-base px-6">
                                                    <span className="text-gray-700">Expense</span>
                                                    <span className="">Cost (Annual)</span>
                                                </div>
                                                {data.additional_expenses.map((expense) => (
                                                    <div key={expense.id} className="flex justify-between items-center py-3 border-b border-[#CCCCCC] px-6">
                                                        <span className=" text-gray-700">{expense.expense_name}</span>
                                                        <span className="">{expense.cost_estimate}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    {/* Scholarships & Financial Aid */}
                                    <div className="bg-white rounded-lg">
                                        <h2 className="text-xl font-bold mb-4">
                                            Scholarships & Financial Aid
                                        </h2>

                                        {/* Scholarships */}
                                        {data?.scholarships?.map((scholarship) => (
                                            <div key={scholarship.id} className="border border-gray-200 rounded-lg p-4 mb-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Award className="text-[#CA8A04]" />
                                                    <span className=" font-semibold text-gray-900">
                                                        {scholarship.name}
                                                    </span>
                                                </div>
                                                <div className="  mb-2">
                                                    <span className="font-medium">Amount:</span> {scholarship.amount}
                                                </div>
                                                <div className="">
                                                    <span className="font-medium">Eligibility:</span> {scholarship.eligibility}
                                                </div>
                                            </div>
                                        ))}

                                        {/* Financial Aid Office */}
                                        {data?.financial_aid && (
                                            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-4 mt-6">
                                                <h4 className="font-semibold text-[#1E40AF] mb-2">
                                                    Financial Aid
                                                </h4>
                                                <p className=" text-gray-700 mb-3">
                                                    {data.financial_aid.description}
                                                </p>
                                                <div className="space-y-1">
                                                    <p className=" text-gray-700">
                                                        <span className="font-medium">Email:</span>{" "}
                                                        {data.financial_aid.email}
                                                    </p>
                                                    <p className=" text-gray-700">
                                                        <span className="font-medium">Phone:</span> {data.financial_aid.phone}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
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
                                        the {data?.title || "this"} program.
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
                                        <p className="">{data?.level}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-500 mb-1">Duration</p>
                                        <p className="">{data?.duration}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-500 mb-1">Credits</p>
                                        <p className="">{data?.credits}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-500 mb-1">Language</p>
                                        <p className="">{data?.language}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-500 mb-1">Modality</p>
                                        <p className="">{data?.modality}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-500 mb-1">Next Start</p>
                                        <p className="">{data?.next_start_date}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-500 mb-1">Last Updated</p>
                                        <p className="">{data?.updated_at}</p>
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
                                        {data?.financial_aid?.email && (
                                            <div className="flex items-center gap-2 text-blue-600">
                                                <Mail size={14} />
                                                <span className="">{data.financial_aid.email}</span>
                                            </div>
                                        )}
                                        {data?.financial_aid?.phone && (
                                            <div className="flex items-center gap-2 text-blue-600">
                                                <Phone size={14} />
                                                <span className="">{data.financial_aid.phone}</span>
                                            </div>
                                        )}
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
