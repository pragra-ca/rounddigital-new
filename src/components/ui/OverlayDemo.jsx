"use client";
import * as React from "react";
import Overlay, {
  LoadingOverlay,
  ModalOverlay,
  FullScreenModal,
} from "./Overlay";
import { useOverlay } from "../../hooks/useOverlay";

function OverlayDemo() {
  // Multiple overlay states using the custom hook
  const primaryOverlay = useOverlay();
  const secondaryOverlay = useOverlay();
  const combinedOverlay = useOverlay();
  const loadingOverlay = useOverlay();
  const modalOverlay = useOverlay();
  const fullScreenModal = useOverlay();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Overlay Component System
        </h1>
        <p className="text-gray-600 mb-6">
          Based on the Figma design, here are different overlay variants you can
          use throughout the application.
        </p>
      </div>

      {/* Demo buttons grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <button
          onClick={primaryOverlay.showOverlay}
          className="p-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <div className="font-semibold mb-2">Primary Overlay</div>
          <div className="text-sm opacity-80">Black background</div>
        </button>

        <button
          onClick={secondaryOverlay.showOverlay}
          className="p-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
        >
          <div className="font-semibold mb-2">Secondary Overlay</div>
          <div className="text-sm opacity-80">Light gray background</div>
        </button>

        <button
          onClick={combinedOverlay.showOverlay}
          className="p-4 bg-gradient-to-r from-black to-gray-400 text-white rounded-lg hover:from-gray-800 hover:to-gray-500 transition-colors"
        >
          <div className="font-semibold mb-2">Combined Overlay</div>
          <div className="text-sm opacity-80">Black + Gray layers</div>
        </button>

        <button
          onClick={loadingOverlay.showOverlay}
          className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <div className="font-semibold mb-2">Loading Overlay</div>
          <div className="text-sm opacity-80">With spinner animation</div>
        </button>

        <button
          onClick={modalOverlay.showOverlay}
          className="p-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          <div className="font-semibold mb-2">Modal Overlay</div>
          <div className="text-sm opacity-80">Dark with close button</div>
        </button>

        <button
          onClick={fullScreenModal.showOverlay}
          className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <div className="font-semibold mb-2">Full Screen Modal</div>
          <div className="text-sm opacity-80">Combined with close button</div>
        </button>
      </div>

      {/* Usage example code */}
      <div className="bg-gray-100 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Usage Examples</h3>
        <pre className="text-sm text-gray-700 bg-white p-4 rounded border overflow-x-auto">
          {`// Import the components
import Overlay, { LoadingOverlay, ModalOverlay } from './ui/Overlay';
import { useOverlay } from '../hooks/useOverlay';

// Use the hook
const overlay = useOverlay();

// Basic overlay
<Overlay isVisible={overlay.isVisible} onClose={overlay.hideOverlay} />

// Loading overlay
<LoadingOverlay isVisible={loading} title="Processing..." />

// Modal overlay
<ModalOverlay isVisible={showModal} onClose={closeModal}>
  <div>Your modal content here</div>
</ModalOverlay>`}
        </pre>
      </div>

      {/* Features list */}
      <div className="bg-white border rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Features</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Full-screen overlay with black and light gray backgrounds (matching
            Figma design)
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Multiple variants: primary, secondary, combined, dark, light
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Keyboard accessibility (ESC key to close)
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Body scroll prevention when overlay is active
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Customizable content, titles, descriptions
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Loading spinner support
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Custom hook for state management
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Responsive design with proper spacing
          </li>
        </ul>
      </div>

      {/* All the overlay instances */}
      <Overlay
        variant="primary"
        isVisible={primaryOverlay.isVisible}
        onClose={primaryOverlay.hideOverlay}
        title="Primary Overlay"
        description="This overlay uses a solid black background, perfect for focus states or full-screen content."
      />

      <Overlay
        variant="secondary"
        isVisible={secondaryOverlay.isVisible}
        onClose={secondaryOverlay.hideOverlay}
        title="Secondary Overlay"
        description="This overlay uses a light gray background with transparency, ideal for subtle overlays."
      />

      <Overlay
        variant="combined"
        isVisible={combinedOverlay.isVisible}
        onClose={combinedOverlay.hideOverlay}
        title="Combined Overlay"
        description="This matches the exact Figma design with black background and light gray overlay on top."
        showCloseButton={true}
      />

      <LoadingOverlay
        isVisible={loadingOverlay.isVisible}
        title="Loading Content"
        description="Please wait while we fetch your data..."
      />

      <ModalOverlay
        isVisible={modalOverlay.isVisible}
        onClose={modalOverlay.hideOverlay}
        title="Modal Dialog"
      >
        <div className="space-y-4">
          <p>This is a modal overlay with custom content.</p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={modalOverlay.hideOverlay}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={modalOverlay.hideOverlay}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      </ModalOverlay>

      <FullScreenModal
        isVisible={fullScreenModal.isVisible}
        onClose={fullScreenModal.hideOverlay}
        title="Full Screen Modal"
      >
        <div className="space-y-6 max-w-lg">
          <p>
            This is a full-screen modal that uses the combined overlay style
            (black + light gray) matching the Figma design exactly.
          </p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded text-gray-800"
            />
            <textarea
              placeholder="Enter your message"
              rows={4}
              className="w-full px-4 py-2 border rounded text-gray-800"
            />
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={fullScreenModal.hideOverlay}
              className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={fullScreenModal.hideOverlay}
              className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </FullScreenModal>
    </div>
  );
}

export default OverlayDemo;
