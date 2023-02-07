const ENV = {
  dev: {
    apiUrl: 'http://localhost:44370',
    oAuthConfig: {
      issuer: 'http://localhost:44370',
      clientId: 'BookStore_App',
      clientSecret: '1q2w3e*',
      scope: 'offline_access BookStore',
    },
    localization: {
      defaultResourceName: 'BookStore',
    },
  },
  prod: {
    apiUrl: 'http://localhost:44370',
    oAuthConfig: {
      issuer: 'http://localhost:44370',
      clientId: 'BookStore_App',
      clientSecret: '1q2w3e*',
      scope: 'offline_access BookStore',
    },
    localization: {
      defaultResourceName: 'BookStore',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};
