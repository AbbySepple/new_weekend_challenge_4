$(document).ready( function (){
  console.log('SOURCE JQ');
  getListings();
});



function getListings(){
  console.log('in get albums');
  $.ajax({
    type: 'GET',
    url: '/property',
    success: function(response) {
      console.log('back from get property with: ', response);
      var outputDiv = $('#outputDiv');
      outputDiv.empty();

      for (var i = 0; i < response.length; i++) {

        if (response[i].rent) {
        var cellTextOne = '<div class="col-md-4 card">';
        cellTextOne+= "<img src='https://cdn1.iconfinder.com/data/icons/citix/128/city_building_tenement_apartment-512.png'";
        cellTextOne+= "<p>" + response[i].rent+"</p>";
        cellTextOne+= "<p>" + response[i].sqft +"</p>";
        cellTextOne+= "<p>" + response[i].city +"</p>" + '</div>';
        outputDivOne.append(cellTextOne);
      } else {
        var cellTextTwo = '<div class="col-md-4 card">';
        cellTextTwo+= "<img src='https://cdn.tutsplus.com/psd/uploads/legacy/325_House_Icon/43.jpg'";
        cellTextTwo+= "<p>" + response[i].cost+"</p>";
        cellTextTwo+= "<p>" + response[i].sqft +"</p>";
        cellTextTwo+= "<p>" + response[i].city +"</p>" + '</div>';
        outputDivTwo.append(cellTextTwo);
      }//end if/else
      }//end for var
    }//end success
  });//end of ajax
}//end getListings function
