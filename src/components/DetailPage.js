import React from 'react';
import '../Index.css';
/* eslint-disable */
class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: null,
    };
  }

  componentDidMount() {
    fetch('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=e517e7bdf90a7bed784312f134d9eab9')
      .then((resp) => resp.json())
      .then((json) => this.setState({ stock: json }));
  }

  render() {
    const { stock } = this.state;
    return (
      <div className="container">
        {stock !== null && stock.length > 0
          && (
          <div>
            {stock.map((doss) => (
              <div>
                <h5 className="d-flex">Company Name: <p className="mx-3 blue">{doss.companyName}</p></h5>
                <h5>Logo: <img src={doss.image}></img></h5>
                <p>Symbol:  {doss.symbol}</p>
                <p>Price: {doss.price}</p>
                <p>Currency {doss.currency}</p>
                <p>Exchange: {doss.exchange}</p>
                <p>Exchange Shortname: {doss.exchange}</p>
                <p>Volume Average: {doss.volAvg}</p>
                <p>Market Capitalization: {doss.mktCap}</p>
                <p>Range: {doss.range}</p>
                <p>Changes: {doss.changes}</p>
                <p>Industry: {doss.industry}</p>
                <p>Website: {doss.website}</p>
                <p>Description: {doss.description}</p>
                <p>CEO: {doss.ceo}</p>
                <p>Sector: {doss.sector}</p>
                <p>Country: {doss.country}</p>
                <p>No of Employees: {doss.fullTimeEmployees}</p>
                <p>Phone: {doss.phone}</p>
                <p>Address: {doss.address}</p>
                <p>City: {doss.city}</p>
                <p>State: {doss.state}</p>
                <p>IPO Date: {doss.ipoDate}</p>
              </div>
              
            ))}
          </div>
          )}
      </div>
    );
  }
}

export default DetailPage;
