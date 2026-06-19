"use client";
import * as React from "react";

function FullScreenOverlay({
  isVisible = false,
  onClose = null,
  children = null,
  showSecondaryOverlay = true,
  className = "",
  ...props
}) {
  // Handle escape key to close overlay
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && onClose) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when overlay is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main container wrapper */}
      <div className={`fixed inset-0 z-50 ${className}`} {...props}>
        {/* Primary fixed overlay - covers entire viewport with black background */}
        <div
          className="fixed top-0 bottom-0 left-0 right-0 bg-black"
          onClick={onClose}
        >
          {/* Secondary overlay - light gray background that sits on top of the black overlay */}
          {showSecondaryOverlay && (
            <div
              className="fixed top-0 bottom-0 left-0 right-0 bg-gray-200/90"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Content area with Inter font styling */}
              <div className="h-full w-full flex items-center justify-center">
                <div className="font-inter text-sm leading-4 text-gray-700 text-center p-8">
                  {children || (
                    <div className="space-y-4">
                      <div className="text-gray-800 text-lg font-medium">
                        Loading...
                      </div>
                      <div className="text-gray-600 text-sm">
                        Please wait while we prepare your content
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* If no secondary overlay, show content directly on black background */}
          {!showSecondaryOverlay && children && (
            <div className="h-full w-full flex items-center justify-center">
              <div className="font-inter text-sm leading-4 text-white text-center p-8">
                {children}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FullScreenOverlay;
