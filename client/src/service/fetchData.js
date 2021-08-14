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

export const postNewTask = async (obj) => {
  try {
    const res = await fetch(`${fetchApiBaseUrl}/addNewTask`, {
      method: 'POST',
      body: JSON.stringify(obj),
      ...reqOptions,
    });
    const result = await res.json();
    console.log('New Task Created: ', result);
  } catch (err) {
    console.log('Error occured: ', err);
  }
};

export const getSingleTask = async (id) => {
  try {
    const res = await fetch(`${fetchApiBaseUrl}/allTasks/${id}`, reqOptions);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log('Get single task error:', err);
  }
};

export const deleteOneTask = async (id) => {
  try {
    const res = await fetch(`${fetchApiBaseUrl}/allTasks/delete/${id}`, {
      method: 'DELETE',
      ...reqOptions,
    });
    await res.json();
  } catch (err) {
    console.log('Delete task failed..', err);
  }
};
