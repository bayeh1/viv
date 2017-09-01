$(document).foundation()
function myMap() {
var myCenter = new google.maps.LatLng(38.985040, -77.026929);
var mapProp = {center:myCenter, zoom:18, scrollwheel:true, draggable:true, mapTypeId:google.maps.MapTypeId.SATELLITE};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({position:myCenter});
marker.setMap(map);

marker.addListener('click', function() {
  window.open("https://www.google.com/maps/place/7894+Georgia+Ave,+Silver+Spring,+MD+20910/@38.9850417,-77.0291255,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7c89663703043:0x31231f5888213c63!8m2!3d38.9850417!4d-77.0269315");
  });
}
