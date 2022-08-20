import React, { useEffect, useState } from "react";
import { matchSorter } from "match-sorter";
import "./App.css";
import axios from "axios";
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    InputBase,
    Paper as MuiPaper,
    styled,
    SvgIcon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Paper = styled(MuiPaper)(({ theme }) => ({
    position: "sticky",
    top: 80,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    width: "100%",
}));

const CanvasComponent = styled(Box)(({ theme }) => ({
    fontSize: 210,
    marginTop: theme.spacing(2),
    color: theme.palette.text.primary,
    backgroundSize: "30px 30px",
    backgroundColor: "transparent",
    backgroundPosition: "0 0, 0 15px, 15px -15px, -15px 0",
    backgroundImage:
        theme.palette.mode === "light"
            ? "linear-gradient(45deg, #e6e6e6 25%, transparent 25%), linear-gradient(-45deg, #e6e6e6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e6e6e6 75%), linear-gradient(-45deg, transparent 75%, #e6e6e6 75%)"
            : "linear-gradient(45deg, #595959 25%, transparent 25%), linear-gradient(-45deg, #595959 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #595959 75%), linear-gradient(-45deg, transparent 75%, #595959 75%)",
}));

type Icon = { body: string; name: string };

const StyledIcon = styled("span")(({ theme }) => ({
    display: "inline-flex",
    flexDirection: "column",
    color: theme.palette.text.secondary,
    margin: "0 4px",
    "& > div": {
        display: "flex",
    },
    "& > div > *": {
        flexGrow: 1,
        fontSize: ".6rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "center",
        width: 0,
    },
}));

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
    boxSizing: "content-box",
    cursor: "pointer",
    border: "1px solid transparent",
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow"], {
        duration: theme.transitions.duration.shortest,
    }),
    padding: theme.spacing(2),
    margin: theme.spacing(0.5, 0),
    "&:hover": {
        border: "1px solid #646cff",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
    },
}));

const StyledButton = styled("button")``;

const Input = styled(InputBase)({
    marginLeft: 8,
    flex: 1,
});

export default function App() {
    const [icons, setIcons] = useState<Icon[]>([]);
    const [results, setResults] = useState<Icon[]>([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        const res = matchSorter(icons, query, { keys: ["name"] });
        setResults(res);
    }, [query, icons]);
    useEffect(() => {
        axios.get("http://localhost:3000/").then((response) => {
            setIcons(response.data.icons);
        });
    }, []);

    const onDownload = async () => {
        // axios.get("http://localhost:3000/download").then((response) => {
        //     setIcons(response.data.icons);
        // });
    };
    const [selectedIcon, setSelectIcon] = useState<Icon | null>(null);

    return (
        <Grid container className={"root"}>
            <Grid item xs={12}>
                <MuiPaper className="App">
                    <div className={"search"}>
                        <Paper>
                            <IconButton
                                sx={{ padding: "10px" }}
                                aria-label="search"
                            >
                                <SearchIcon />
                            </IconButton>
                            <Input
                                autoFocus
                                value={query}
                                onChange={(event) =>
                                    setQuery(event.target.value)
                                }
                                placeholder="Search icons…"
                                inputProps={{ "aria-label": "search icons" }}
                            />
                        </Paper>
                        <div className={"total"}>
                            {results.length} matching result
                        </div>
                    </div>
                    <div className={"icons"}>
                        {results.map((item) => (
                            <div className={"icon"} key={item.name}>
                                <StyledButton
                                    style={{ display: "flex" }}
                                    onClick={() => setSelectIcon(item)}
                                >
                                    <StyledIcon>
                                        <StyledSvgIcon
                                            fontSize="large"
                                            tabIndex={-1}
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.body,
                                                }}
                                            />
                                        </StyledSvgIcon>
                                        <div>
                                            <div>{item.name}</div>
                                        </div>
                                    </StyledIcon>
                                </StyledButton>
                            </div>
                        ))}
                    </div>
                </MuiPaper>
                <Dialog
                    fullWidth
                    maxWidth="sm"
                    open={!!selectedIcon}
                    onClose={() => setSelectIcon(null)}
                >
                    <DialogTitle>{selectedIcon?.name}</DialogTitle>
                    <DialogContent>
                        <Grid container justifyContent="center">
                            <CanvasComponent>
                                <svg
                                    viewBox="0 0 24 24"
                                    dangerouslySetInnerHTML={{
                                        __html: selectedIcon?.body || "",
                                    }}
                                />
                            </CanvasComponent>
                        </Grid>
                    </DialogContent>
                    <DialogActions />
                </Dialog>
            </Grid>
        </Grid>
    );
}
