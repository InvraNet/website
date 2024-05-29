// next.config.js
module.exports = {
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        // Add more routes as needed
      };
    },
  };
  