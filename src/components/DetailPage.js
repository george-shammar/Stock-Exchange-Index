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
              <div className="border rounded-3 px-5 py-5 mb-5">
                <h5 className="d-flex">
                  Company Name:
                  <p className="mx-3 blue">{doss.companyName}</p>
                </h5>
                <h5>
                  Logo:
                  <img alt="" src={doss.image} />
                </h5>
                <h5 className="d-flex">
                  Symbol:
                  <p className="mx-3 blue">{doss.symbol}</p>
                </h5>
                <h5 className="d-flex">
                  Price:
                  <p className="mx-3 blue">{doss.price}</p>
                </h5>
                <h5 className="d-flex">
                  Currency:
                  <p className="mx-3 blue">{doss.currency}</p>
                </h5>
                <h5 className="d-flex">
                  Exchange:
                  <p className="mx-3 blue">{doss.exchange}</p>
                </h5>
                <h5 className="d-flex">
                  Exchange Shortname:
                  <p className="mx-3 blue">{doss.exchangeShortName}</p>
                </h5>
                <h5 className="d-flex">
                  Volume Average:
                  <p className="mx-3 blue">{doss.volAvg}</p>
                </h5>
                <h5 className="d-flex">
                  Market Capitalization:
                  <p className="mx-3 blue">{doss.mktCap}</p>
                </h5>
                <h5 className="d-flex">
                  Range:
                  <p className="mx-3 blue">{doss.range}</p>
                </h5>
                <h5 className="d-flex">
                  Changes:
                  <p className="mx-3 blue">{doss.changes}</p>
                </h5>
                <h5 className="d-flex">
                  Industry:
                  <p className="mx-3 blue">{doss.industry}</p>
                </h5>
                <h5 className="d-flex">
                  Website:
                  <p className="mx-3 blue">{doss.website}</p>
                </h5>
                <h5 className="d-flex">
                  Description:
                  <p className="mx-3 blue">{doss.description}</p>
                </h5>
                <h5 className="d-flex">
                  CEO:
                  <p className="mx-3 blue">{doss.ceo}</p>
                </h5>
                <h5 className="d-flex">
                  Sector:
                  <p className="mx-3 blue">{doss.sector}</p>
                </h5>
                <h5 className="d-flex">
                  Country:
                  <p className="mx-3 blue">{doss.country}</p>
                </h5>
                <h5 className="d-flex">
                  No of Employees:
                  <p className="mx-3 blue">{doss.fullTimeEmployees}</p>
                </h5>
                <h5 className="d-flex">
                  Phone:
                  <p className="mx-3 blue">{doss.phone}</p>
                </h5>
                <h5 className="d-flex">
                  Address:
                  <p className="mx-3 blue">{doss.address}</p>
                </h5>
                <h5 className="d-flex">
                  City:
                  <p className="mx-3 blue">{doss.city}</p>
                </h5>
                <h5 className="d-flex">
                  State:
                  <p className="mx-3 blue">{doss.state}</p>
                </h5>
                <h5 className="d-flex">
                  IPO Date:
                  <p className="mx-3 blue">{doss.ipoDate}</p>
                </h5>
              </div>

            ))}
          </div>
          )}
      </div>
    );
  }
}

export default DetailPage;
