import React from 'react';

class Entercust extends React.Component {
  render() {
    return(
      <div className="main-container">
        <div className="menu-container-info">
          <div className="enter-cust row" action="index.html" method="post">
            <div className="enterForm-cust col-sm-6">
              <div className="form-group">
               <label htmlFor="sel1">Existing Customer:</label>
               <select className="form-control" id="sel1">
                 <option>New</option>
                 <option>Cust 1</option>
                 <option>Cust 2</option>
                 <option>Cust 3</option>
               </select>
              </div>
              <div className="form-group">
                <label htmlFor="usr">Customer Name:</label>
                <input type="text" className="form-control" id="usr" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Customer Phone:</label>
                <input type="tel" className="form-control" />
              </div>
            </div>
            <div className="formEnter-dog col-sm-6">
              <div className="enterForm-dog">
              <div className="form-group">
                <label htmlFor="phone">Dog Name:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Dog Breed:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Dog Size:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Dog Age:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="radio">
                Special Needs?<br />
                <label><input type="radio" name="optradio" />Yes</label>
                <label><input type="radio" name="optradio" />No</label>
              </div>
              <div className="radio">
                Grommed Before?<br />
                <label><input type="radio" name="optradio2" />Yes</label>
                <label><input type="radio" name="optradio2" />No</label>
              </div>
            </div>
            <button type="submit" className="btn btn-default">Save</button>
            <input type="reset" value="Reset" className="btn btn-default" />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Entercust;
