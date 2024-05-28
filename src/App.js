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
i should add pm and am
max number and checking
title checking for 100 or less
modal
server side and use session

navbar should have login in out feature

database schema:
exist?
title
time in milliseconds
*/
