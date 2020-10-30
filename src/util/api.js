const getToken = () => {
  const str = window.location.hash.substr(1);

  const pairs = str.split("&").map((pairString) => pairString.split("="));
  for (const [key, value] of pairs) {
    if (key === "access_token") {
      return value;
    }
  }

  return null;
};

export const TOKEN = getToken();
