"use client";
import { motion } from "framer-motion";

export default function AnimatedText({
	text,
	className,
}: {
	text: string;
	className: string;
}) {
	const displayText = typeof text === "string" ? text : "";
	return (
		<span
			className={`flex overflow-hidden font-extrabold uppercase ${className}`}>
			{displayText.split(" ").map((word, index) => (
				<motion.p
					initial={{ y: "100%" }}
					whileInView={{ y: 0 }}
					transition={{
						delay: index * 0.06,
						duration: 0.9,
						ease: [0.22, 1, 0.36, 1],
					}}
					viewport={{ once: true }}
					key={index}
					className="inline-block whitespace-nowrap mr-4">
					{word}
				</motion.p>
			))}
		</span>
	);
}
