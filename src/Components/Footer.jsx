import React from "react";
import "../Style/Footer.css"
import INSTAGRAMICON from "@material-ui/icons/Instagram"
import FACEBOOK from "@material-ui/icons/Facebook"
import LINKEDIN from "@material-ui/icons/LinkedIn"
import TWITTER from "@material-ui/icons/Twitter"
function Footer()
{
    return(
        <div className="footer">
            <div className="socialMedia">
            <INSTAGRAMICON></INSTAGRAMICON>
            <FACEBOOK></FACEBOOK>
            <LINKEDIN></LINKEDIN>
            <TWITTER></TWITTER>
            </div>
            <p>&copy; 2023 Vivek.com</p>
        </div>
    )

}
export default Footer