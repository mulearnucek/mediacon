import { For, onMount, type Component, createMemo } from "solid-js";
import gsap from "gsap";
import DottedGridBackground from "./DottedGridBackground";

import about from "@/assets/about.jpeg";
import about1 from "@/assets/about1.webp";
import about2 from "@/assets/about2.jpeg";
import about3 from "@/assets/about3.jpeg";
import about4 from "@/assets/about4.jpeg";
import about5 from "@/assets/about5.jpg";
import about6 from "@/assets/about6.webp";
import { TextCombo } from "./header";
import DashedDottedGrid from "./DashedDottedGrid";
import { Button } from "./ui/button";

const cardData = createMemo(() => [
  { title: "History", color: "bg-[#090806]", textColor: "text-[#D3D3CB]", img: about5 },
  { title: "Business", color: "bg-[#97AEBC]", textColor: "text-[#497689]", img: about2 },
  { title: "Culture", color: "bg-[#090806]", textColor: "text-[#D3D3CB]", img: about3 },
  { title: "Education", color: "bg-[#C45D4E]", textColor: "text-[#D3D3CB]", img: about4 },
  { title: "Technology", color: "bg-[#532901]", textColor: "text-[#CABDA8]", img: about },
  { title: "Entertainment", color: "bg-[#C785A0]", textColor: "text-[#A75576]", img: about6 },
]);

const AboutSection: Component = () => {
  onMount(() => {
    gsap.fromTo(
      ".about-card",
      { rotate: 0 },
      {
        rotate: (index: number) => (index % 2 === 0 ? -6 : 6),
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: ".about",
      }
    );
  });

  return (
    <section class="h-screen about bg-black text-tedx-black">
      <DottedGridBackground
        gridSize={100}
        dashArray="15"
        dotSize={2}
        dotColor="white"
        class="min-h-screen bg-black text-tedx-black flex flex-col justify-center items-center"
      >
        <div class="flex flex-col items-center justify-center w-full h-full">
          <img src="mediacon.png" alt="" class="md:w-[30rem] w-[20rem]" />
          {/* <div class="flex items-center h-full w-full">
            <img src="ctlg.svg" alt="" class="md:w-[10rem] w-[5rem]" />
            <p class="font-semibold text-yellow-500">X</p>
            <img src="mu.svg" alt="" class="md:w-[3rem] md:h-[3rem] w-[3rem]" />
          </div> */}
          <a href="upi://pay?pa=lchethas@oksbi&pn=CTLG%20&%20Mulearn&cu=INR&am=200" class="mt-4">
            <Button class="mt-4">
              Register
            </Button>
          </a>
        </div>
      </DottedGridBackground>
    </section>
  );
};

export default AboutSection;

function Card({
  title,
  color,
  textColor,
  img,
  index,
}: {
  title: string;
  color: string;
  textColor: string;
  img: string;
  index: number;
}) {
  return (
    <div
      class={`about-card ${color} shadow-md w-full aspect-auto h-full flex flex-col justify-between p-2 motion-rotate-loop-1 hover:motion-paused hover:z-10 hover:zoom-in-110 motion-delay-2000`}
      data-index={index}
    >
      <h3
        class={`${textColor} text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold md:font-semibold max-w-[30%] text-balance`}
      >
        {title}
      </h3>
      <img src={img} alt={title} class="w-full object-cover shadow-sm aspect-square" draggable={false} />
    </div>
  );
}
