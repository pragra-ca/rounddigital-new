"use client";
import * as React from "react";

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
  </div>
);

// Overlay variants based on Figma design
const overlayVariants = {
  // Primary black background overlay
  primary: "bg-black",
  // Secondary light gray overlay
  secondary: "bg-gray-200/90",
  // Combined overlay (black + gray)
  combined: "bg-black",
  // Dark overlay with transparency
  dark: "bg-black/80",
  // Light overlay with transparency
  light: "bg-white/90",
};

const textVariants = {
  primary: "text-gray-700",
  secondary: "text-white",
  dark: "text-white",
  light: "text-gray-800",
};

function Overlay({
  variant = "combined",
  isVisible = false,
  onClose = null,
  children = null,
  showCloseButton = false,
  closable = true,
  className = "",
  contentClassName = "",
  showLoadingSpinner = false,
  title = null,
  description = null,
  ...props
}) {
  // Handle escape key to close overlay
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && onClose && closable) {
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
  }, [isVisible, onClose, closable]);

  if (!isVisible) return null;

  const handleBackdropClick = closable && onClose ? onClose : undefined;

  return (
    <div className={`fixed inset-0 z-50 ${className}`} {...props}>
      {/* Primary overlay layer */}
      <div
        className={`fixed inset-0 ${overlayVariants[variant]} transition-opacity duration-300`}
        onClick={handleBackdropClick}
      >
        {/* Secondary overlay for combined variant */}
        {variant === "combined" && (
          <div
            className="fixed inset-0 bg-gray-200/90"
            onClick={(e) => e.stopPropagation()}
          >
            <OverlayContent
              variant={variant}
              title={title}
              description={description}
              showLoadingSpinner={showLoadingSpinner}
              showCloseButton={showCloseButton}
              onClose={onClose}
              contentClassName={contentClassName}
              closable={closable}
            >
              {children}
            </OverlayContent>
          </div>
        )}

        {/* Content for non-combined variants */}
        {variant !== "combined" && (
          <OverlayContent
            variant={variant}
            title={title}
            description={description}
            showLoadingSpinner={showLoadingSpinner}
            showCloseButton={showCloseButton}
            onClose={onClose}
            contentClassName={contentClassName}
            closable={closable}
          >
            {children}
          </OverlayContent>
        )}
      </div>
    </div>
  );
}

// Separate content component for reusability
function OverlayContent({
  variant,
  title,
  description,
  showLoadingSpinner,
  showCloseButton,
  onClose,
  contentClassName,
  closable,
  children,
}) {
  return (
    <div className="h-full w-full flex items-center justify-center p-4">
      <div
        className={`
        font-inter text-sm leading-4 ${textVariants[variant]} 
        text-center max-w-md w-full
        ${contentClassName}
      `}
      >
        {/* Close button */}
        {showCloseButton && closable && onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors"
            aria-label="Close overlay"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}

        {/* Title */}
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}

        {/* Loading spinner */}
        {showLoadingSpinner && (
          <div className="mb-6">
            <LoadingSpinner />
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm opacity-80 mb-6">{description}</p>
        )}

        {/* Custom children content */}
        {children}

        {/* Default content if no children, title, or description */}
        {!children && !title && !description && (
          <div className="space-y-4">
            <div className="text-lg font-medium">
              {showLoadingSpinner ? "Loading..." : "Overlay"}
            </div>
            <div className="text-sm opacity-80">
              {showLoadingSpinner
                ? "Please wait while we prepare your content"
                : "This is a full-screen overlay component"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Specific overlay components for common use cases
export function LoadingOverlay({
  isVisible,
  title = "Loading...",
  description = "Please wait...",
  ...props
}) {
  return (
    <Overlay
      isVisible={isVisible}
      variant="combined"
      showLoadingSpinner={true}
      title={title}
      description={description}
      closable={false}
      {...props}
    />
  );
}

export function ModalOverlay({
  isVisible,
  onClose,
  children,
  title,
  ...props
}) {
  return (
    <Overlay
      isVisible={isVisible}
      onClose={onClose}
      variant="dark"
      showCloseButton={true}
      title={title}
      {...props}
    >
      {children}
    </Overlay>
  );
}

export function FullScreenModal({ isVisible, onClose, children, ...props }) {
  return (
    <Overlay
      isVisible={isVisible}
      onClose={onClose}
      variant="combined"
      showCloseButton={true}
      {...props}
    >
      {children}
    </Overlay>
  );
}

export default Overlay;
