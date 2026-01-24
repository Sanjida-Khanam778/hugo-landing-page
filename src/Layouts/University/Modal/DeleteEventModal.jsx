import { X } from "lucide-react";

export default function DeleteEventModal({ event, onConfirm, onCancel }) {
    if (!event) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-lg shadow-xl mx-4">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <h2 className="text-xl font-bold text-gray-900">Cancel Event</h2>
                    <button
                        onClick={onCancel}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                        Are you sure you want to cancel <span className="font-bold text-gray-900">{event.title}</span>?
                        This will remove the event from the calendar and list. This action cannot be undone.
                    </p>
                </div>

                {/* Footer */}
                <div className="flex gap-3 px-6 py-4 bg-gray-50 rounded-b-lg border-t justify-end">
                    <button
                        onClick={onCancel}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 font-semibold transition-colors"
                    >
                        No, Keep it
                    </button>
                    <button
                        onClick={() => onConfirm(event.id)}
                        className="px-6 py-2 bg-red text-white rounded-lg hover:bg-red-600 font-semibold shadow-md transition-colors"
                    >
                        Yes, Cancel Event
                    </button>
                </div>
            </div>
        </div>
    );
}
