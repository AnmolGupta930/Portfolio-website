import { useEffect } from "react";

//@ts-expect-error
export default function useOutsideClick(ref, callback) {
  useEffect(() => {
    //@ts-expect-error
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
