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
		<MuiCard sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 140 }}
				image={user.image}
				title={user.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">

				</Typography>
				<Typography variant="body2" color="text.secondary">
					{user.summary}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="large">
					<GitHub fontSize='large' />
				</Button>
				<Button size="large">
					<LinkedIn fontSize='large' />
				</Button>
			</CardActions>
		</MuiCard>
	)
}

export default Card