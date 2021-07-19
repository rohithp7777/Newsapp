import React, { useEffect,useState } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {AppBar, Grid, Toolbar } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0.5),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const [category, setCategory] = React.useState('general');
  const [country, setCountry] = React.useState('in');
  const [refreshKey, setRefreshKey] = useState(0);

  const classes = useStyles();
  const handleCategory = (event) => {
    setCategory(event.target.value);
    console.log(category)
    setRefreshKey(oldKey => oldKey +1)
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
    setRefreshKey(oldKey => oldKey +1)
  };
  const apiKey = "API";
  let linkToApi = "https://newsapi.org/v2/top-headlines?pageSize=100&category="
  
  linkToApi = linkToApi.concat(category)
  linkToApi = linkToApi.concat("&country="+country)
  linkToApi = linkToApi.concat("&apiKey=")
  linkToApi = linkToApi.concat(apiKey)
  
  useEffect(() => {
    axios
      .get(linkToApi)
      .then((response) => props.onchange(response.data))
      .catch((error) => console.log(error));
  }, [refreshKey]);
  
  return (
    <>
    <AppBar position="static" style={{ margin: 0 , padding:0}}>
        <Toolbar  style={{ margin: 0 , padding:0,paddingLeft:20}}>
          <Grid container>
          <Grid item sm={2} md={3} lg={5}/>
            <h3>
                Newsapp
            </h3>
            <Grid item sm={2} md={4}/>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleCategory}
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"business"}>Business</MenuItem>
          <MenuItem value={"entertainment"}>Entertainment</MenuItem>
          <MenuItem value={"general"}>General</MenuItem>
          <MenuItem value={"health"}>Health</MenuItem>
          <MenuItem value={"science"}>Science</MenuItem>
          <MenuItem value={"sports"}>Sports</MenuItem>
          <MenuItem value={"technology"}>Technology</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleCountry}
          label="Country"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"in"}>India</MenuItem>
          <MenuItem value={"us"}>USA</MenuItem>
          <MenuItem value={"ae"}>UAE</MenuItem>
          <MenuItem value={"br"}>Brazil</MenuItem>
          <MenuItem value={"ca"}>Canada</MenuItem>
          <MenuItem value={"cn"}>China</MenuItem>
          <MenuItem value={"de"}>Germany</MenuItem>
          <MenuItem value={"jp"}>Japan</MenuItem>
          <MenuItem value={"ru"}>Russia</MenuItem>
          <MenuItem value={"gb"}>UK</MenuItem>
          <MenuItem value={"no"}>Norway</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Toolbar>
    </AppBar>
    </>
  );
}
