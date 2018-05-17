  // Declare General variables
let clicks = 0;

// Increment the clicks
$('#cat').click(function(e) {
  clicks++;
  $('#nbclicks').html(" " + clicks);
});
