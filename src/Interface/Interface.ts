interface DBUserProps {
	image?: string,
	githubUsername: string,
	name: string,
	summary?: string,
	githubLink?: string,
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

interface PaginationProps {
	users: DBUserProps[],
	setUsers: React.Dispatch<React.SetStateAction<DBUserProps[]>>,
	totalPages: number,
	currentPage: number,
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
	handleChange: (event: React.ChangeEvent<unknown>, value: number) => void
}

export type {
	DBUserProps,
	ThemeProps,
	SetThemeProps,
	PaginationProps
}