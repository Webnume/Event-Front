import { useEffect } from "react";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

const CLOSE_MODAL_STYLES = {
  position: "absolute",
  top: "20px",
  right: "20px",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#000",
};

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({
  open,
  children,
  onClose,
}: ModalProps): JSX.Element | null {
  if (!open) return null;

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
      <div>
        <div style={OVERLAY_STYLES} onClick={onClose} />
        <div style={MODAL_STYLES}>
          <button style={CLOSE_MODAL_STYLES} onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
  );
}
