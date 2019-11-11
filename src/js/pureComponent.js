  
import React from 'react';

export default class PercentageStat extends React.PureComponent {
  render() {
    const { label, score = 0, total = Math.max(1, score) } = this.props;

    return (
      <div>
        <h3>
          {label}: <span>{Math.round((score / total) * 100)}%</span>
        </h3>
      </div>
    );
  }
}
