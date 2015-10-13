console.log("Sanity Check: JS is working!");

$(document).ready(function(){

 function Blogger(name) {
    this.name = name;
  }

   // constructor functions - Post
  function Post(content) {
    this.content = content;
  }

  // `Posts.all` contains our seed data
  Post.all = [
    new Post('Travel is Life')

  ];
 console.log("Post: "+Post.all)	;

  Post.prototype.save = function() {
    // store our new post
    Post.all.push(this);
    
  };

  // post.save(post);
   console.log("Post: "+Post.all);


  Post.prototype.render = function() {
    // append our new post to the page
    var $post = $(postTemplate(this));
    this.index = Post.all.indexOf(this);
    // $post.attr('data-index', this.index);
    $postList.append($post);
  };
  // console.log("postList:"+$postList);

  // form to create new todo
  var $newPost = $('#new-message');
  console.log("newPost: "+$newPost);

  

  // submit form to create new post
  $newPost.on('submit', function(event) {
    event.preventDefault();

    // create new post object from form data
    
    var postContent = $('#new-message-text').val();
    var post = new Post(postContent);
    console.log(Post.all);
    // save toDo
    post.save();

 
    // reset the form
    $newPost[0].reset();
    $('#new-message-text').focus();
  });


});