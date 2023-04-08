import './App.css';
import Body from './components/Body';
import Main from './components/Main';
import Navbar2 from './components/Navbar2';
// import Navbar from './components/Navbar';
import TabBar from './components/TabBar';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      <Main />
      <TabBar />
      <Body />
    </>
  );
}

export default App;
