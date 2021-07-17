import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import "./NewsArticle.css"
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    paddingBottom:0,
    paddingTop:2,
    margin:0,
    //lineHeight: "40%",
    fontWeight: "400",
  },
  content: {
    paddingTop:0,
    paddingBottom:0,},
  pos: {
    margin: 0,
    fontSize:12,
  },
  image:{
    maxHeight:130,
    width:200,
    backgroundColor: "white",
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1.5px 2.5px 0 rgba(0, 0, 0, 0.1)',
    borderRadius:"5%",
    paddingBottom:0,
  },
  total: {
    padding:0,
    paddingTop: 2,
    borderRadius:2,
    marginTop:4,
  },

});

function NewsArticle({ data }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Grid xs={12}>
        <Card className={classes.total}>
         <a href={data.url} target="_blank" rel="noreferrer"> <CardHeader className={classes.title}
            title={data.title}         
            titleTypographyProps={{variant:'h7' }}
          /></a>
          <CardContent className={classes.content}>
            <Grid item container spacing={1} alignItems="center"
              justifyContent="space-between">
                
              <Grid item sm={9} style={{ marginTop: 10,display: "flex"}} direction="column">
                <Typography className={classes.pos}>
                  {data.author}{bull} {data.publishedAt}
                </Typography>
                <Typography className="news__desc">{data.description}</Typography>
              </Grid>

              <Grid item sm={3} style={{ display: "flex", margin:0 ,textAlign:"center",marginLeft:"auto", marginRight:"auto"}}>
                <img className={classes.image} src={data.urlToImage} alt=""/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
  );
}

export default NewsArticle;