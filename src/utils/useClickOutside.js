import React, { useEffect } from "react";

function useOutsideAlerter(ref, callback) {
    
    function findUpTag(el, id) {
        while (el.parentNode) {
            el = el.parentNode;
            if (el.id === id)
                return true;
        }
        return false;
    }

    useEffect(() => {

        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (event.target.id != 'exclude' && !findUpTag(event.target, 'exclude')){
                    callback();
                }
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default useOutsideAlerter;