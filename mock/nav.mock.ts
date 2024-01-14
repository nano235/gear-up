import { NavLink } from "@/interfaces";

export const navLinks: NavLink[] = [
	{
		label: "rent gears",
		href: "/rent",
		external: false,
		videoUrl: "#",
		subMenu: [
			{
				label: "categories",
				menu: [
					{
						label: "All gears",
						href: "/all-gears",
						icon: "/svgs/icon-all-gears.svg",
						external: false,
					},
					{
						label: "Camera",
						href: "/camera",
						icon: "/svgs/icon-camera.svg",
						external: false,
					},
					{
						label: "Lenses",
						href: "/lenses",
						icon: "/svgs/icon-lenses.svg",
						external: false,
					},
					{
						label: "Audio",
						href: "/audio",
						icon: "/svgs/icon-audio.svg",
						external: false,
					},
					{
						label: "Lighting",
						href: "/lighting",
						icon: "/svgs/icon-lighting.svg",
						external: false,
					},
					{
						label: "Gimbals",
						href: "/gimbals",
						icon: "/svgs/icon-camera.svg",
						external: false,
					},
					{
						label: "Drones",
						href: "/drones",
						icon: "/svgs/icon-drones.svg",
						external: false,
					},
					{
						label: "Grip",
						href: "/grip",
						icon: "/svgs/icon-grip.svg",
						external: false,
					},
				],
			},
			{
				label: "get started",
				menu: [
					{
						label: "How it works",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "Gearup Insurance Coverage",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "Can I cancel my rental?",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "How do I get verified?",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "How much fee do I pay?",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
				],
			},
		],
	},
	{
		label: "buy gears",
		href: "/buy",
		external: false,
		videoUrl: "#",
		subMenu: [
			{
				label: "categories",
				menu: [
					{
						label: "all gears",
						href: "/all-gears",
						icon: "/svgs/icon-all-gears.svg",
						external: false,
					},
					{
						label: "camera",
						href: "/camera",
						icon: "/svgs/icon-camera.svg",
						external: false,
					},
					{
						label: "lenses",
						href: "/lenses",
						icon: "/svgs/icon-lenses.svg",
						external: false,
					},
					{
						label: "audio",
						href: "/audio",
						icon: "/svgs/icon-audio.svg",
						external: false,
					},
					{
						label: "lighting",
						href: "/lighting",
						icon: "/svgs/icon-lighting.svg",
						external: false,
					},
					{
						label: "gimbals",
						href: "/gimbals",
						icon: "/svgs/icon-camera.svg",
						external: false,
					},
					{
						label: "drones",
						href: "/drones",
						icon: "/svgs/icon-drones.svg",
						external: false,
					},
					{
						label: "grip",
						href: "/grip",
						icon: "/svgs/icon-grip.svg",
						external: false,
					},
				],
			},
			{
				label: "get started",
				menu: [
					{
						label: "how it works",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "Gearup Insurance Coverage",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "Can I cancel my rental?",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "How do I get verified?",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "How much fee do I pay?",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
				],
			},
		],
	},
	{
		label: "sell gears",
		href: "/sell",
		external: false,
		videoUrl: "#",
		title: "Selling a gear",
		description:
			"Sell your gears with confidence. Our secure escrow system ensures worry-free transaction with verified buyers only",
		button: "Create a listing",
		subMenu: [
			{
				label: "get started",
				menu: [
					{
						label: "how it works",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "Gearup Insurance Coverage",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "Can I cancel my rental?",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "How do I get verified?",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "How much fee do I pay?",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
				],
			},
		],
	},
	{
		label: "rent out",
		href: "/rent",
		external: false,
		title: "Rent out a gear",
		description:
			"Earn money renting out your gears. We ensured all renters are 100% ID verified!",
		button: "Create a listing",
		subMenu: [
			{
				label: "get started",
				menu: [
					{
						label: "how it works",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "Gearup Insurance Coverage",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "Can I cancel my rental?",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "How do I get verified?",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
					{
						label: "How much fee do I pay?",
						href: "/",
						id: "faq-how-it-works",
						external: false,
					},
				],
			},
		],
	},
	{
		label: "courses",
		href: "/courses",
		external: false,
	},
	{
		label: "blog",
		href: "/",
		external: true,
	},
];
