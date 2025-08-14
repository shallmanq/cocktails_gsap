import { navLinks } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: ".main-nav",
                start: "top top",
                end: "+=200",
                scrub: true,
            }
        });

        navTween.fromTo(
            ".main-nav",
            { backgroundColor: "transparent", backdropFilter: "blur(0px)" },
            { backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)", duration: 1 }
        );
    });

    return (
        <nav className="main-nav fixed w-full">
            <div className="flex items-center justify-between p-4">
                <a href="/" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Sunset Squeeze</p>
                </a>
                <ul className="flex gap-4">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
