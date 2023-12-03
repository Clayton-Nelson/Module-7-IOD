import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import Emoji from "../components/Emoji";

export default function MUIHomepage() {
  return (
    <Card>
      <CardContent>
      <Typography variant="h4" component="div">
          Home
        </Typography>
        <Emoji />
      </CardContent>
    </Card>
  );
}
