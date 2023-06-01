import React, { createContext, useState } from 'react'
import { DBUsers } from '../DB/DBgitUser'
import { PaginationProps } from '../Interface/Interface'

const PaginationContext = createContext<PaginationProps>({} as PaginationProps)

interface Props {
	children: React.ReactNode
}

const USERS_PER_PAGE = 5

const PaginationProvider = ({ children }: Props) => {
	const [users, setUsers] = useState(Array.from(DBUsers).splice(0, USERS_PER_PAGE))
	const [currentPage, setCurrentPage] = useState<number>(1)
	const totalPages = Math.round(Array.from(DBUsers).length / USERS_PER_PAGE)

	const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
		setCurrentPage(value)
		const nextIndex = (value * USERS_PER_PAGE) - 5
		setUsers(Array.from(DBUsers).splice(nextIndex, USERS_PER_PAGE))
	}


	return (
		<PaginationContext.Provider value={{ users, setUsers, totalPages, currentPage, setCurrentPage, handleChange }}>
			{children}
		</PaginationContext.Provider>
	)
}

export {
	PaginationProvider,
	PaginationContext
}