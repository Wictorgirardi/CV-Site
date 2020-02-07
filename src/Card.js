import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MediaCard from "./CardExp";
import Avatar from "@material-ui/core/Avatar";
import imgagemEscolhida from "./eu.jpg";
import Code from "./code.jpg";
import Guy from "./guy.jpg";
import Study from "./study.jpg";
import Exp from "./exp.jpg";
import More from "./more.jpg";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  margim: {
    marginTop: theme.spacing(5)
  },
  large: {
    margin: theme.spacing(5),
    minWidth: "250px",
    minHeight: "250px"
  },
  background: {
    marginTop: theme.spacing(0),
    backgroundImage: "url(https://i.imgur.com/CTkPK5R.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  sobre: { 
    textAlign: "left",
    padding: theme.spacing(3),
    color: '#3F51B5',
  }, 
  sobre_top: { 
    textAlign: "left",
    paddingLeft: theme.spacing(3),
    color: '#3F51B5'
  }, 
  imagem: { 
    maxWidth: 350, 
    maxHeight: 350,
    paddingTop: theme.spacing(3),
  },
  container: { 
    marginTop: theme.spacing(3),
    textAlign: "center",
    padding: theme.spacing(3),
    maxWidth: "350px",
    maxHeight: '400px',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
  }
}));



export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className={classes.background} align="center" item xs={12}>
          <Avatar
            alt="W"
            src={imgagemEscolhida}
            className={classes.large}
          ></Avatar>
        </Grid>
        <Grid item xs={12} sm={6} style={{backgroundColor: "#C6E5E7"}} align="center">
         <img src={Guy} className={classes.imagem}/>
        </Grid>
        <Grid item xs={12} sm={6} style={{backgroundColor: "#C6E5E7"}}>
        <h2 id="sobre" className={classes.sobre_top}>
           Perfil pessoal
          </h2>
          <h4 id="sobre" className={classes.sobre}>
            Apaixonado por games, música, esporte e tecnologia, mantenho-me
            sempre informado sobre as novidades da atualidade. Apesar de ter
            habilidade e preferência por trabalhar em grupos, sou resiliente e
            estou sempre disposto a aprender coisas novas e ajudar as pessoas ao
            meu redor.
          </h4>
        </Grid>
        <Grid item xs={8} sm={4} align="center">
        <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Experiencias"
          height="170"
          image={Exp}
          title="Experiencias"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Experiencias
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Saiba mais sobre projetos e locais em que eu já trabalhei e o que eles agregaram na minha carreira profissional.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Fab size="large" color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={8} sm={4} align="center">
        <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Experiencias"
          height="170"
          image={Study}
          title="Experiencias"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Histórico Estudantil
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Saiba mais sobre projetos e locais em que eu já trabalhei e o que eles agregaram na minha carreira profissional.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions align='right'>
      <Fab size="large" color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={8} sm={4} align="center">
        <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Experiencias"
          height="170"
          image={More}
          title="Experiencias"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mais sobre
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Saiba mais sobre projetos e locais em que eu já trabalhei e o que eles agregaram na minha carreira profissional.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions textAlign="right">
      <Fab size="large" color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    </div>
  );
}
