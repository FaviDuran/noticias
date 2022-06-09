import React, {Suspense,} from 'react';
import { Switch, Route } from "react-router-dom";
import {Box, Container,} from '@mui/material';
import { getRouter } from "../../router";
import AppBar from '../../components/AppBar'
import '../../Style.css';

function Home() {
  const router = getRouter();

  return (
    <div className="App">
        <div>
        <AppBar />
        </div>
         
      <main>
        <Box sx={{ pt: 3, pb: 6 }}></Box>
        {/** Container of the main parts of the home page*/}
        <Container >
          <Suspense fallback={"Cargando..."}>
            <Switch>
              {router.screens.map((item, idx) => {
                return (
                  <Route
                    key={`component${idx}`}
                    exact
                    path={item.url}
                    name={item.name}
                    render={(props) => <item.component {...props} />}
                  />
                );
              })}
            </Switch>
          </Suspense>
        </Container>
      </main>
      {/* Footer */}
      <Box align="center">© 2022 Noticias</Box>
    </div>
  );
}

export default Home;