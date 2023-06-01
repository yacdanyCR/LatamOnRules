import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useContext } from 'react';
import { PaginationContext } from '../../Context/PaginationContext';

const PaginationComponent = () => {
	const { totalPages, currentPage, handleChange } = useContext(PaginationContext)
	return (
		<Stack spacing={2} style={{ textAlign: "center" }}>
			<h1>Page:{currentPage}</h1>
			<Pagination
				count={totalPages}
				page={currentPage}
				onChange={handleChange}
				renderItem={(number) => (
					<PaginationItem
						slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
						{...number}
					/>
				)}
			/>
		</Stack>
	)
}

export default PaginationComponent