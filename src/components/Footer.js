import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-left">
                {/* <img src="https://quantavidtemp.web.app/assets/images/quantavid1%20logo.svg" /> */}
                <h1 class="text-left">Quantavid</h1>
                <p class="text-left">The best video generation you will ever need.</p>
            
                
            </div>
            <ul class="footer-right" >
                <li>
                    <h2>EXPLORE</h2>
                    <ul class="box">
                        <li class=""><a href="#">Services</a></li>
                        <li><a href="#">Premium Features</a></li>
                        <li><a href="#">Policies</a></li>
                    </ul>
                </li>
                <li>
                    <h2>CONTACT US</h2>
                    <ul class="box">
                        <li><a href="#">contact@quantavid.com</a></li>
                    </ul>
                </li>
                <li>
                    <h2>SOCIAL MEDIA</h2>
                    <ul class="box">
                        <li><a href="https://in.linkedin.com/">LinkedIn</a></li>
                        <li><a href="https://www.facebook.com/campaign/landing.php?&campaign_id=973072061&extra_1=s%7Cc%7C231348943369%7Ce%7Cfacebook%7C&placement=&creative=231348943369&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D973072061%26adgroupid%3D54006406691%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-297690534863%26loc_physical_ms%3D9062127%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiApNSABhAlEiwANuR9YIgZSdOgbxCv36SRAocwyxp3mYacO5RT6btiY8QDI4Ugd8ypX580DRoCrLMQAvD_BwE">Facebook</a></li>
                    </ul>
                </li>
            </ul>
            <div class="footer-bottom">
                <p>&#169;Copyright Quantavid</p>
            </div>
        </footer>
    )
}

export default Footer
