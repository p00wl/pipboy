var calcHeight = function() {
            $('#preview-frame').height($(window).height());
          }
 
          $(document).ready(function() {
            calcHeight();
          }); 
 
          $(window).resize(function() {
            calcHeight();
          }).load(function() {
            calcHeight();
          });



