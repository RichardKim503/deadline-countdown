import logo from './logo.svg';
import './App.css';
import DeadlineBox from './Client/DeadlineBox';
import MainTable from './Client/MainTable';
import Header from './Client/Header';

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
max number and checking
DONEif the time is before today, add error
0 for single digits
numeric values only
title checking for 100 or less

error modal
server side and use session

navbar should have login in out feature

database schema:
exist?
title
time in milliseconds
*/
