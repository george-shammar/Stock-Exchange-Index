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
          <span>
            {stock.map((doss) => (
              <span className="card">
                Symbol: 
                {doss.symbol}
                Price: 
                {doss.price}
              </span>
              
            ))}
          </span>
          )}
      </div>
    );
  }
}

export default DetailPage;
