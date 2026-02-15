"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { servicesSlides } from "@/constants";
import { Heading, RoundButton } from "@/components";
import Image from "next/image";

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "+=3000",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );

        return () => {
            pin.kill();
        };
    }, []);

    return (
        <section className="scroll-section-outer overflow-hidden">
            <div ref={triggerRef}>
                <div
                    ref={sectionRef}
                    className="h-screen w-[400vw] flex flex-row relative"
                >
                    {servicesSlides.map((item, index) => (
                        <div
                            key={item.id}
                            className="h-screen w-screen flex flex-col justify-center items-center relative px-10 bg-background"
                        >
                            <div className="w-full max-w-[1240px] h-full flex flex-col justify-center">
                                <div className="border-b border-[#21212155] pb-[30px] mb-[30px] flex items-center gap-4">
                                    <div className="w-[15px] h-[15px] bg-black rounded-full"></div>
                                    <h2 className="uppercase font-medium text-4xl">{item.title}</h2>
                                </div>
                                <div className="flex flex-col md:flex-row gap-10 h-[60vh]">
                                    <div className="w-full md:w-1/2 h-full rounded-[20px] overflow-hidden relative">
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 flex flex-col justify-between py-4">
                                        <div>
                                            <h3 className="text-2xl font-light leading-snug mb-8 w-[80%]">{item.description}</h3>
                                        </div>
                                        <div className="flex items-center justify-start">
                                            <RoundButton
                                                href={item.link}
                                                title="View Details"
                                                bgcolor="#000"
                                                className="bg-white text-black"
                                                style={{ color: "#fff" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
