import { useState, useRef, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
} from "framer-motion";



const Parallax = ({ children, offset = 60, align = false, spring = false, direction=1 }) => {
    const prefersReducedMotion = useReducedMotion();
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const ref = useRef(null);

    const { scrollY } = useScroll();

    const initial = elementTop - clientHeight;
    const final = elementTop + offset;

    let y = useTransform(scrollY, [initial, final], [direction*offset, -offset*direction]);
    if (spring == true)
        y = useSpring(y, { stiffness: 500, damping: 60 });

    useEffect(() => {
        const element = ref.current;
        const onResize = () => {
            setElementTop(
                element.getBoundingClientRect().top + window.scrollY ||
                window.pageYOffset
            );
            setClientHeight(window.innerHeight);
        };
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [ref]);

    if (prefersReducedMotion) {
        return <>{children}</>;
    }

    return (
        <motion.div ref={ref} style={align ? { x: y} : { y: y}}>
            {children}
        </motion.div>
    );
};

export default Parallax;
