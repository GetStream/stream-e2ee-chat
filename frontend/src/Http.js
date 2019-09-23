export const post = (url, body, maybeAuth) => {
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  if (maybeAuth) {
    headers['Authorization'] = 'Bearer ' + maybeAuth;
  }

  return fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  })
    .then(res => res.json())
};
