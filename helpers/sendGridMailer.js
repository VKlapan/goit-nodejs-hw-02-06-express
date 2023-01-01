// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "vladimir.klapan@gmail.com", // Change to your recipient
  from: "v.lahodnyi@proformula.ua", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <!--<![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    body {width: 700px;margin: 0 auto;}
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
<![endif]-->
      <style type="text/css">
    body, p, div {
      font-family: arial,helvetica,sans-serif;
      font-size: 14px;
    }
    body {
      color: #000000;
    }
    body a {
      color: #1188E6;
      text-decoration: none;
    }
    p { margin: 0; padding: 0; }
    table.wrapper {
      width:100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    img.max-width {
      max-width: 100% !important;
    }
    .column.of-2 {
      width: 50%;
    }
    .column.of-3 {
      width: 33.333%;
    }
    .column.of-4 {
      width: 25%;
    }
    ul ul ul ul  {
      list-style-type: disc !important;
    }
    ol ol {
      list-style-type: lower-roman !important;
    }
    ol ol ol {
      list-style-type: lower-latin !important;
    }
    ol ol ol ol {
      list-style-type: decimal !important;
    }
    @media screen and (max-width:480px) {
      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }
      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }
      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }
      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }
      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }
      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .columns {
        width: 100% !important;
      }
      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
      <!--user entered Head Start--><!--End Head user entered-->
    </head>
    <body>
      <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#ffb349;">
        <div class="webkit">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#ffb349">
            <tr>
              <td valign="top" bgcolor="#ffb349" width="100%">
                <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="100%">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <!--[if mso]>
    <center>
    <table><tr><td width="700">
  <![endif]-->
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:700px;" align="center">
                                      <tr>
                                        <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#F3F6FF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
    <tr>
      <td role="module-content">
        <p>Let TIKI'S TRAVEL do the work!</p>
      </td>
    </tr>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="17761d99-860c-4f1f-aeb0-be55796d7adf" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:15px 60px 10px 60px; line-height:12px; text-align:inherit; background-color:#ffb349;" height="100%" valign="top" bgcolor="#ffb349" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; color: #f3f6ff; font-size: 10px">Email not displaying correctly? </span><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; color: #1c2c7b; font-size: 10px"><u>View it</u></span><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; color: #f3f6ff; font-size: 10px"> in your browser.</span></div><div></div></div></td>
      </tr>
    </tbody>
  </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:30px 30px 20px 30px;" bgcolor="#e2f1ff" data-distribution="1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="280" style="width:280px; border-spacing:0; border-collapse:collapse; margin:0px 180px 0px 180px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8710905a-e942-4b46-a460-0799e4faf5c2">
    <tbody>
      <tr>
        <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
          <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="280" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/c31721ac5f4f8b45/c753abac-5f8e-4745-9b60-05576cf9c61e/2714x403.png">
        </td>
      </tr>
    </tbody>
  </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="6e0d4f99-4ac1-47a7-8681-b39ea8ee64e3">
    <tbody>
      <tr>
        <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
          <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="700" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/c31721ac5f4f8b45/84b237b7-601c-4f3b-ac30-017471c406f6/2736x1539.jpg">
        </td>
      </tr>
    </tbody>
  </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 5px 15px 5px;" bgcolor="" data-distribution="1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="690" style="width:690px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a5ee1b9d-aacf-476c-ad72-fa1f2d816f12" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:30px 0px 0px 0px; line-height:50px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h1 style="text-align: center; font-family: inherit"><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 60px; color: #1c2c7b"><strong>A</strong></span><span style="color: #1c2c7b; font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 60px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 700; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(243, 246, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline"> long</span><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 60px; color: #1c2c7b"><strong> family trip?</strong></span></h1><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a5ee1b9d-aacf-476c-ad72-fa1f2d816f12.2" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:0px 0px 0px 0px; line-height:24px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 20px; color: #5a66ab">Our versatile booking service for your getaway</span></div><div></div></div></td>
      </tr>
    </tbody>
  </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9fad6950-fb2c-4904-8bf1-426398c84a27">
    <tbody>
      <tr>
        <td style="padding:0px 0px 15px 0px;" role="module-content" bgcolor="">
        </td>
      </tr>
    </tbody>
  </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 20px 20px 20px;" bgcolor="#F3F6FF" data-distribution="1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="460" style="width:460px; border-spacing:0; border-collapse:collapse; margin:0px 100px 0px 100px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a5ee1b9d-aacf-476c-ad72-fa1f2d816f12.1" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:30px 30px 30px 30px; line-height:30px; text-align:inherit; background-color:#75c6fb;" height="100%" valign="top" bgcolor="#75c6fb" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 22px; color: #1c2c7b">We can help you plan everything</span></div>
<div style="font-family: inherit; text-align: center"><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 22px; color: #1c2c7b">you need for your trip, from </span><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 22px; color: #1c2c7b"><u><strong>air tickets</strong></u></span><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 22px; color: #1c2c7b">, </span><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 22px; color: #1c2c7b"><u><strong>car rentals</strong></u></span><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 22px; color: #1c2c7b">, and </span><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 22px; color: #1c2c7b"><u><strong>hotel reservations</strong></u></span><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 22px; color: #1c2c7b"> to </span><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 22px; color: #1c2c7b"><u><strong>site tickets</strong></u></span><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 22px; color: #1c2c7b">.</span></div>
<div style="font-family: inherit; text-align: center"><span style="font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif; font-size: 22px; color: #1c2c7b">Just let us do the work for you!</span></div><div></div></div></td>
      </tr>
    </tbody>
  </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="71d66b9a-f3bc-4b7a-97f3-479258b379cf">
      <tbody>
        <tr>
          <td align="center" bgcolor="#F3F6FF" class="outer-td" style="padding:25px 0px 25px 0px; background-color:#F3F6FF;">
            <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
              <tbody>
                <tr>
                <td align="center" bgcolor="#D53B3E" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                  <a href="" style="background-color:#D53B3E; border:0px solid #333333; border-color:#333333; border-radius:0px; border-width:0px; display:inline-block; font-size:16px; font-weight:700; letter-spacing:2px; line-height:normal; padding:15px 50px 15px 50px; text-align:center; text-decoration:none; border-style:solid; font-family:lucida sans unicode,lucida grande,sans-serif; color:#ffffff;" target="_blank">BOOK NOW</a>
                </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="social" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="00228565-20cc-44a6-8867-4f1a277e9588">
    <tbody>
      <tr>
        <td valign="top" style="padding:30px 0px 0px 0px; font-size:6px; line-height:10px; background-color:#FFB349;" align="center">
          <table align="center" style="-webkit-margin-start:auto;-webkit-margin-end:auto;">
            <tbody><tr align="center"><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="https://www.facebook.com/sendgrid/" target="_blank" alt="Facebook" title="Facebook" style="display:inline-block; background-color:#404D8C; height:25px; width:25px;">
        <img role="social-icon" alt="Facebook" title="Facebook" src="https://mc.sendgrid.com/assets/social/white/facebook.png" style="height:25px; width:25px;" height="25" width="25">
      </a>
    </td><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="https://twitter.com/sendgrid" target="_blank" alt="Twitter" title="Twitter" style="display:inline-block; background-color:#404D8C; height:25px; width:25px;">
        <img role="social-icon" alt="Twitter" title="Twitter" src="https://mc.sendgrid.com/assets/social/white/twitter.png" style="height:25px; width:25px;" height="25" width="25">
      </a>
    </td><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="https://www.instagram.com/sendgrid/" target="_blank" alt="Instagram" title="Instagram" style="display:inline-block; background-color:#404D8C; height:25px; width:25px;">
        <img role="social-icon" alt="Instagram" title="Instagram" src="https://mc.sendgrid.com/assets/social/white/instagram.png" style="height:25px; width:25px;" height="25" width="25">
      </a>
    </td><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="https://www.pinterest.com/sendgrid/" target="_blank" alt="Pinterest" title="Pinterest" style="display:inline-block; background-color:#404D8C; height:25px; width:25px;">
        <img role="social-icon" alt="Pinterest" title="Pinterest" src="https://mc.sendgrid.com/assets/social/white/pinterest.png" style="height:25px; width:25px;" height="25" width="25">
      </a>
    </td><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="https://www.linkedin.com/company/sendgrid/" target="_blank" alt="LinkedIn" title="LinkedIn" style="display:inline-block; background-color:#404D8C; height:25px; width:25px;">
        <img role="social-icon" alt="LinkedIn" title="LinkedIn" src="https://mc.sendgrid.com/assets/social/white/linkedin.png" style="height:25px; width:25px;" height="25" width="25">
      </a>
    </td></tr></tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="background-color:#FFB349; color:#404D8C; font-size:12px; line-height:20px; padding:16px 16px 5px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5"><div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-family:lucida sans unicode,lucida grande,sans-serif; font-size:12px; line-height:20px;">{{Sender_Name}}</p><p style="font-family:lucida sans unicode,lucida grande,sans-serif; font-size:12px; line-height:20px;"><span class="Unsubscribe--senderAddress">{{Sender_Address}}</span>, <span class="Unsubscribe--senderCity">{{Sender_City}}</span>, <span class="Unsubscribe--senderState">{{Sender_State}}</span> <span class="Unsubscribe--senderZip">{{Sender_Zip}}</span></p></div><p style="font-family:lucida sans unicode,lucida grande,sans-serif; font-size:12px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="color:#F3F6FF;">Unsubscribe</a></p></div><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="0acf1c9a-9616-4586-aa54-a24c223ed970">
      <tbody>
        <tr>
          <td align="center" bgcolor="#FFB349" class="outer-td" style="padding:20px 0px 20px 0px; background-color:#FFB349;">
            <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
              <tbody>
                <tr>
                <td align="center" bgcolor="#F5F8FD" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                  <a href="https://sendgrid.com/" style="background-color:#F5F8FD; border:1px solid #F5F8FD; border-color:#F5F8FD; border-radius:25px; border-width:1px; color:#A8B9D5; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank">♥ POWERED BY TWILIO SENDGRID</a>
                </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table></td>
                                      </tr>
                                    </table>
                                    <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  </html>`,
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
