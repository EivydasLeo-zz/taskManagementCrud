const fetchApiBaseUrl = 'http://localhost:4000';

const reqOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

export const getAllTasks = async () => {
  try {
    const res = await fetch(`${fetchApiBaseUrl}/allTasks`, reqOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log('Get all tasks error: ', err);
  }
};
