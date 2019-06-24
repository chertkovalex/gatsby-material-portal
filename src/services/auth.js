import users from '../data/users';

const isBrowser = typeof window !== `undefined`;

const getUser = () => (window.localStorage.gatsbyUser ? JSON.parse(window.localStorage.gatsbyUser) : {});

const setUser = user => {
  window.localStorage.gatsbyUser = JSON.stringify(user);
};

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false;

  const user = users.find(u => u.login === username && u.password === password);

  if (user) {
    // eslint-disable-next-line no-console
    console.log(`Credentials match! Setting the active user.`);
    return setUser(user);
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
