// navlink interfaces

export interface NavLinkMenu {
	label: string;
	id?: string;
	href: string;
	external: boolean;
	icon?: string;
}

export interface NavLinkSub {
	label: string;
	menu: NavLinkMenu[];
}

export interface NavLink {
	label: string;
	id?: string;
	href: string;
	external: boolean;
	videoUrl?: string;
	subMenu?: NavLinkSub[];
	title?: string;
	description?: string;
	button?: string;
}
