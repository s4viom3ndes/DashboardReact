import {Box, IconButton, iconButton, useTheme} from "@mui/material";
import {useContext} from "react";
import {ColorModeContext,tokens} from "../../theme";
import InputBase from "@mui/material"
import { LightModeOutlined } from "@mui/icons-material";

import LigthModeOutlinedIcon from "@mui/icons-material/ligthModeOutlined";
import DarkhModeOutlinedIcon from "@mui/icons-material/ligthModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/ligthModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/ligthModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/ligthModeOutlined";
import SearchIcon from "@mui/icons-material/ligthModeOutlined";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display = "flex" justfyContent ="space-between" p = {2}> 
        {/*Search Bar*/}
        <Box //campo de input
            display = "flex" 
            backgroundColor = {colors.primary[400]} 
            borderRadius = "3px"
        >

            <InputBase sx = {{ml: 2, flex : 1}} placeholder = "Search" />
            <IconButton type = "button" sx = {{p: 1}}>
                <SearchIcon/>  
            </IconButton>
        </Box>

        {/*Icones de busca*/}
        <Box displa = "flex">
            <IconButton onClick = {colorMode.toggleColorMode}>
                {
                theme.palette.mode === "dark" ?(<DarkModeOutlinedIconModeOutlinedIcon/>

                ):(<LigthModeOutlinedIcon/>)
                }
                
            </IconButton>
        </Box>
        <Box displa = "flex">
            <IconButton>
              <NotificationsOutlinedIcon/>
            </IconButton>
        </Box>
        <Box displa = "flex">
            <IconButton>
                <NotificationsOutlinedIcon/>
            </IconButton>
        </Box>
        <Box displa = "flex">
            <IconButton>
             <NotificationsOutlinedIcon/>
            </IconButton>
        </Box>
    </Box>
    )
    
};
export default Topbar;