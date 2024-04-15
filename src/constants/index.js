import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	threejs,
	person,
	buet,
	bdstokz,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Undergraduate Student",
		company_name: "Bangladesh University Of Engineering And Technology",
		icon: buet,
		iconBg: "#383E56",
		date: "Jan 2022 - Present",
		points: [
			"Undergraduate Junior Year of Computer Science",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Testimonial_message",
		name: "Name",
		designation: "Designation",
		company: "Company",
		image: person,
	},
];

const projects = [
	{
		name: "BDStokz",
		description:
			"A cutting-edge stock trading platform designed to provide an immersive and efficient trading experience",
		tags: [
			{
				name: "nodejs",
				color: "blue-text-gradient",
			},
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
			{
				name: "oracle",
				color: "red-text-gradient",
			},
		],
		image: bdstokz,
		source_code_link: "https://github.com/mrtaz77/BDStokz",
	},
];

export { services, technologies, experiences, testimonials, projects };