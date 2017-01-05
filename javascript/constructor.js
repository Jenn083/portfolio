'use strict'
var projects = [
  {
    title: 'Rome',
    projectUrl:'http://github.com',
    image:'images/one.jpg',
    publishedOn:'2015-01-03',
    body:'Write Descript'
  },
  {
    title: 'Italy',
    projectUrl:'http://github.com',
    image:'images/two.jpg',
    publishedOn:'2015-01-03',
    body:'Write Descript'
  },
  {
    title: 'Sydney',
    projectUrl:'http://github.com',
    image:'images/three.jpg',
    publishedOn:'2015-01-03',
    body:'Write Descript'
  },
  {
    title: 'Paris',
    projectUrl:'http://github.com',
    image:'images/four.jpg',
    publishedOn:'2015-01-03',
    body:'Write Descript'
  },
  {
    title: 'Toronto',
    projectUrl:'http://github.com',
    image:'images/five.jpg',
    publishedOn:'2015-01-03',
    body:'Write Descript'
  },
  {
    title: 'Moscow',
    projectUrl:'http://github.com',
    image:'images/six.jpg',
    publishedOn:'2015-01-03',
    body:'Write Descript'
  },
  {
    title: 'London',
    projectUrl:'http://github.com',
    image:'images/seven.jpg',
    publishedOn:'2015-01-03',
    body:'Write Descript'
  },
  {
    title: 'New York',
    projectUrl:'http://github.com',
    image:'images/eight.jpg',
    publishedOn:'2015-01-03',
    body:'Write Descript'
  },
  {
    title: 'Spain',
    projectUrl:'http://github.com',
    image:'images/nine.jpg',
    publishedOn:'2015-01-03',
    body:'Write Descript'
  },

];

var articles = [];
function Projects(options){
  this.projectUrl=options.projectUrl;
  this.publishedOn=options.publishedOn;
  this.body= options.body;
  this.title=options.title;
  this.image = options.image;
}

Projects.prototype.toHtml = function() {
var $column = $('<div class="col-4"></div>');
var $title = $('<div class="title"></div>').text(this.title);
var $image = $('<div class="img"></div>')
var $picture =$('<img class="image-pic">').attr('src', this.image);
var $description=$('<div class="description"></div>');
var $paraDes=$('<p></p>').text(this.body);
$description.append($paraDes);
$image.append($picture);
$image.append($description);
$column.append($title);
$column.append($image);
return $column;

};

projects.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
});

projects.forEach(function(ele) {
  articles.push(new Projects(ele));
});

var $rowEl = $('<div class="row"></div>');
for (var i = 0; i < articles.length; i ++) {
  if ( i > 0 && i % 3 === 0) {
    // row = create new row element
    $('#portfolio').append($rowEl);
    $rowEl = $('<div class="row"></div>');
  }
  $rowEl.append(articles[i].toHtml());// put projects in the row;

  // append column element = articles[i].toHtml();
}
articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
