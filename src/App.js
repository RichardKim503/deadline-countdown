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
DONEmax number and checking
DONEif the time is before today, add error
bug with midnight and noon
0 for single digits
add original starting date
DONEnumeric values only

create new button
delete button
unamed deadline
create 4x3 deadlines
title checking for 100 or less

error modal
server side and use session

navbar should have login in out feature

database schema:
exist?
title
time in milliseconds
*/
