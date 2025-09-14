import { useEffect } from "react";

//@ts-ignore
export default function useOutsideClick(ref, callback) {
  useEffect(() => {
    //@ts-ignore
    const handelClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handelClickOutside);
    return () => {
      document.removeEventListener("mousedown", handelClickOutside);
    };
  }, [ref, callback]);
}
