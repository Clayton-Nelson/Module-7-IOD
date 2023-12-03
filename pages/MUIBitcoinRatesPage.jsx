import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";
import BitcoinRates3 from "../components/BitcoinRates3";

export default function MUIBitcoinRatesPage() {
  return (
    <Card>
      <CardContent>
      <Typography variant="h4" component="div">
          Bitcoin Rates
        </Typography>
        <BitcoinRates3/>
      </CardContent>
    </Card>
  );
}
