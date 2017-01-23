'use strict';

page('/', projectController.index);
page('/about', aboutController.index);
page('/contact', contactController.index);
page('/repositories', gitHubProjectsController.index);
page();
