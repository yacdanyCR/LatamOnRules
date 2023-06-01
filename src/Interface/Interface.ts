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
	theme: SetThemeProps
	setTheme: React.Dispatch<React.SetStateAction<SetThemeProps>>
}

interface SetThemeProps {
	checked: boolean,
	themeSelected: string
}

export type {
	DBUserProps,
	ThemeProps,
	SetThemeProps
}