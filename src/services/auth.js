const isBrowser = typeof window !== `undefined`;

const getUser = () => (window.localStorage.gatsbyUser ? JSON.parse(window.localStorage.gatsbyUser) : {});

const setUser = user => {
  window.localStorage.gatsbyUser = JSON.stringify(user);
};

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false;

  if (username === `digital` && password === `digital`) {
    // eslint-disable-next-line no-console
    console.log(`Credentials match! Setting the active user.`);
    return setUser({
      name: `Jim`,
      legalName: `James K. User`,
      email: `jim@example.org`,
    });
  }

  return false;
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const user = getUser();

  return !!user.email;
};

export const getCurrentUser = () => isBrowser && getUser();

export const logout = callback => {
  if (!isBrowser) return;

  // eslint-disable-next-line no-console
  console.log(`Ensuring the \`gatsbyUser\` property exists.`);
  setUser({});
  callback();
};
