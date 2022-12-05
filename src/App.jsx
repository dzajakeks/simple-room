import React, { Fragment } from 'react';
import Loader from './components/main-page/loader/Loader';
import { Route, Routes,} from "react-router-dom";
import GamesPage from './components/main-page/GamesPage';

function App() {
  return (
    <Fragment>
      <Routes>
          <Route path='/simple-room' index element={<Loader />}/>
          <Route  path='games' element={<GamesPage />} />
      </Routes>
    </Fragment>
    )
}

export default App;
