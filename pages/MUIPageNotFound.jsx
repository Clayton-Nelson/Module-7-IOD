import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MUIPageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="PageNotFound">
      <h1>Page Not Found</h1>
      <p>
        What were you looking for? Maybe going back <Link to="/">home </Link> 
        will help you find it.
      </p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}