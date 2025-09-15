import { useEffect } from "react";

//@ts-ignore idk type of ref ,callback is function
export default function useOutsideClick(ref, callback) {
  useEffect(() => {
    //@ts-ignore idk type of e
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
