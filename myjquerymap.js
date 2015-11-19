 function initialize() {
    var myOptions = {
      zoom: 5,
      center: new google.maps.LatLng(	43.787632, -125.501579),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"),
                                  myOptions);

    var image = 'Images/map_icon.png';
   
   /*FOR LOCATION IN SEATTLE*/
    var SeattleLatLng = new google.maps.LatLng(47.6210664, -122.3491205);
    var seattleMarker = new google.maps.Marker({
        position: SeattleLatLng,
        map: map,
        icon: image,
		title: '4th Ave N, Seattle, WA 98109'
    });
	
	 var SeattleString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Seattle</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Seattle</b>, in a perfect location for tourism in the city, close to ' +
        'the main attractions of the city like the Space Needle. '+
        'Perfect place to spend the night and enjoy a hot breakfast if you are planning a visit this comming Christmass '+
  
        '</div>'+
        '</div>';
        
    var Seattlewindow = new google.maps.InfoWindow({
        content: SeattleString
    });

 
	google.maps.event.addListener(seattleMarker, 'click', function() {
      Seattlewindow.open(map,seattleMarker);
	  seawindow.close(map,seaMarker);
	  sfrawindow.close(map,sfraMarker);
    });
	
	/*Sea location*/
	 var seaLatLng = new google.maps.LatLng(42.6210664, -132.3491205);
    var seaMarker = new google.maps.Marker({
        position: seaLatLng,
        map: map,
        icon: image,
		title: 'Middle of the Sea'
    });
	
	 var seaString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Middle of the Sea</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Middle of the Sea</b>, the perfect place to stop your ship from those long cross ocean travels.  ' +
        'Your crew is tire to sleep in the ship, perfect play to stay.'+
  
        '</div>'+
        '</div>';
        
    var seawindow = new google.maps.InfoWindow({
        content: seaString
    });

 
	google.maps.event.addListener(seaMarker, 'click', function() {
      seawindow.open(map,seaMarker);
	  sfrawindow.close(map,sfraMarker);
	  Seattlewindow.close(map,seattleMarker);
    });
	
		/*SFra location*/
	 var sfraLatLng = new google.maps.LatLng(37.8195864, -122.4785325);
    var sfraMarker = new google.maps.Marker({
        position: sfraLatLng,
        map: map,
        icon: image,
		title: 'San Francisco'
    });
	
	 var sfraString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">San Francisco</h1>'+
        '<div id="bodyContent">'+
        '<p><b>San Francisco</b>, A perfect place to stay if you ' +
        'are visiting San Francisco. With a beutifull view to the Golden Gate Bridge.'+
  
        '</div>'+
        '</div>';
        
    var sfrawindow = new google.maps.InfoWindow({
        content: sfraString
    });

 
	google.maps.event.addListener(sfraMarker, 'click', function() {
      sfrawindow.open(map,sfraMarker);
	   seawindow.close(map,seaMarker);
	    Seattlewindow.close(map,seattleMarker);
    });
	
  }