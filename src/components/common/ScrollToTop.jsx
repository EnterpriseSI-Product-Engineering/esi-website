import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { CircleArrowUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll smoothly to top
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Run on route change
  useEffect(() => {
    handleScrollTop();
  }, [pathname]);

  // Show button when scrolled down past one window height
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border shadow rounded-full bg-white z-50 fixed bottom-4 cursor-pointer right-4 p-4"
              onClick={handleScrollTop}
            >
              <CircleArrowUp className="text-zinc-600" />
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Scroll to top</p>
          </TooltipContent>
        </Tooltip>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
