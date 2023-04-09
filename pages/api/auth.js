const register = async (values) => {
  const response = await fetch('http://localhost:8000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
    credentials: 'include',
  });

  if (!response.ok) {
    return false;
  } else {
    return true;
  }
};

const login = async (values) => {
  const response = await fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
    credentials: 'include',
  });

  if (!response.ok) {
    return false;
  } else {
    return true;
  }
};

export default {
  register,
  login,
};
