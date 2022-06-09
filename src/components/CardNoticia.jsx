import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import noticiasDumy from "../Helpers/NoticiasDumy";
import CardComentarios from "./CardComentario";

export default function OutlinedCard() {
  return (
    <>
      {noticiasDumy.map((item) => (
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14, textAlign: "left" }}
              color="text.secondary"
              gutterBottom
            >
              {item.Autor}
            </Typography>
            <br />
            <Typography variant="body2">
              {item.noti}
              <br />
            </Typography>
            <Typography
              sx={{ fontSize: 14, textAlign: "left" }}
              color="text.secondary"
              gutterBottom
            >
              {item.Fecha}
            </Typography>
          </CardContent>
          <CardActions>
            <TextField
              style={{ padding: "10px" }}
              fullWidth
              label="Escribe un comentario ..."
              id="fullWidth"
            />
            <Button
              sx={{ fontSize: 14 }}
              size="big"
              color="primary"
              variant="outlined"
            >
              Enviar
            </Button>
          </CardActions>
          <CardComentarios coments={item.Comentarios} />
        </Card>
      ))}
      <br />
    </>
  );
}