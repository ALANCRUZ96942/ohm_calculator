import axios from 'axios';
const apiurl = process.env.REACT_APP_API_BASE_URL;
const instance = axios.create({
  baseURL: apiurl ,
});

export const getResistorsByTolerance = async () => {
  try {
    const response = await instance.get('api/resistors/tolerance');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getResistorsByFigure = async () => {
    try {
      const response = await instance.get('api/resistors/colors');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export const getResistorsByMultipler = async () => {
    try {
      const response = await instance.get('api/resistors/multiplers');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
