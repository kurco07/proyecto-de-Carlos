import { useState } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    InputBase,
    IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export function SearchNavbar() {
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState("");

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        console.log("Realizar búsqueda con: ", searchText);
    };

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    top: "0",
                    width: "100%",
                    zIndex: "1",
                    backgroundColor: "#141E34",
                    color: "#C5DD4A",
                }}
            >
                <Toolbar>
                    <Typography onClick={() => navigate('/homepage')} component={'button'} sx={{ flexGrow: 1, fontWeight: "bold", textAlign: "left" }} variant="h6">
                        Bugzzy
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}> {/* Agrega este Box para distribuir el espacio */}
                        <IconButton color="inherit" onClick={handleSearch}>
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            placeholder="Buscar..."
                            sx={{ ml: 1, color: "inherit" }}
                            value={searchText}
                            onChange={handleSearchChange}
                            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}
