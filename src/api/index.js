import axios from 'axios'; /* library used to make the api request */

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

  } catch (error) {}
};
