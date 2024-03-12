import { useEffect } from "react";

const useReveal = () => {
    useEffect(() => {
        window.addEventListener("scroll", reveal)
    
        function reveal() {
          const reveals = document.querySelectorAll(".reveal");
          for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            const revealPoint = 150;
    
            if (revealTop < windowHeight - revealPoint) {
              reveals[i].classList.add("active");
            }
          }
        }
    
        return () => window.removeEventListener("scroll", reveal)
      }, [])
}

export default useReveal;