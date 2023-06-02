import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DBUserProps } from '../../Interface/Interface';
import { GitHub, LinkedIn } from '@mui/icons-material';

interface Props {
	user: DBUserProps
}

const Card = ({ user }: Props) => {
	return (
		<MuiCard sx={{ maxWidth: 345, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
			{user.image ? (
				<CardMedia
					sx={{ height: 200, width: 250, margin: "1rem" }}
					image={user.image || ""}
					title={user.name}
				/>
			) :
				(
					<h1>Loading...</h1>
				)
			}

			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{user.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{user.summary}
				</Typography>
			</CardContent>
			<CardActions
				style=
				{{
					display: "flex",
					justifyContent: "space-around"
				}}
			>
				<Button size="large" href={user.githubLink}>
					<GitHub fontSize='large' />
				</Button>
				<Button size="large" href={user.linkeldn}>
					<LinkedIn fontSize='large' />
				</Button>
			</CardActions>
		</MuiCard>
	)
}

export default Card