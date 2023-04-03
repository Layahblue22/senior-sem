export const Singleton = (function() {
    let instance; // private variable to hold the Singleton instance
    let userInfo = {}; // private variable to hold user information
  
    function createInstance() {
      const object = {}; // create a new object
      object.setEmail = function(email) {
        userInfo.email = email;
      };
      object.setUID = function(uid) {
        userInfo.uid = uid;
      };
      object.setToken = function(token) {
        userInfo.token = token;
      };
      object.getUserInfo = function() {
        return userInfo;
      };
      return object;
    }
  
    return {
      getInstance: function() {
        if (!instance) { // check if an instance already exists
          instance = createInstance(); // if not, create a new instance
        }
        return instance; // return the instance
      }
    };
  })();

  export default Singleton;