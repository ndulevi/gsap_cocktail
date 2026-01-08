import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top+=80 top",
        toggleActions: "play reverse play reverse",
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 0.5,
        ease: "power1.out",
      }
    );
  }, []);
  // const navRef = useRef(null);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     navRef.current,
  //     {
  //       y: 0,
  //       borderRadius: "0px",
  //       paddingLeft: "0px",
  //       paddingRight: "0px",
  //       marginRight: "0px",
  //       marginLeft: "0px",
  //       backgroundColor: "transparent",
  //       backdropFilter: "blur(0px)",
  //     },
  //     {
  //       y: 12,
  //       borderRadius: "16px",
  //       paddingLeft: "16px",
  //       paddingRight: "16px",
  //       marginRight: "16px",
  //       marginLeft: "16px",
  //       backgroundColor: "rgba(0,0,0,0.5)",
  //       backdropFilter: "blur(10px)",
  //       duration: 0.3,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         start: "top+=80 top",
  //         toggleActions: "play reverse play reverse",
  //       },
  //     }
  //   );
  // }, []);
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Velvet Pour Logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
