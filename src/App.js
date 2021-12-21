import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  
  } from "react-router-dom";
  
  import First from "./first";
// import About component
  import Virtual from "./second";

function App() {
  
    return (
      
        <>
        <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={First} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/second" component={Virtual} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          
        </Switch>
      </Router>
        </>
     
    );
  }
  
  export default App;
  