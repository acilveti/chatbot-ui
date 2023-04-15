const register = async (values) => {
  const response = await fetch('http://load-balancer3-1756323403.eu-north-1.elb.amazonaws.com/register', {
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
  const response = await fetch('http://load-balancer3-1756323403.eu-north-1.elb.amazonaws.com/login', {
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
