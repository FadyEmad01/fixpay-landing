// import React, { useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
// import { motion, useScroll, useTransform } from "motion/react"; // or "motion/react"
// import { HeroHeader } from "../layout/header";
// import { PhoneMockup } from "./download";

// export default function HeroSection() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     // Animation starts when the top of the section hits the bottom of the viewport
//     // and ends when the top of the section hits the top of the viewport
//     offset: ["start end", "start start"],
//   });

//   // 1. ROTATION: Start fanned out [ -25, 0, 25 ], end at 0 (parallel)
//   const rotateLeft = useTransform(scrollYProgress, [0, 1], [-25, 0]);
//   const rotateRight = useTransform(scrollYProgress, [0, 1], [25, 0]);

//   // 2. HORIZONTAL: Start slightly overlapping, end side-by-side
//   // Adjust 320 to be slightly more than the width of your PhoneMockup
//   const xLeft = useTransform(scrollYProgress, [0, 1], [80, -320]);
//   const xRight = useTransform(scrollYProgress, [0, 1], [-80, 320]);

//   // 3. VERTICAL: The "Fan" look usually has side phones slightly lower
//   const ySide = useTransform(scrollYProgress, [0, 1], [50, 0]);

//   const imageUrl = "https://images.unsplash.com/photo-1740516367177-ae20098c8786?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//   return (
//     <>
//       <HeroHeader />

//       <main className="overflow-hidden">
//         <section ref={containerRef} className="bg-background">
//           <div className="relative py-32 md:pt-44">
//             {/* Background Image */}
//             <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% lg:aspect-9/4 absolute inset-0 aspect-square lg:top-24 dark:opacity-5 -z-10">
//               <img
//                 src={imageUrl}
//                 alt="hero background"
//                 className="size-full object-cover object-top"
//               />
//             </div>

//             <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
//               <div className="mx-auto max-w-md text-center">
//                 <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">
//                   Ship faster. Integrate smarter.
//                 </h1>
//                 <p className="text-muted-foreground mt-4 text-balance">
//                   Veil is your all-in-one engine for adding seamless
//                   integrations to your app.
//                 </p>
//                 <Button asChild className="mt-6 px-3 py-4 rounded-full leading-0">
//                   <a href="#link">
//                     <span className="text-nowrap">Start Building</span>
//                     <ChevronRight className="opacity-50" />
//                   </a>
//                 </Button>
//               </div>

//               {/* MOCKUP SECTION - Using Flex Center to anchor the absolute children */}
//               <div className="relative mt-24 flex justify-center items-center h-[550px] w-full">

//                 {/* Left Phone */}
//                 <motion.div
//                   style={{
//                     rotate: rotateLeft,
//                     x: xLeft,
//                     y: ySide,
//                     zIndex: 10
//                   }}
//                   className="absolute"
//                 >
//                   <PhoneMockup containerClassName="w-64 sm:w-72" screenImage={imageUrl} />
//                 </motion.div>

//                 {/* Center Phone */}
//                 <motion.div
//                   style={{ zIndex: 20 }}
//                   className="absolute"
//                 >
//                   <PhoneMockup containerClassName="w-64 sm:w-72 " screenImage={imageUrl} />
//                 </motion.div>

//                 {/* Right Phone */}
//                 <motion.div
//                   style={{
//                     rotate: rotateRight,
//                     x: xRight,
//                     y: ySide,
//                     zIndex: 10
//                   }}
//                   className="absolute"
//                 >
//                   <PhoneMockup containerClassName="w-64 sm:w-72" screenImage={imageUrl} />
//                 </motion.div>

//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Extra space so you can actually scroll down and see the parallel transition */}
//         {/* <section className="h-screen bg-background" /> */}
//       </main>
//     </>
//   );
// }

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion"; // Use framer-motion
import { HeroHeader } from "../layout/header";
import { PhoneMockup } from "./download";

export default function HeroSection() {
  const containerRef = useRef(null);

  // This tracks the scroll of the section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // We map the scroll progress (0 to 1) to our values
  // [0, 0.4] means the animation starts when the section enters
  // and finishes when it's roughly in the middle of the screen.

  // 1. Rotation: From fanned (-25/25) to straight (0)
  const rotateLeft = useTransform(scrollYProgress, [0, 0.4], [-25, 0]);
  const rotateRight = useTransform(scrollYProgress, [0, 0.4], [25, 0]);

  // 2. Horizontal: From center-ish (overlap) to side-by-side
  // Negative moves left, positive moves right
  const xLeft = useTransform(scrollYProgress, [0, 10], [100, -340]);
  const xRight = useTransform(scrollYProgress, [0, 10], [-100, 340]);

  // 3. Vertical: Side phones start slightly lower for the "fan" effect
  const ySide = useTransform(scrollYProgress, [0, 0.4], [60, 0]);

  const imageUrl =
    "https://images.unsplash.com/photo-1740516367177-ae20098c8786?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <HeroHeader />

      <main className="mb-20">
        {/* We use a large ref container to give the scroll something to track */}
        <section
          ref={containerRef}
          className="relative bg-background pt-32 md:pt-44 overflow-hidden"
        >
          {/* Background Image */}

            {/* Background Image */}
            <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% lg:aspect-9/4 absolute inset-0 aspect-square lg:top-24 dark:opacity-5 -z-10">
              <img
                src={imageUrl}
                alt="hero background"
                className="size-full object-cover object-top"
              />
            </div>

          <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
            <div className="mx-auto max-w-md text-center">
              <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">
                Ship faster. Integrate smarter.
              </h1>
              <p className="text-muted-foreground mt-4 text-balance">
                Veil is your all-in-one engine for adding seamless integrations
                to your app.
              </p>
              <Button asChild className="mt-6 px-3 py-4 rounded-full leading-0">
                <a href="#link">
                  <span className="text-nowrap">Start Building</span>
                  <ChevronRight className="opacity-50" />
                </a>
              </Button>
            </div>

            {/* THE ANIMATED PHONES */}

            <div className="relative mt-24 md:mt-15 flex justify-center items-center h-[600px] w-full">
              {/* Left Phone */}
              <motion.div
                style={{
                  rotate: rotateLeft,
                  x: xLeft,
                  y: ySide,
                  zIndex: 10,
                }}
                className="absolute "
              >
                <PhoneMockup
                  containerClassName="w-64 sm:w-72"
                  screenImage={imageUrl}
                />
              </motion.div>

              {/* Center Phone */}
              <motion.div style={{ zIndex: 20 }} className="absolute ">
                <PhoneMockup
                  containerClassName="w-64 sm:w-72 "
                  screenImage={imageUrl}
                />
              </motion.div>

              {/* Right Phone */}
              <motion.div
                style={{
                  rotate: rotateRight,
                  x: xRight,
                  y: ySide,
                  zIndex: 10,
                }}
                className="absolute "
              >
                <PhoneMockup
                  containerClassName="w-64 sm:w-72"
                  screenImage={imageUrl}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
