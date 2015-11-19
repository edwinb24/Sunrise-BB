<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Reservation Confirm!</title>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>My dropdown</title>
<link href="style.css" rel="stylesheet" type="text/css">
<script src="../jquery-1.6.4.js"></script> 
<script src="myjquery.js"></script>

<?php
$out_name = $_POST['name'];
$out_email = $_POST['email'];
$out_comments = $_POST['comments'];

$to = 'edwin_b24@hotmail.com';
$subject="Reservation Single, client Mr./Ms.$out_name";
$message="Mr./Ms.$out_name make a reservation for a Single. Comments: $out_comments";
$headers="From: $out_email";


mail($to,$subject, $message, $headers);


?>








</head>

<body>
<div id="wrapper"><a href="main.html"><img src="Images/othericon.png" height="20" alt="SunRise"></a>
  <ul class="menuelem">
    <li><a href="#">Reservations</a>
      <ul class="dropelem">
        <li><a href="#">Rates</a>
          <ul class="dropelem">
            <li><a href="reservationsingle.html">Single</a></li>
            <li><a href="reservationdouble.html">Double</a></li>
            <li><a href="reservationsuite.html">Suite</a></li>
          </ul>
        </li>
        
      </ul>
    </li>
    <li><a href="#">Amenities</a>
      <ul class="dropelem">
       
        <li><a href="#two">Room Features</a></li>
        <li><a href="#three">Customer Service</a></li>
      </ul>
    </li>
    <li><a href="#">Plan Your Visit</a>
      <ul class="dropelem">
        <li><a href="#four">Locations</a></li>

        <li><a href="#fifth">Nearby Attractions</a></li>
      </ul>
    </li>
    <li><a href="#six">Contact Us</a></li>
  </ul>
  </div>
<div id="bodywrapper">
  <section id="logo"><a href="main.html"><img src="Images/bannerfinish.gif" width="900" height="100" alt="banner"></a></section>
<section id="ten"><h1>Your Reservation information had been sent!</h1>
 <a href="main.html">
  <div class="boton"> Back to main</div></a>
  </section>
</div>
</body>
</html>