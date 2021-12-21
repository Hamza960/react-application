import { Link } from 'react-router-dom';
import './App.css';


function First() {
  
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
            <div className = "col-md-9 col-6">
              <h4>Events</h4>
            </div>
            <div className = "col-md-3 col-6 ">
            <Link to = "/second">
              <button className="new-event-btn">
              + New Event
              </button>
              </Link>
              
            </div>
          </div>
          <div className="activity-container">
            <div className="col-md-12">
              <h6 className="activity-title">Activities</h6>
            </div>
            <hr/>
            <div className= "row">
              <div className="col-md-4 activities">
                <div className="events d-flex p-4">
                 
                    <img src = "images/events.png" className="img-fluid event-img" alt = ""/>
                 
                  <div>
                    <h6>&nbsp;3<br />&nbsp;<span className="event-text">Events Created</span></h6>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-4 activities">
                <div className="events d-flex p-4">
                 
                    <img src = "images/photo.png" className="img-fluid photo-img" alt = ""/>
                 
                  <div>
                    <h6>&nbsp;18<br />&nbsp;<span className="event-text">Photos Captured</span></h6>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-4 activities">
                <div className="shares d-flex p-4">
                 
                    <img src = "images/share.png" className="img-fluid event-img" alt = ""/>
                 
                  <div>
                    <h6>&nbsp;18<br />&nbsp;<span className="event-text">Shares Collected</span></h6>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class = "table-container mt-3">
            <div className="col-md-5">
            <input class = "form-control" placeholder="Search..." />
            </div>
            <div className="table-responsive">
            <table className="table mt-2">
              <tr className="table-head">
                <td>Name</td>
                <td>Slug</td>
                <td>Event Start Date</td>
                <td>Photos</td>
                <td></td>
                <td></td>
              </tr>
              <tbody>
                <tr>
                  <td>7777777</td>
                  <td>77777test</td>
                  <td>11/29/2021, 2:09:36 PM</td>
                  <td>6</td>
                  <td>
                  <button className="deactivate-btn">
                    <img src = "images/down-arrow-white.png" width = "10" alt = ""/> De-activate
                  </button>
                  </td>
                  <td>
                    <div className="d-flex">
                      <img src = "images/edit.png" className="img-fluid action-img" alt = "" />
                      <img src = "images/view.png" className="img-fluid action-img" alt = ""/>
                      <img src = "images/delete.png" className="img-fluid action-img" alt = ""/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7777777</td>
                  <td>77777test</td>
                  <td>11/29/2021, 2:09:36 PM</td>
                  <td>6</td>
                  <td>
                  <button className="deactivate-btn">
                  <img src = "images/down-arrow-white.png" width = "10  " alt = ""/> De-activate
                  </button>
                  </td>
                  <td>
                  <div className="d-flex">
                      <img src = "images/edit.png" className="img-fluid action-img" alt = "" />
                      <img src = "images/view.png" className="img-fluid action-img" alt = ""/>
                      <img src = "images/delete.png" className="img-fluid action-img" alt = ""/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7777777</td>
                  <td>77777test</td>
                  <td>11/29/2021, 2:09:36 PM</td>
                  <td>6</td>
                  <td>
                  <button className="deactivate-btn">
                  <img src = "images/down-arrow-white.png" width = "10  " alt = ""/> De-activate
                  </button>
                  </td>
                  <td>
                  <div className="d-flex">
                      <img src = "images/edit.png" className="img-fluid action-img" alt = "" />
                      <img src = "images/view.png" className="img-fluid action-img" alt = ""/>
                      <img src = "images/delete.png" className="img-fluid action-img" alt = ""/>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
   
  );
}

export default First;
