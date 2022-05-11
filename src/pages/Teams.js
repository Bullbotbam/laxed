import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt="lacrosse"
				height="140"
				image="src/assets/cover/lacrosse.png"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Lacrosse Teams
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Lacrosse is a team sport played with a lacrosse stick and a lacrosse
					ball. It is the oldest organized sport in North America, with its
					origins in indigenous Canada as early as the 17th century.
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Join this team</Button>
				<Button size="small">Become a Free Agent</Button>
			</CardActions>
		</Card>
	);
}
