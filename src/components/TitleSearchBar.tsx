import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import React from 'react';

const TitleSearchBar: React.FC = () => {
    return(
        <React.Fragment>
        <Stack
        justifyContent="center"
        alignItems="center"
        >
        <Typography
        sx={{mt: 4}}
        variant="h3" 
        color="white">
            The Weather Channel
        </Typography>
        <TextField 
        sx={{bgcolor: "#fff",width:'70%' ,borderRadius: 8,mt: 4, mb: 6, "& fieldset": { border: 'none' }}}
        placeholder="City Name"
        InputProps={{
            endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
            )
          }}
        />
        {/* <TextField
        sx={{bgcolor: "#fff", borderRadius: 2}}
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        /> */}
        </Stack>
        </React.Fragment>
    )
}

export default TitleSearchBar;