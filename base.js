console.log("Sanity Check: JS is working!");

$(document).ready(function(){

 function Blogger(name) {
    this.name = name;
  }

   // constructor functions - Post
  function Post(content) {
    this.content = content;
  }

  // `Posts.all` make new post
  Post.all = [
    new Post('Travel is Life')

  ];
 console.log("Post: "+Post.all)	;

  Post.prototype.save = function() {
    // save our new post
    var $post = '<div>' + this.content + '</div>';
    var $postList = $('#post-list');
    $postList.append($post);
    Post.all.push(this);
    
  };

  // post.save(post);
   console.log("Post: "+Post.all);


  Post.prototype.render = function() {
    // append our new post to the page

  };
  // console.log("postList:"+$postList);

  // form to create new todo
  var $newPost = $('#new-post');
  console.log("newPost: "+$newPost);

  

  // submit form to create new post
  $newPost.on('submit', function(event) {
    event.preventDefault();

    // create new post object from form data
    
    var postContent = $('#post-content').val();
    var post = new Post(postContent);
    console.log(postContent);
    console.log(Post.all);
    // save toDo
    post.save();

 
    // reset the form
    $newPost[0].reset();
    $('#post-content').focus();
  });


});