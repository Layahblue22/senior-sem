export const UserSingleton = (function() {
  let instance;

  function createUserObject(user) {
    // create user object here
    const newUser = user
    return newUser;
  }

  function deleteUserObject() {
    instance = null;
  }

  return {
    getUserObject: function(user) {
      if (!instance) {
        instance = createUserObject(user);
      }
      return instance;
    },
    deleteUserObject: function() {
      deleteUserObject();
    }
  };
})();
