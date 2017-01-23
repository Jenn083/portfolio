'use strict';

(function(module) {
  const gitHubProjectsController = {};

  gitHubProjectsController.index = () => {
    $('#repositories').show().siblings().hide();
    repos.requestRepos(gitHubProjectsView.index);
    // add data to #repositories
  };

  module.gitHubProjectsController = gitHubProjectsController;
})(window);
