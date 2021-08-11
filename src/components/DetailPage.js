import React from 'react';
/* eslint-disable */
class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dossier: null,
    };
  }

  componentDidMount() {
    fetch('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=e517e7bdf90a7bed784312f134d9eab9')
      .then((resp) => resp.json())
      .then((json) => this.setState({ dossier: json }));
  }

  render() {
    const { dossier } = this.state;
    return (
      <div className="container">
        {dossier !== null && dossier.length > 0
          && (
          <span>
            {dossier.map((doss) => (
              <span>
                code:
                {doss.symbol}
              </span>
            ))}
          </span>
          )}
      </div>
    );
  }
}

export default DetailPage;
