const api_url = 'http://localhost:8000/';

const postApiKey = async (values: string) => {
  const response = await fetch(api_url + 'api_key_post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ api_key: values }),
    credentials: 'include',
  });

  if (!response.ok) {
    return false;
  } else {
    return true;
  }
};

interface ApiResponse {
  api_key: string;
}

const getApiKey = async (): Promise<string> => {
  const response = await fetch(api_url + 'api_key', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'same-origin',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch API key');
  } else {
    const data: ApiResponse = await response.json();
    return data.api_key;
  }
};

export default {
  postApiKey,
  getApiKey,
};
