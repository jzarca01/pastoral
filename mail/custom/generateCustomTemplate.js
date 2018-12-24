export default ({
  title,
  bodyContent,
  previewText,
  headCSS = '',
  bgColor = '#FFFFFF',
  lang,
  dir = 'ltr' /* https://www.w3.org/TR/html4/struct/dirlang.html#blocklevel-bidi */
}) => {
  if (!title) {
    throw new Error('`title` is a required option for `renderTemplate`');
  } else if (!bodyContent) {
    throw new Error('`bodyContent` is a required option for `renderTemplate`');
  } else if (!previewText) {
    throw new Error('`previewText` is a required option for `renderTemplate`');
  }

  return `
    <!doctype html>
      <html
        ${lang ? 'lang="' + lang + '"' : ''}
        dir="${dir}"
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
      >
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="x-apple-disable-message-reformatting">
          <meta name="viewport" content="width=device-width, initial-scale=1">

          <title>${title}</title>

          <style type="text/css">
            @import url("https://use.typekit.net/huf6cwu.css);
    
            @font-face {
              font-family:"futura-pt";
              src:url("https://use.typekit.net/af/9b05f3/000000000000000000013365/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/9b05f3/000000000000000000013365/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/9b05f3/000000000000000000013365/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
              font-style:normal;
              font-weight:400;
            }
            
            @font-face {
              font-family:"futura-pt";
              src:url("https://use.typekit.net/af/cf3e4e/000000000000000000010095/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/cf3e4e/000000000000000000010095/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/cf3e4e/000000000000000000010095/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
              font-style:italic;
              font-weight:400;
            }
          </style>


          <style type="text/css">
            ${headCSS}

            #bodyCell{
              padding:10px;
            }



            #__bodyTable__ {
              margin: 0;
              padding: 0;
              width: 100% !important;
            }
          </style>

          <!--[if gte mso 15]>
          <xml>
              <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->

          <!--[if gte mso 9]>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          <![endif]-->

        <style>
          table{
            border-collapse:collapse;
          }
          h1,h2,h3,h4,h5,h6{
            display:block;
            margin:0;
            padding:0;
          }

          img {
            width: 100% !important;
          }

          img,a img{
            border:0;
            height:auto;
            outline:none;
            text-decoration:none;
          }
          body,#bodyTable,#bodyCell{
            height:100%;
            margin:0;
            padding:0;
            width:100%;
          }
          .mcnPreviewText{
            display:none !important;
          }
          #outlook a{
            padding:0;
          }
          img{
            -ms-interpolation-mode:bicubic;
          }
          table{
            mso-table-lspace:0pt;
            mso-table-rspace:0pt;
          }

          .ReadMsgBody{
            width:100%;
          }

          .ExternalClass{
            width:100%;
          }

          p,a,li,td,blockquote{
            mso-line-height-rule:exactly;
          }

          a[href^=tel],a[href^=sms]{
            color:inherit;
            cursor:default;
            text-decoration:none;
          }

          p,a,li,td,body,table,blockquote {
            -ms-text-size-adjust:100%;
            -webkit-text-size-adjust:100%;
          }

          .ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
            line-height:100%;
          }

          a[x-apple-data-detectors]{
            color:inherit !important;
            text-decoration:none !important;
            font-size:inherit !important;
            font-family:inherit !important;
            font-weight:inherit !important;
            line-height:inherit !important;
          }

          @media only screen and (max-width: 480px){
            .rowContent {
              padding-right:18px !important;
              padding-left:18px !important;
            }
          } 
        
          @media only screen and (max-width: 480px){
            body{
              width:100% !important;
              min-width:100% !important;
            }
          }

          
          
          @media only screen and (max-width: 480px){
            .rowTextContent p, .email-row {
              font-size:16px !important;
              line-height:150% !important;
              word-break: break-word;
            }
          }

          @media only screen and (max-width: 1024px){
           * {
              -webkit-text-size-adjust:none !important;
            }
            
            body,table,td,p,a,li,blockquote {
              -webkit-text-size-adjust:none !important;
            }
          }

        </style>


        </head>
        <body bgcolor="${bgColor}" width="100%" style="-webkit-font-smoothing: antialiased; width:100% !important; background:${bgColor};-ms-text-size-adjust: 100%;-webkit-text-size-adjust:100%; margin:0; padding:0; min-width:100%; direction: ${dir};">
          <table bgcolor="${bgColor}" id="__bodyTable__" width="100%" style="-webkit-font-smoothing: antialiased; width:100% !important; background:${bgColor};-webkit-text-size-adjust:100%; margin:0; padding:0; min-width:100%">
            <tr>
              <td align="center" id="bodyCell">
                <!-- BEGIN TEMPLATE // -->
                <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:100%; max-width: 600px;">
                <tr>
                <td align="center" valign="top" width="600" style="width:600px;">
                <![endif]-->
                <span style="display: none !important; color: ${bgColor}; margin:0; padding:0; font-size:1px; line-height:1px;">${previewText}</span>
                ${bodyContent}
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
};
