import React from 'react';
import { FormattedMessage } from 'react-intl';

import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

import fetchUserDetails from '../services/api';
import Title from './Title';

const styles = {
  textField: {
    marginLeft: '20px',
    marginRight: '20px',
    width: 200,
  },
  loader: {
    textAlign: 'center',
  },
};

const userDataDefault = [
  { id: 'title', label: 'Title', value: 'Mr' },
  { id: 'firstName', label: 'First name', value: 'Ethan' },
  { id: 'middleName', label: 'Middle Name', value: 'Ellis' },
  { id: 'lastName', label: 'Last Name', value: 'Kennedy' },
  { id: 'birthDate', label: 'Date of birth', value: 'Feb 1, 1981' },
  { id: 'gender', label: 'Gender', value: 'Male' },
  { id: 'maritalStatus', label: 'Marital Status', value: 'Married' },
];

export default class UserDetails extends React.Component {
  state = {
    isLoading: true,
    data: {},
  };

  componentDidMount() {
    return this.fetchData();
  }

  async fetchData() {
    const userData = await fetchUserDetails();

    this.setState({ data: userData, isLoading: false });
  }

  render() {
    const { data, isLoading } = this.state;

    const mappedDataObject = [];

    Object.keys(data).forEach(key => {
      const userDataIndex = userDataDefault.findIndex(item => item.id === key);

      if (userDataIndex > -1) {
        const userDataItem = { ...userDataDefault[userDataIndex] };

        if (typeof data[key] === 'string') {
          userDataItem.value = data[key];
        }

        if (typeof data[key] === 'object') {
          userDataItem.value = data[key].description;
        }
        mappedDataObject.push(userDataItem);
      }

      if (key === 'addresses') {
        const country = data[key][0].country.description;
        const addressItem = { id: 'address', label: 'Address', value: country };

        mappedDataObject.push(addressItem);
      }
    });

    return (
      <React.Fragment>
        <Title>
          <FormattedMessage id="Personal information" />
        </Title>
        <Divider variant="middle" />

        {isLoading && (
          <div style={styles.loader}>
            <CircularProgress />
          </div>
        )}

        <CardContent>
          {mappedDataObject.map(({ id, label, value }) => (
            <TextField
              key={id}
              id={id}
              readOnly
              label={label}
              defaultValue={value}
              style={styles.textField}
              margin="normal"
            />
          ))}
        </CardContent>
      </React.Fragment>
    );
  }
}
