export default function DeleteProgramModal({ program, onConfirm, onCancel }) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg shadow-lg">
        <div className="flex justify-between items-center mb-4 px-6 py-4 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Delete Program</h2>
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete{" "}
          <span className="font-bold">{program.name}</span>? This action cannot
          be undone.
        </p>
        <div className="flex gap-4 justify-end">
          <button
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
