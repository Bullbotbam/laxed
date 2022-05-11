import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import { styled } from '@mui/material/styles';

import teamALogo from '../assets/logo/teamALogo.jpeg';
import teamBLogo from '../assets/logo/teamBLogo.jpeg';
import teamCLogo from '../assets/logo/teamCLogo.jpeg';
import teamDLogo from '../assets/logo/teamDLogo.jpeg';
import teamELogo from '../assets/logo/teamELogo.jpeg';
import teamFLogo from '../assets/logo/teamFLogo.png';
import { Grid } from '@mui/material';

import avatar1 from '../assets/avatar/avatar1.png';

function generate(element) {
	return [0, 1, 2, 3, 4, 5].map((value) =>
		React.cloneElement(element, {
			key: value,
		})
	);
}

const Demo = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
}));
export default function Teams() {
	const teams = [
		{
			name: 'Team A',
			players: ['Player 1', 'Player 2', 'Player 3'],
			logo: teamALogo,
		},
		{
			name: 'Team B',
			players: ['Player 1', 'Player 2', 'Player 3'],
			logo: teamBLogo,
		},
		{
			name: 'Team C',
			players: ['Player 1', 'Player 2', 'Player 3'],
			logo: teamCLogo,
		},
		{
			name: 'Team D',
			players: ['Player 1', 'Player 2', 'Player 3'],
			logo: teamDLogo,
		},
		{
			name: 'Team E',
			players: ['Player 1', 'Player 2', 'Player 3'],
			logo: teamELogo,
		},
		{
			name: 'Team F',
			players: ['Player 1', 'Player 2', 'Player 3'],
			logo: teamFLogo,
		},
	];
	return (
		<>
			{teams.map((team) => (
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						component="img"
						alt="lacrosse"
						height="140"
						image={team.logo}
					/>

					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{team.name}
						</Typography>
						{/* <Typography variant="body2" color="text.secondary">
							Current Roster: {team.players}
						</Typography> */}

						<Grid container spacing={1}>
							<Grid item xs={12} md={6}>
								<List>
									{generate(
										<ListItem>
											<ListItemAvatar>
												<Avatar
													alt={team.players}
													src="../assets/avatar/avatar1.png"
												></Avatar>
											</ListItemAvatar>
											<ListItemText
												primary="Single-line item"
												secondary={secondary ? 'Secondary text' : null}
											/>
										</ListItem>
									)}
								</List>
							</Grid>
						</Grid>
					</CardContent>

					<CardActions>
						<Button size="small">Join this team</Button>
						<Button size="small">Become a Free Agent</Button>
					</CardActions>
				</Card>
			))}
		</>
	);
}
