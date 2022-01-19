import {
    Box,
    Card,
    CardActionArea,
    Typography,
    Button,
    CardMedia,
    CardContent,
    CardActions,
    makeStyles,
  } from "@material-ui/core";
  
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
      width:230
    },
    align:{
        margin: "2rem",
        boxShadow: '0px -1px 15px 0px rgba(0,0,0,0.75)'
    }
  });
  
  const Cards = ({firstName, lastName, email, photo}) => {
    const classes = useStyles();
    return (
      <Box className={classes.align}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={photo}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {firstName} {lastName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {email}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" color="primary" >Click Here View Profile</Button>
          </CardActions>
        </Card>
      </Box>
    );
  };
  
  export default Cards;