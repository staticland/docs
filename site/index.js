
  var minidocs = require('minidocs')
  var app = minidocs({"title":"docs.static","contents":[{"depth":1,"name":"welcome"},{"depth":2,"name":"Introduction","key":"introduction","link":"/introduction","toc":[{"level":1,"slug":"introduction-to-staticland","title":"Introduction to StaticLand"}]}],"markdown":"/Users/sdv/workspace/staticland/docs.static.land/docs","initial":"introduction","basedir":"","dir":"/Users/sdv/workspace/staticland/docs.static.land","routes":{"index":"/","introduction":"/introduction/"},"html":{"introduction":"<h1 id=\"introduction-to-staticland\"><a href=\"#introduction-to-staticland\" class=\"anchor\"></a>Introduction to StaticLand</h1>"}})
  app.start('#choo-root')
  