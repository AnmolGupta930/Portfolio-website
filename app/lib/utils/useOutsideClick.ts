import { useEffect } from "react";

//@ts-expect-error idk type of ref ,callback is function
export default function useOutsideClick(ref, callback) {
  useEffect(() => {
    //@ts-expect-error idk type of e
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
