<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>Local Boost Ke</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
scroll-behavior:smooth;
}

body{
background:#020617;
color:white;
overflow-x:hidden;
}

/* NAVBAR */

nav{
width:100%;
padding:25px 8%;
display:flex;
justify-content:space-between;
align-items:center;
background:#020617;
position:sticky;
top:0;
z-index:1000;
border-bottom:1px solid rgba(255,255,255,0.05);
}

.logo img{
width:110px;
}

.nav-btn{
padding:18px 42px;
border-radius:50px;
text-decoration:none;
font-weight:600;
font-size:18px;
color:white;
background:linear-gradient(90deg,#3b82f6,#10b981);
transition:0.3s;
}

.nav-btn:hover{
transform:translateY(-3px);
}

/* HERO */

.hero{
padding:100px 8%;
display:grid;
grid-template-columns:1fr 1fr;
gap:50px;
align-items:center;
min-height:90vh;
background:
radial-gradient(circle at top left, rgba(59,130,246,0.15), transparent 40%),
radial-gradient(circle at bottom right, rgba(16,185,129,0.12), transparent 40%);
}

.hero-text h1{
font-size:72px;
line-height:1.05;
margin-bottom:25px;
font-weight:700;
}

.hero-text span{
background:linear-gradient(90deg,#3b82f6,#10b981);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.hero-text p{
font-size:22px;
line-height:1.8;
color:#b8c1d1;
max-width:650px;
margin-bottom:35px;
}

.hero-buttons{
display:flex;
gap:20px;
flex-wrap:wrap;
}

.primary-btn{
padding:18px 38px;
border-radius:50px;
text-decoration:none;
font-weight:600;
background:linear-gradient(90deg,#3b82f6,#10b981);
color:white;
}

.secondary-btn{
padding:18px 38px;
border-radius:50px;
text-decoration:none;
font-weight:600;
border:1px solid rgba(255,255,255,0.2);
color:white;
}

/* SERVICES */

.services-section{
padding:100px 8%;
}

.services-container{
max-width:1200px;
margin:auto;
display:flex;
flex-direction:column;
gap:25px;
}

.large-card{
width:100%;
min-height:240px;
}

.bottom-services{
display:grid;
grid-template-columns:1fr 1fr;
gap:25px;
}

.service-card{
background:#06122b;
padding:45px;
border-radius:35px;
color:white;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
transition:0.3s ease;
}

.service-card:hover{
transform:translateY(-5px);
}

.service-card h3{
font-size:42px;
margin-bottom:20px;
font-weight:700;
line-height:1.1;
}

.service-card p{
font-size:20px;
line-height:1.7;
color:#b6bfd0;
max-width:400px;
}

/* PACKAGES */

.packages{
padding:100px 8%;
}

.section-title{
font-size:52px;
margin-bottom:70px;
text-align:center;
}

.package-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:30px;
}

.package-card{
background:#06122b;
padding:45px;
border-radius:35px;
border:1px solid rgba(255,255,255,0.05);
transition:0.3s;
}

.package-card:hover{
transform:translateY(-5px);
}

.package-card h3{
font-size:32px;
margin-bottom:15px;
}

.price{
font-size:38px;
font-weight:700;
margin-bottom:25px;
background:linear-gradient(90deg,#3b82f6,#10b981);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.package-card ul{
list-style:none;
display:flex;
flex-direction:column;
gap:15px;
color:#c3cad7;
line-height:1.6;
}

/* CREATOR SECTION */

.creator-section{
padding:100px 8%;
}

.creator-box{
background:#06122b;
border-radius:40px;
padding:60px;
display:grid;
grid-template-columns:1fr 1fr;
gap:40px;
align-items:start;
}

.creator-content h2{
font-size:48px;
margin-bottom:25px;
}

.creator-content p{
font-size:20px;
line-height:1.8;
color:#b7bfd0;
margin-bottom:35px;
}

.creator-benefits{
display:flex;
flex-direction:column;
gap:18px;
}

.creator-benefits div{
font-size:18px;
color:#d3d9e5;
}

.form-container iframe{
width:100%;
height:700px;
border:none;
border-radius:20px;
background:white;
}

/* CONTACT */

.contact{
padding:100px 8%;
text-align:center;
}

.contact h2{
font-size:52px;
margin-bottom:20px;
}

.contact p{
font-size:20px;
color:#b6bfd0;
margin-bottom:35px;
}

.contact-btn{
padding:18px 38px;
border-radius:50px;
text-decoration:none;
font-weight:600;
background:linear-gradient(90deg,#3b82f6,#10b981);
color:white;
display:inline-block;
}

/* WHATSAPP FLOAT */

.whatsapp-float{
position:fixed;
right:20px;
bottom:20px;
padding:16px 28px;
border-radius:50px;
background:linear-gradient(90deg,#3b82f6,#10b981);
color:white;
text-decoration:none;
font-weight:600;
z-index:999;
}

/* FOOTER */

footer{
padding:30px;
text-align:center;
color:#7f8798;
border-top:1px solid rgba(255,255,255,0.05);
margin-top:60px;
}

/* MOBILE */

@media(max-width:768px){

.hero{
grid-template-columns:1fr;
padding-top:70px;
}

.hero-text h1{
font-size:52px;
}

.hero-text p{
font-size:18px;
}

.bottom-services{
grid-template-columns:1fr;
}

.creator-box{
grid-template-columns:1fr;
padding:35px;
}

.service-card h3{
font-size:32px;
}

.section-title{
font-size:40px;
}

.logo img{
width:90px;
}

.nav-btn{
padding:14px 28px;
font-size:16px;
}

.whatsapp-float{
padding:14px 24px;
font-size:15px;
}

}

</style>
</head>

<body>

<!-- NAV -->

<nav>

<div class="logo">
<img src="logo.png" alt="Local Boost Ke">
</div>

<a href="https://wa.me/254734006916" class="nav-btn">
Let's Talk
</a>

</nav>

<!-- HERO -->

<section class="hero">

<div class="hero-text">

<h1>
Elevate Your <span>Local Brand.</span>
</h1>

<p>
Helping Kenyan businesses grow through premium web development, branding and Meta advertising solutions.
</p>

<div class="hero-buttons">

<a href="#packages" class="primary-btn">
View Packages
</a>

<a href="#creator" class="secondary-btn">
Become A Partner
</a>

</div>

</div>

</section>

<!-- SERVICES -->

<section class="services-section">

<div class="services-container">

<div class="service-card large-card">
<h3>Web Development</h3>
<p>
Premium high-converting business websites built for modern brands.
</p>
</div>

<div class="bottom-services">

<div class="service-card">
<h3>Branding</h3>
<p>
Elegant premium business identity systems.
</p>
</div>

<div class="service-card">
<h3>Meta Ads</h3>
<p>
Smart advertising campaigns focused on business growth.
</p>
</div>

</div>

</div>

</section>

<!-- PACKAGES -->

<section class="packages" id="packages">

<h2 class="section-title">
Website Packages
</h2>

<div class="package-grid">

<div class="package-card">

<h3>Starter Package</h3>

<div class="price">
Ksh 3,500
</div>

<ul>
<li>✔ 1 Premium Landing Page</li>
<li>✔ Mobile Friendly Design</li>
<li>✔ WhatsApp Integration</li>
<li>✔ Business Information Section</li>
<li>✔ Fast Delivery</li>

</ul>

</div>

<div class="package-card">

<h3>Business Package</h3>

<div class="price">
Ksh 10,000
</div>

<ul>
<li>✔ Up To 5 Custom Pages</li>
<li>✔ Booking System</li>
<li>✔ Gallery Sections</li>
<li>✔ SEO Optimization</li>
<li>✔ Professional UI Layout</li>

</ul>

</div>

<div class="package-card">

<h3>Premium Brand</h3>

<div class="price">
Ksh 25,000
</div>

<ul>
<li>✔ Advanced Custom Design</li>
<li>✔ Smooth Animations</li>
<li>✔ Interactive Sections</li>
<li>✔ Advanced SEO Structure</li>
<li>✔ Priority Support</li>

</ul>

</div>

</div>

</section>

<!-- CREATOR SECTION -->

<section class="creator-section" id="creator">

<div class="creator-box">

<div class="creator-content">

<h2>
Creator Partnership Program
</h2>

<p>
Earn commissions by referring businesses to Local Boost Ke.
</p>

<div class="creator-benefits">

<div>✔ Earn Ksh 500 per starter package referral</div>
<div>✔ Earn 20% commission on premium packages</div>
<div>✔ Get your own creator referral code</div>
<div>✔ Fast payouts after successful sales</div>

</div>

</div>

<div class="form-container">

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScyoec6tpWh7i9sT4oLchrJjnqDuOufWwblnhqxoXtCst618w/viewform?embedded=true">
Loading…
</iframe>

</div>

</div>

</section>

<!-- CONTACT -->

<section class="contact">

<h2>
Ready To Grow Your Brand?
</h2>

<p>
Let's build a premium online presence for your business.
</p>

<a href="https://wa.me/254734006916" class="contact-btn">
Chat On WhatsApp
</a>

</section>

<!-- FLOAT BUTTON -->

<a href="https://wa.me/254734006916" class="whatsapp-float">
WhatsApp Us
</a>

<!-- FOOTER -->

<footer>
© 2026 Local Boost Ke. All Rights Reserved.
</footer>

</body>
</html>