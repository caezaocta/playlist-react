import AddIcon from "@mui/icons-material/Add";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { IconButton, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Item } from "../../module/tracks";
import { useTheme } from "@mui/material/styles";

interface CardProps {
  track: Item;
  onTrackItemClick(track: Item): void;
  selectedList: boolean;
}

const CardItem = ({ track, onTrackItemClick, selectedList }: CardProps) => {
  const { album, name, artists, isSelected } = track;
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        minWidth: 200,
        minHeight: 150,
        justifyContent: "space-between",
      }}
      variant="outlined"
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {artists[0].name}
          </Typography>
          <IconButton
            sx={{ marginLeft: -2 }}
            onClick={() => onTrackItemClick(track)}
            size="large"
          >
            {isSelected || selectedList ? (
              <Button variant="contained">Selected</Button>
            ) : (
              <Button variant="outlined">Select</Button>
            )}
          </IconButton>
        </CardContent>
      </Box>
      <CardMedia
        image={album.images[0].url}
        alt=""
        sx={{ width: 151, height: 151 }}
        component="img"
      />
    </Card>
  );
};

export default CardItem;
