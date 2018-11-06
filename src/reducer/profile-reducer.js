// const ProfileError extends Error {
//     constructor(missingValues) {
//         this.missingValues = missingValues;
//     }
// }

const validateProfile = (profile) => {
  if (!profile) {
    throw new Error('Profile is required');
  }
  const {
    username, email, accesscode,
  } = profile;

  if (!username || !email || !accesscode) {
    throw new Error('Invalid profile');
  }
};

export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CLIENT_PROFILE_SET':
      validateProfile(payload);
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};
