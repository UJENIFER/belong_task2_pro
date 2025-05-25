import React, { useState } from "react";
import Modal from "./Modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-10">
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Show Product Details
      </button>

      <Modal
        isOpen={showModal}
        title="Product Info"
        onClose={() => setShowModal(false)}
        onConfirm={() => {
          alert("Item added to cart!");
          setShowModal(false);
        }}
        confirmText="Add to Cart"
        size="medium"
      >
        <p>This is a stylish and reusable modal for ecommerce platforms.</p>
      </Modal>
    </div>
  );
}
