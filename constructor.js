'use strict'
function Projects(options){
  this.category=options.category;
  this.author=options.author;
  this.authorUrl=options.authorUrl;
  this.body= options.body;
  this.title=options.title;

};

Article.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.attr('data-category', this.category);
  $newProject.find('h1').text(this.title);
  $newProject.find('href').text(this.authorUrl);
  $newProject.find('a').text(this.author);
  $newProject.find('time').text(this.publishedOn);
  $newProject.find('.article-body').html(this.body);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  $newProject.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
/* TODO: This cloned article is no longer a template, as it now
has real data attached to it. Remove the class from this new article! */
  $newArticle.removeClass();
  return $newArticle;
};

/* This sort method is a standard JavaScript Array function
   that will iterate over an array and compare its values,
   and then arrange them in ascending or descending order
   according to the return value. We are comparing the
   publishedOn properties to arrange the blog posts in
   descending order (most recent first). */
blogArticles.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
});

blogArticles.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
