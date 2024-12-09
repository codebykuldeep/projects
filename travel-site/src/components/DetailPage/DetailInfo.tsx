import { Box, Divider, List, ListItem, Stack } from "@mui/material";
import { placeType } from "./DetailModelType";

interface DetailInfoProps {
  place: placeType;
}

const listStyle = {
  py: 0,
  width: "100%",
  maxWidth: '100%',
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

function DetailInfo({ place }: DetailInfoProps) {
  let DetailsJSX: JSX.Element[] = [];
  for (let [key, val] of Object.entries(place)) {
    if (typeof val === "string" && key !== "place_id") {
      let element = (
        <ListItem>
          <h4>{getProperLabelFromKey(key)}</h4> : {val}
        </ListItem>
      );
      DetailsJSX.push(element);
    }
  }

  return (
    <>
      <Stack
        sx={{ width: "50%", minWidth: "400px", maxWidth: "500px" }}
        gap={2}
      >
        <Box component={"h3"}>
          <i className="fa-solid fa-map-pin"></i> <span>{place.formatted}</span>
        </Box>
        <List sx={listStyle}>
          {DetailsJSX.map((item) => (
            <>
              {item}
              <Divider component="li" />
            </>
          ))}
        </List>
      </Stack>
    </>
  );
}

export default DetailInfo;


function getProperLabelFromKey(key:string){
  let label = key.split("_").join(" ");
  let labelArr = label.split('');
  labelArr[0] = labelArr[0].toUpperCase();
  label = labelArr.join('');

  return label;
}
