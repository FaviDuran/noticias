import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export default function RecipeReviewCard({ coments }) {
  return (
    <>
      {coments
        ? coments.map((coment) => (
            <Card>
              <CardHeader
                style={{ textAlign: "left" }}
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {coment.Autor.charAt(0)}
                  </Avatar>
                }
                title={coment.Autor}
                subheader={coment.Fecha}
              />
              <CardContent style={{ textAlign: "left" }}>
                <Typography variant="body2" color="text.secondary">
                  {coment.comentario}
                </Typography>
              </CardContent>
            </Card>
          ))
        : null}
    </>
  );
}
