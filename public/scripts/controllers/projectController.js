'use strict';

(function(module) {
  const projectController = {};
  projectController.index = () => {
    Projects.fetchAll();

    $('main > section').hide();
    $('#portfolio').show();
  };

  module.projectController = projectController;
})(window);
