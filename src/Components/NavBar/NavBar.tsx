import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { GitHub } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '../Switch/Switch';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));


const NavBar = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static"
				className={`${theme.themeSelected}`}>
				<Toolbar
					style=
					{{
						justifyContent: "space-around",
					}}
				>
					<IconButton
					>
						<Switch />
					</IconButton>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
						/>
					</Search>
					<Typography
					>
						<IconButton>
							<GitHub fontSize='large' />
						</IconButton>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default NavBar