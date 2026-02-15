"use client";
import React, { useEffect, useState } from "react";

export default function Eyes({ className }: { className?: string }) {
	const [rotate, setRotate] = useState(0);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			let deltaX = mouseX - window.innerWidth / 2;
			let deltaY = mouseY - window.innerHeight / 2;

			var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
			setRotate(angle);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div className={`w-full gap-[50px] flex items-center justify-center ${className}`}>
			{/* Compass Housing 1 */}
			<div className="w-[200px] h-[200px] border-[2px] border-[#212121] rounded-full flex items-center justify-center bg-[#f8fafc] shadow-lg relative overflow-hidden">
				{/* Decorative Tick Marks */}
				<div className="absolute inset-0">
					{[0, 90, 180, 270].map((deg) => (
						<div
							key={deg}
							className="absolute w-[2px] h-[10px] bg-[#212121] left-1/2 top-[10px] origin-[0_90px]"
							style={{ transform: `translateX(-50%) rotate(${deg}deg)` }}
						/>
					))}
				</div>

				{/* Compass Needle */}
				<div
					className="w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
					style={{ transform: `rotate(${rotate + 90}deg)` }}>
					<div className="relative w-[140px] h-[140px] flex items-center justify-center">
						{/* Needle Body */}
						<div className="w-[4px] h-[140px] bg-[#212121] relative">
							{/* North Tip (Yellow) */}
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[20px] border-b-[#fdd765] -mt-[5px]" />
							{/* South Tip */}
							<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[20px] border-t-[#212121] -mb-[5px]" />
						</div>
						{/* Center Pin */}
						<div className="absolute w-[12px] h-[12px] bg-[#fdd765] rounded-full border-[2px] border-[#212121] z-10" />
					</div>
				</div>

				{/* Text Label */}
				<div className="absolute bottom-[40px] text-[10px] font-bold tracking-widest text-[#212121] opacity-50 font-NeueMontreal uppercase">
					Tathya
				</div>
			</div>

			{/* Compass Housing 2 */}
			<div className="w-[200px] h-[200px] border-[2px] border-[#212121] rounded-full flex items-center justify-center bg-[#f8fafc] shadow-lg relative overflow-hidden">
				{/* Decorative Tick Marks */}
				<div className="absolute inset-0">
					{[0, 90, 180, 270].map((deg) => (
						<div
							key={deg}
							className="absolute w-[2px] h-[10px] bg-[#212121] left-1/2 top-[10px] origin-[0_90px]"
							style={{ transform: `translateX(-50%) rotate(${deg}deg)` }}
						/>
					))}
				</div>

				{/* Compass Needle */}
				<div
					className="w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
					style={{ transform: `rotate(${rotate + 90}deg)` }}>
					<div className="relative w-[140px] h-[140px] flex items-center justify-center">
						<div className="w-[4px] h-[140px] bg-[#212121] relative">
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[20px] border-b-[#fdd765] -mt-[5px]" />
							<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[20px] border-t-[#212121] -mb-[5px]" />
						</div>
						<div className="absolute w-[12px] h-[12px] bg-[#fdd765] rounded-full border-[2px] border-[#212121] z-10" />
					</div>
				</div>

				{/* Text Label */}
				<div className="absolute bottom-[40px] text-[10px] font-bold tracking-widest text-[#212121] opacity-50 font-NeueMontreal uppercase">
					Truth
				</div>
			</div>
		</div>
	);
}
