import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: any) => {
  const mount = document.getElementById("portal");

  const el = document.createElement("div");

  useEffect((): any => {
    if (!mount) return;
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;
