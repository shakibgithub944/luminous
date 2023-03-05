import './App.css';
import LandingPage from './Components/Home/LandingPage';
import Nav from './Components/Home/Navber/Nav';
import Profile from './Components/Home/Profile';
import SignIn from './Components/Home/SignIn';
import SignUp from './Components/Home/SignUp/SignUp';
import Step1 from './Components/Home/SignUp/Step1';
import Step2 from './Components/Home/SignUp/Step2'
import Step3 from './Components/Home/SignUp/Step3';
import Step4 from './Components/Home/SignUp/Step4';
import Step5 from './Components/Home/SignUp/Step5';
import Step6 from './Components/Home/SignUp/Step6';


function App() {
  return (
    <div className="">
      <LandingPage/>
      <SignIn/>
      <SignUp />
      <Step1 />
      <Step2/>
      <Step3/>
      <Step4/>
      <Step5/>
      <Step6/>
      <Nav/>
      {/* <Profile/> */}
    </div>
  );
}

export default App;
