import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  styled,
  Typography,
} from '@mui/material';

import banner from '../assets/images/CustomerBox banner.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ py: 8 }}
      >
        <Grid
          item
          xs={12}
          alignItems="center"
          display="flex"
          justifyContent="center"
        >
          <Card width={{ md: 400 }}>
            <CardMedia
              component="img"
              height="160"
              image={banner}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Values
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unique Selling Proposition
                https://www.crazyegg.com/blog/homepage-design/
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          alignItems="center"
          display="flex"
          justifyContent="space-evenly"
          xs={4}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={banner}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                First Question
              </Typography>
              <Typography variant="body2" color="text.secondary">
                What do we absolutely need on our homepage?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          alignItems="center"
          display="flex"
          justifyContent="space-evenly"
          xs={4}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={banner}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Second Question
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Who is our target audience and what will they expect?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          alignItems="center"
          display="flex"
          justifyContent="space-evenly"
          xs={4}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={banner}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Third Question
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Which elements take priority?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          alignItems="center"
          display="flex"
          justifyContent="space-evenly"
          xs={4}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={banner}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                First Question
              </Typography>
              <Typography variant="body2" color="text.secondary">
                What do we absolutely need on our homepage?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          alignItems="center"
          display="flex"
          justifyContent="space-evenly"
          xs={4}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={banner}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Second Question
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Who is our target audience and what will they expect?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          alignItems="center"
          display="flex"
          justifyContent="space-evenly"
          xs={4}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={banner}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Third Question
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Which elements take priority?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
