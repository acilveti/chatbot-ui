const register = async (values) => {
  const response = await fetch(
    'https://a7b9-47-63-116-234.eu.ngrok.io/register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    },
  );

  if (!response.ok) {
    return false;
  } else {
    return true;
  }
};

export default {
  register,
};
