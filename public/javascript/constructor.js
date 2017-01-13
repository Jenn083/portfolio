'use strict';

var articleAll = [];
function Projects(options){
  this.projectUrl=options.projectUrl;
  this.publishedOn=options.publishedOn;
  this.body= options.body;
  this.title=options.title;
  this.image = options.image;
  // for(var key in options){
  //   this[key] = options[key];
  // }
}

Projects.prototype.toHtml = function() {
// var $column = $('<div class="col-4"></div>');
// var $title = $('<div class="title"></div>').text(this.title);
// var $image = $('<div class="img"></div>')
// var $picture =$('<img class="image-pic">').attr('src', this.image);
// var $description=$('<div class="description"></div>');
// var $paraDes=$('<p></p>').text(this.body);
// $description.append($paraDes);
// $image.append($picture);
// $image.append($description);
// $column.append($title);
// $column.append($image);
// return $column;
  var source = $('#article-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

// projects.sort(function(currentObject, nextObject) {
//   return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
// });
//
// projects.forEach(function(ele) {
//   articles.push(new Projects(ele));
// });

function createRow () {
  var $rowEl = $('<div class="row"></div>');
  for (var i = 0; i < articleAll.length; i ++) {
    $rowEl.append(articleAll[i].toHtml());
    console.log(i);
    console.log(i%3);
    if ( i >=0 && i%3===2 || i === articleAll.length-1) {
      $('#portfolio').append($rowEl);
      $rowEl = $('<div class="row"></div>');
    }
  }
}

// projects.forEach(function(ele) {
//   articles.push(new Projects(ele));
// });
//

// articleAll.forEach(function(article) {
//   $('#portfolio').append(article.toHtml());
// });


Projects.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    articleAll.push(new Projects(ele));
  })

  createRow();
}

Projects.fetchAll = function() {
  if (localStorage.rawData) {//check localStorage for rawData
    var myObj= JSON.parse(localStorage.rawData);//take and parse
    Projects.loadAll(myObj);//then call loadAll function on projects
      // projectsArr.initIndexPage();
  } else {
    $.getJSON('/projectsArr.json', function(data) {
      console.log(data);
      localStorage.setItem('rawData', JSON.stringify(data));

      Projects.loadAll(data);
    });
  }
}
