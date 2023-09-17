import { useEffect } from "react";
import styled from "styled-components";

const ModalWrapper = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
`;

const OverlayWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const CloseModalWrapper = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;

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
  if (!open) {
    return null;
  }

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
      <OverlayWrapper onClick={onClose} />
      <ModalWrapper>
        <CloseModalWrapper onClick={onClose}>
          X
        </CloseModalWrapper>
        {children}
      </ModalWrapper>
    </div>
  );
}
