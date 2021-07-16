import NewsArticle from "./NewsArticle";
import React, { useState } from "react";
import Header from "../Header";
import SimpleSelect from "../Select";
import { Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

function News() {
  const [data, setData] = useState();
  
  const onchange = (value) => {
    setData(value);
    console.log(value);
  }

  return (
    <>
      <Header/>
      <SimpleSelect value={data} onchange={(e) => { onchange(e)} }/>
      {data
        ? data.articles.map((news) => (
          <Grid container spacing={2}>
            <Grid item xs={false} sm={2} />
            <Grid container item sm={8} >
              <NewsArticle data={news} key={news.url} />
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
          ))
        : <Box pt={0.5}>
          <Grid container >
            <Grid item xs={false} sm={2} />
            <Grid container item sm={8} >
              <Skeleton width="100%" height="200px"/>
              <Skeleton width="100%" height="200px" />
              <Skeleton width="100%" height="200px" />
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Box>}
    </>
  );
}

export default News;