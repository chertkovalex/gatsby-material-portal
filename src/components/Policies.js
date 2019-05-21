import React from 'react';
import PolicyCard from './PolicyCard';

const policies = [
  {
    number: 4837,
    plan: 'SIMPLIFIED INCOME PLAN',
    startDate: '18/04/2019',
    lastModalPremium: '£31.90',
    sumAssured: '£45,000.00',
  },
  {
    number: 4829,
    plan: 'SIMPLIFIED INCOME PLAN',
    startDate: '27/02/2019',
    lastModalPremium: '£42.83',
    sumAssured: '£36,000.00',
  },
  {
    number: 4803,
    plan: 'SIMPLIFIED INCOME PLAN',
    startDate: '15/01/2019',
    lastModalPremium: '£22.24',
    sumAssured: '£50,000.00',
  },
  {
    number: 4789,
    plan: 'SIMPLIFIED INCOME PLAN',
    startDate: '20/01/2019',
    lastModalPremium: '£20.45',
    sumAssured: '£43,000.00',
  },
  {
    number: 4735,
    plan: 'SIMPLIFIED INCOME PLAN',
    startDate: '19/01/2019',
    lastModalPremium: '£57.83',
    sumAssured: '£50,000.00',
  },
  {
    number: 4734,
    plan: 'SIMPLIFIED INCOME PLAN',
    startDate: '18/01/2019',
    lastModalPremium: '£19.23',
    sumAssured: '£50,000.00',
  },
  {
    number: 4733,
    plan: 'SIMPLIFIED INCOME PLAN',
    startDate: '17/01/2019',
    lastModalPremium: '£10.31',
    sumAssured: '£37,000.00',
  },
  {
    number: 4724,
    plan: 'SIMPLIFIED INCOME PLAN',
    startDate: '16/01/2019',
    lastModalPremium: '£60.33',
    sumAssured: '£28,000.00',
  },
  {
    number: 4723,
    plan: 'SIMPLIFIED INCOME PLAN',
    startDate: '14/01/2019',
    lastModalPremium: '£15.92',
    sumAssured: '£50,000.00',
  },
];

export default class Policies extends React.Component {
  state = {
    loading: false,
    error: false,
    pupper: {
      img: "",
      breed: "",
    },
  }


  componentDidMount() {
    //this.fetchRicksPupper()
  }

  render(){
    return (
      <React.Fragment>
        {policies.map((policy, key) => (
          <PolicyCard key={key} {...policy} />
        ))}
      </React.Fragment>
    );
  }



}
