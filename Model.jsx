import React from "react";

const sizeClasses = {
  small: "w-1/4",
  medium: "w-1/2",
  large: "w-3/4",
};

export default function Modal({
  isOpen,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  size = "medium",
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`bg-white rounded-lg shadow-lg p-6 ${sizeClasses[size]}`}>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          {onConfirm && (
            <button
              onClick={onConfirm}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
