import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion"; 
import { HeroHeader } from "../layout/header";
import { PhoneMockup } from "./download";

export default function HeroSection() {
  const containerRef = useRef(null);

  // This tracks the scroll of the section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 1. Rotation: Updated from -45 (left) and 45 (right) to straight (0)
  const rotateLeft = useTransform(scrollYProgress, [0, 0.4], [-45, 0]);
  const rotateRight = useTransform(scrollYProgress, [0, 0.4], [45, 0]);

  // 2. Horizontal: Changed scroll mapping from [0, 10] to [0, 1] 
  // because scrollYProgress only outputs values between 0 and 1.
  const xLeft = useTransform(scrollYProgress, [0, 1], [100, -340]);
  const xRight = useTransform(scrollYProgress, [0, 1], [-100, 340]);

  // 3. Vertical: Side phones start slightly lower for the "fan" effect
  const ySide = useTransform(scrollYProgress, [0, 0.4], [60, 0]);

  const imageUrl = "/images/p1.png";
  const imageUrl2 = "/images/p2.png";
  const imageUrl3 = "/images/p3.png";

  return (
    <>
      <HeroHeader />

      <main className="mb-20">
        <section
          ref={containerRef}
          className="relative bg-background pt-32 md:pt-44 overflow-hidden"
        >
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
                  screenImage={imageUrl2}
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
                  screenImage={imageUrl3}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}