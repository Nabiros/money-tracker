import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://teamproj-money-tracker.herokuapp.com';

const getByMonth = createAsyncThunk(
  'transactions/getByMonth',
  async ({ _id, month, year }) => {
    try {
      const { data } = await axios.get(
        `api/transactions/getByMonth/?${_id}&month=${month}&year=${year}`,
      );

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async newData => {
    try {
      const transaction = await axios.post(`api/transactions/`, newData);
      return transaction;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const transOperations = {
  getByMonth,
  addTransaction,
};

export default transOperations;
