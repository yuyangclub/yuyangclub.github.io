var posts=["2024/04/15/hello-world/","2024/04/16/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };