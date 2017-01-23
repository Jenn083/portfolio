'use strict';

(function(module) {
  const gitHubProjectsView = {};

  const ui = function() {
    let $repositories = $('#repositories');

    $repositories.append('ul').empty();
    $repositories.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  gitHubProjectsView.index = function() {
    ui();

    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.gitHubProjectsView = gitHubProjectsView;
})(window);
