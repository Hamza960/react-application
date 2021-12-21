import React, {useState} from "react";
import './App.css';


function App() {
  const [formValues, setFormValue] = useState({
    startdate: "",
    enddate: "",
  });

  
  const handleChange = e => {
       
    const { name, value } = e.currentTarget
    if(name == "startdate"){
      var d = new Date(value);

var seven_date = d.getDate()+7;
var curr_month = d.getMonth();

var curr_year = d.getFullYear();

var weekDate =(   curr_year +  "-" + curr_month +"-" + seven_date ) ;
      setFormValue(prevState => ({
        ...prevState,
        'startdate': value, 
        'enddate': weekDate
    }))
    }
    setFormValue(prevState => ({
        ...prevState,
        [name]: value
    }))
    

   
    
} 


  
  return (
    
      <>
      <div className = "container mt-3">
      <div className = "row">
        <div className = "col-md-3">
          <div className = "logo">
              <img src = "images/logo.png" className="img-fluid" alt = ""/>
          </div>
          <div className = "mt-5">
            <span className = "side-links"><img src = "images/selfie.png" className="img-fluid" alt = ""/>&nbsp;&nbsp;SELFIE BOOTH&nbsp;&nbsp;<img src = "images/down-arrow-blue.png" alt = ""/></span>
          </div>
          <div className = "mt-3">
            <span className = "side-links"><img src = "images/gallery.png" className="img-fluid" alt = "" />&nbsp;&nbsp;&nbsp;GALLERY</span>
          </div>
          <div className = "mt-3">
            <span className = "side-links"><img src = "images/templates.png" className="img-fluid" alt = ""/>&nbsp;&nbsp;&nbsp;TEMPLATES</span>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row mt-3">
            <div className="col-md-9 col-6">
              <h6>Dashboard - Booth - All</h6>
            </div>
            <div className = "col-md-3 col-6 d-flex">
              <h6>Is77@biz.com &nbsp; </h6>
              <img src = "images/power.png" width = "20" height = "20" alt = ""/>
            </div>
          </div>
          <div className = "row mt-5">
            <div className = "col-md-3">
              <h4>Virtual Booth</h4>
            </div>
            <div className="col-md-5">
            <div id="progress">
                <div id="progress-bar"></div>
                <ul id="progress-num">
                    <li className="step active"></li>
                    <li className="step"></li>
                    <li className="step"></li>
                    <li className="step"></li>
                </ul>
                </div>
            </div>
            <div className = "col-md-2 col-6">
            
              <button className="goback-btn">
              Go Back
              </button>
              
            </div>
            <div className = "col-md-2 col-6">
            
              <button className="continue-btn">
              Continue
              </button>
              
            </div>
          </div>
          <div className="activity-container p-4">
            <div className="col-md-3">
              <h6>General</h6>
            </div>
           <form className="form-group">
            <div className= "row">
              <div className="col-md-12 mt-4">
                  <label>Event Name</label>
                    <input className="form-control" type = "text"/>
              </div>
              <div className="col-md-4 mt-4">
              <label>Start Date</label>
                    <input className="form-control"
                     type = "date" name = "startdate"
                     onChange={handleChange}
                     value = {formValues.startdate}
       
       
                      />
              </div>
              <div className="col-md-2 mt-4">
              <label>Start Time</label>
                    <input className="form-control" type = "time"/>
              </div>
              <div className="col-md-4 mt-4">
              <label>End Date</label>
                    <input className="form-control" type = "date" 
                    name = "enddate" 
                    
                    value = {formValues.enddate}
                    onChange={handleChange}
      
      
                    />
              </div>
              <div className="col-md-2 mt-4">
              <label>End Time</label>
                    <input className="form-control" type = "time" />
              </div>
            </div>
            </form>
          </div>
         
        </div>
      </div>
      </div>
      </>
   
  );
}





export default App;
