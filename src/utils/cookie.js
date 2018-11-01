const deleteCookie = (key) => {
  document.cookie = `${key}=; expires= date`;
};

const getCookie = (key) => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) { // eslint-disable-line
    const [cookieKey, cookieValue] = cookie.split('=');
    if (key === cookieKey.trim()) {
      return cookieValue;
    }
  }
  return null;
};

export { getCookie, deleteCookie };
