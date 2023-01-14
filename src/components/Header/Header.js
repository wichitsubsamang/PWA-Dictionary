import React from "react";
import "./Header.css";
import { TextField, MenuItem } from "@mui/material";
import categories from "../../data/category";
// import { debounce } from "lodash";

const Header = ({ category, setCategory, word, setWord }) => {

  return (
    
    <div className="header">
      <div className="leftbox">
      <div className="inputs">
          <TextField
            sx={{border: 'none',"& fieldset": { border: 'none' },}}
            select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select"
          >
            <MenuItem >English</MenuItem>
            {categories.map((option) => (
              <MenuItem  key={option.label} value={option.label}>
                {option.value} 
              </MenuItem>
            ))}
          </TextField>
      </div>  
      </div>
      
      <div className="rightbox">          
      <TextField
            sx={{border: 'none',"& fieldset": { border: 'none' },}}
            className="search"
            id="filled-basic"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            label="Search a Word"
          />
      </div>
    </div>
  );
};

export default Header;
