function ToolboxModal({ isOpen, onClose, content}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
      <div className="bg-pink4 rounded-lg shadow-lg w-2/3 p-6">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="mb-4">{content}</div>

        {/* Modal Footer */}
        <div className="flex justify-between">
          <button onClick={() => {navigator.clipboard.writeText(content)}} className="bg-transparent">
            <img src="copy.svg" className="h-8 opacity-80 hover:opacity-100" />
            
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray1 bg-pink2 rounded-md opacity-80 hover:opacity-100 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToolboxModal;
