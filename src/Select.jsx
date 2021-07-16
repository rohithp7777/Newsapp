import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const [category, setCategory] = React.useState('');
  const [country, setCountry] = React.useState('');

  const classes = useStyles();
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  const apiKey = "d3a68d3a93a54948a016a1553bc4d20c";
  //const { country, category } = React.useContext(SetVariables);


  useEffect(() => {
    axios
      .get(
        //`https://newsapi.org/v2/everything?&country=${newcountry}&category=${newcategory}&from=2021-07-05&sortBy=publishedAt&apiKey=${apiKey}`
        `https://newsapi.org/v2/top-headlines?category=business&apiKey=${apiKey}`
        
      )
      .then((response) => props.onchange(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleCountry}
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
          onChange={handleCategory}
          label="Country"
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
        <InputLabel id="demo-simple-select-outlined-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleCategory}
          label="Sort by"
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
    </div>
  );
}
