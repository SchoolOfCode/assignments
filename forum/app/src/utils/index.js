const URL = process.env.REACT_APP_API;

export const request = ({
  destination = URL,
  method = "GET",
  body,
  headers = {},
  options = {}
}) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    ...options
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return fetch(destination, config)
    .then(async res => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      }
      let x = await res.json();

      const error = new Error(res.statusText);
      error.res = res;
      error.message = x.message;
      throw error;
    })
    .then(data => data.payload);
};
