import { useState, useMemo } from "react";
import eventPlaceholder from "../../assets/icons/event.png";
import logoPlaceholder from "../../assets/icons/uni_logo.png";
import {
    MapPin,
    Calendar,
    Users,
    Clock,
} from "lucide-react";
import background from "../../assets/images/uniBanner.png";
import { useGetEventsByUniIdQuery, useRegisterForEventMutation } from "../../Api/universityApi";
import { toast } from "react-hot-toast";

export default function UniEventsDetails({ eventId, onBack, univId }) {
    // We fetch all events for the university and find the specific one by ID. 
    // Normally there might be a separate API but based on the provided info we use this.
    const { data: eventsData, isLoading, error } = useGetEventsByUniIdQuery(univId);
    const selectedEvent = useMemo(() => {
        return eventsData?.find(e => e.id === eventId);
    }, [eventsData, eventId]);

    const [registerForEvent, { isLoading: isRegistering }] = useRegisterForEventMutation();

    const handleRegister = async () => {
        if (!selectedEvent) return;
        try {
            const res = await registerForEvent(selectedEvent.id).unwrap();
            toast.success(res.message || "Successfully registered for the event!", {
                position: "bottom-center",
            });
        } catch (err) {
            console.error("Registration error:", err);
            const msg = err?.data?.message || err?.data?.error || "Failed to register for event.";
            toast.error(msg, {
                position: "bottom-center",
            });
        }
    };

    const getFullUrl = (path) => {
        if (!path) return "";
        if (path.startsWith("http") || path.startsWith("blob:")) return path;
        return `http://10.10.13.20:8005${path}`;
    };

    if (isLoading) return <div className="min-h-screen bg-base p-8 text-center text-gray-500">Loading event details...</div>;
    if (error) return <div className="min-h-screen bg-base p-8 text-center text-red-500">Error loading event details.</div>;
    if (!selectedEvent) return <div className="min-h-screen bg-base p-8 text-center text-gray-500">Event not found.</div>;

    return (
        <div className="min-h-screen bg-base">
            {/* Header */}
            <div
                style={{ backgroundImage: `url(${background})` }}
                className="bg-cover bg-no-repeat h-[25vh] md:h-[50vh] text-white py-12 px-8 relative overflow-hidden flex items-center justify-center"
            >
                <div className="md:w-11/12 mx-auto relative z-10 px-0 sm:px-6 lg:px-8">
                    <button
                        onClick={onBack}
                        className="mb-5 md:mb-10 text-white/80 hover:text-white flex items-center gap-2"
                    >
                        ← Back to Events
                    </button>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex-shrink-0 overflow-hidden border-2 border-white">
                            <img
                                src={selectedEvent.univ_logo ? getFullUrl(selectedEvent.univ_logo) : logoPlaceholder}
                                className="w-full h-full object-cover"
                                alt={selectedEvent.univ_name}
                            />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-3xl xl:text-5xl font-bold mb-2">
                                {selectedEvent.title}
                            </h1>
                            <p className="text-blue-100 text-sm md:text-base flex items-center">
                                <MapPin md:size={16} className="mr-2" />
                                {selectedEvent.address}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {/* Main Content */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="bg-white rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">About This Event</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {selectedEvent.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-start gap-3 bg-[#EFF6FF] p-4 rounded-lg">
                                    <Calendar className="text-blue mt-1" size={20} />
                                    <div>
                                        <p className="text-sm text-gray-500">Date</p>
                                        <p className="font-medium">{selectedEvent.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-[#EFF6FF] p-4 rounded-lg">
                                    <Clock className="text-blue mt-1" size={20} />
                                    <div>
                                        <p className="text-sm text-gray-500">Time</p>
                                        <p className="font-medium">{selectedEvent.time}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-[#EFF6FF] p-4 rounded-lg">
                                    <Users className="text-blue mt-1" size={20} />
                                    <div>
                                        <p className="text-sm text-gray-500">Category</p>
                                        <p className="font-medium">{selectedEvent.category}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event Agenda */}
                        {selectedEvent.agendas && selectedEvent.agendas.length > 0 && (
                            <div className="bg-white rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
                                <div className="space-y-6">
                                    {selectedEvent.agendas.map((item, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="border-r-2 border-[#BFDBFE] pr-4 w-44 flex-shrink-0">
                                                <p className="text-gray-600 font-medium">{item.time_slot}</p>
                                            </div>

                                            <div className="pl-4 pb-2">
                                                <p className="font-bold text-[#111827]">
                                                    {item.task_title}
                                                </p>
                                                <p className="text-gray-600 mt-2">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Additional Information */}
                        {selectedEvent.additional_info && (
                            <div className="bg-white rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">
                                    Additional Information
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    {selectedEvent.additional_info}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Event Registration Status */}
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="font-semibold mb-4 text-lg">Event Status</h3>
                            <div className="flex justify-center mb-4">
                                <img
                                    src={selectedEvent.image ? getFullUrl(selectedEvent.image) : eventPlaceholder}
                                    className="rounded-lg max-h-48 object-cover"
                                    alt="Event"
                                />
                            </div>
                            <div className={`text-center p-3 rounded-lg font-bold mb-4 ${selectedEvent.status === "Upcoming" ? "bg-green/10 text-green" : "bg-gray-100 text-gray-600"}`}>
                                {selectedEvent.status}
                            </div>
                            <p className="text-gray-600 mb-4 text-center text-sm">
                                Registered: {selectedEvent.registration_count} students
                            </p>
                            <button
                                onClick={selectedEvent.status === "Upcoming" ? handleRegister : onBack}
                                disabled={isRegistering}
                                className="w-full bg-blue text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isRegistering ? "Registering..." : (selectedEvent.status === "Upcoming" ? "Register Now" : "Browse Events")}
                            </button>
                        </div>

                        {/* About the Host */}
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="font-semibold mb-4 text-lg">About the Host</h3>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100">
                                    <img src={selectedEvent.univ_logo ? getFullUrl(selectedEvent.univ_logo) : logoPlaceholder} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div>
                                    <p className="font-bold text-[#111827]">{selectedEvent.univ_name}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6 text-sm">
                                Learn more about programs, admissions, and life at {selectedEvent.univ_name}.
                            </p>
                            <button
                                onClick={onBack}
                                className="text-blue bg-blue/5 hover:bg-blue/10 w-full p-3 rounded-lg font-medium transition-colors"
                            >
                                Visit University Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
