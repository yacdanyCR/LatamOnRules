interface DBUserProps {
	image: string,
	githubUsername: string,
	name?: string,
	summary?: string,
	githubLink: string,
	linkeldn?: string
}

interface ThemeProps {
	handleTheme: () => void,
	setTheme: React.Dispatch<React.SetStateAction<string>>
}

export type {
	DBUserProps,
	ThemeProps
}