import React from "react";
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import WelcomeContainer from "./components/welcome/welcomeContainer";
import ParamsContainer from './components/tableParamaters/parametersContainer';
import MachineContainer from "./components/machine/machineContainer";
import StatisticContainer from "./components/statistic/statisticContainer";
import LibraryContainer from "./components/library/libraryContainer";
import AccidentsContainer from "./components/library/accident/accidentContainer";
import AddAccidentsContainer from "./components/library/addAccident/addAccidentContainer";

const App = (props) => {
  return (
      <Switch>
          <Route exact path='/' render={() => <Redirect to={'/parameters'} />}/>
          <Route path='/machine/:number' component={MachineContainer}  />
          <Route path='/welcome' component={WelcomeContainer} />
          <Route path='/parameters' component={ParamsContainer} />
          <Route path='/statistic' component={StatisticContainer} />
          <Route path='/library' component={LibraryContainer} />
          <Route path='/accidents' component={AccidentsContainer} />
          <Route path='/addaccident' component={AddAccidentsContainer} />
      </Switch>
  );

}

export default App;
