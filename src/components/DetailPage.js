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
                <p>Company Name: {doss.companyName}</p>
                <p>Symbol:  {doss.symbol}</p>
                <p>Price: {doss.price}</p>
                <p>Currency {doss.currency}</p>
                <p>Volume Average: {doss.volAvg}</p>
                <p>Market Capitalization: {doss.mktCap}</p>
                <p>Range: {doss.range}</p>
                <p>Changes: {doss.changes}</p>
                <p>Price: {doss.price}</p>
                <p>Price: {doss.price}</p>
                <p>Price: {doss.price}</p>
                <p>Price: {doss.price}</p>
                <p>Price: {doss.price}</p>
                <p>Price: {doss.price}</p>
                <p>Price: {doss.price}</p>
                <p>Price: {doss.price}</p>
                <p>Price: {doss.price}</p>
                <p>Price: {doss.price}</p>
                <p>Price: {doss.price}</p>
                <p>Price: {doss.price}</p>
                <p>Price: {doss.price}</p>
              </div>
              
            ))}
          </div>
          )}
      </div>
    );
  }
}

export default DetailPage;
