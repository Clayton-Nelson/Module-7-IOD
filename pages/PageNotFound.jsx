import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="div">
          Page Not Found
        </Typography>
        <Typography variant="p" component="div">
          What were you looking for? Maybe going back{" "}
          <Link to="/MUI">home </Link>
          will help you find it.
        </Typography>
        <CardActions>
          <button onClick={() => navigate(-1)}>Back</button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default PageNotFound;
