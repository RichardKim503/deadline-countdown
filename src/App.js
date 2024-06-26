import logo from './logo.svg';
import './App.css';
import DeadlineBox from './Client/DeadlineBox';
import MainTable from './Client/MainTable';
import Header from './Client/Header';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <MainTable />
      {/* <DeadlineBox /> */}
    </div>
  );
}

export default App;

// todo
/*
DONEi should add pm and am
DONEmax number and checking
DONEif the time is before today, add error
DONEnumeric values only
DONEbug with midnight and noon

button to show original starting dates
add original starting date
when editing, add original starting date to input form
error modal

css:
-match the diagram
  -create new
  -deadline counter
  -edit deadline
0 for single digits

create new button
delete button
unamed deadline
create 4x3 deadlines
title checking for 100 or less

server side and use session
navbar should have login in out feature

database schema:
exist?
title
time in milliseconds
*/
