const styles = `
@-webkit-keyframes iyLoxj{0%{opacity:0.3;}50%{opacity:1;}100%{opacity:0.3;}} @keyframes iyLoxj{0%{opacity:0.3;}50%{opacity:1;}100%{opacity:0.3;}}
@import url("https://p.typekit.net/p.css?s=1&k=huf6cwu&ht=tk&f=5178.5310.10879.10880.10884.10885.15586.15587&a=13011269&app=typekit&e=css"); @font-face{font-family:"meta";src:url("https://use.typekit.net/af/25ecc8/00000000000000003b9b06f7/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/25ecc8/00000000000000003b9b06f7/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/25ecc8/00000000000000003b9b06f7/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");font-style:normal;font-weight:700;} @font-face{font-family:"meta";src:url("https://use.typekit.net/af/e05dc6/00000000000000003b9b06f2/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/e05dc6/00000000000000003b9b06f2/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/e05dc6/00000000000000003b9b06f2/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");font-style:normal;font-weight:500;} @font-face{font-family:"futura-pt";src:url("https://use.typekit.net/af/acc301/00000000000000000001008f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/acc301/00000000000000000001008f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/acc301/00000000000000000001008f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");font-style:normal;font-weight:500;} @font-face{font-family:"futura-pt";src:url("https://use.typekit.net/af/bb43f7/000000000000000000010090/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff2"),url("https://use.typekit.net/af/bb43f7/000000000000000000010090/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff"),url("https://use.typekit.net/af/bb43f7/000000000000000000010090/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("opentype");font-style:italic;font-weight:500;} @font-face{font-family:"futura-pt";src:url("https://use.typekit.net/af/0fe518/000000000000000000013365/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/0fe518/000000000000000000013365/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/0fe518/000000000000000000013365/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");font-style:normal;font-weight:400;} @font-face{font-family:"futura-pt";src:url("https://use.typekit.net/af/90af1a/000000000000000000010095/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/90af1a/000000000000000000010095/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/90af1a/000000000000000000010095/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");font-style:italic;font-weight:400;} @font-face{font-family:"futura-pt";src:url("https://use.typekit.net/af/670570/000000000000000000012192/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/670570/000000000000000000012192/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/670570/000000000000000000012192/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");font-style:normal;font-weight:600;} @font-face{font-family:"futura-pt";src:url("https://use.typekit.net/af/9a613b/000000000000000000012193/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff2"),url("https://use.typekit.net/af/9a613b/000000000000000000012193/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff"),url("https://use.typekit.net/af/9a613b/000000000000000000012193/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("opentype");font-style:italic;font-weight:600;} @font-face{font-family:'-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif;font-weight:400;font-style:normal;} *,*:before,*:after{box-sizing:inherit;margin:0;padding:0;font-size:inherit;} :root{-ms-overflow-style:-ms-autohiding-scrollbar;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;cursor:default;font-size:0.625rem;line-height:1.4;} body{font-family:'futura-pt', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif;font-size:1.6rem;margin:0;color:#111216;font-weight:400;}


div,
		p,
		a,
		li,
		td {
			-webkit-text-size-adjust: none;
		}

		* {
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}

  a {
    color: #7a8085;
  }


  body {
    width: 100% !important;
    min-width: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    margin: 0;
    Margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;

  }

  img {
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
    width: auto;
    max-width: 100%;
    clear: both;
    display: block;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
  
  td {
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
    border-collapse: collapse !important;
  }
  
  table, tr, td {
    padding: 0;
    vertical-align: top;
    text-align: left;
  }


@media only screen {
  html {
    min-height: 100%;
    background: #fff; } }

table.body {
  background: #fff;
  height: 100%;
  width: 100%; }

table.container {
  background: #fff;
  width: 580px;
  margin: 0 auto;
  Margin: 0 auto;
  text-align: inherit; }

table.row {
  padding: 0;
  width: 100%;
  position: relative; }

table.spacer {
  width: 100%; }
  table.spacer td {
    mso-line-height-rule: exactly; }

@media only screen and (max-width: 596px) {
  table.body table.container .hide-for-large,
  table.body table.container .row.hide-for-large {
    display: table !important;
    width: 100% !important; } }

@media only screen and (max-width: 596px) {
  table.body table.container .callout-inner.hide-for-large {
    display: table-cell !important;
    width: 100% !important; } }

@media only screen and (max-width: 596px) {
  table.body table.container .show-for-large {
    display: none !important;
    width: 0;
    mso-hide: all;
    overflow: hidden; } }

body,
table.body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
td,
th,
a {
  color: #111216;
  font-family: 'futura-pt', Helvetica, Arial, sans-serif;
  font-weight: normal;
  padding: 0;
  margin: 0;
  Margin: 0;
  text-align: left;
  line-height: 1.3; }F

h1,
h2,
h3,
h4,
h5,
h6 {
  color: inherit;
  word-wrap: normal;
  font-family: 'futura-pt', Helvetica, Arial, sans-serif;
  font-weight: normal;
  margin-bottom: 10px;
  Margin-bottom: 10px; }

h1 {
  font-size: 34px; }

h2 {
  font-size: 30px; }

h3 {
  font-size: 28px; }

h4 {
  font-size: 24px; }

h5 {
  font-size: 20px; }

h6 {
  font-size: 18px; }

body,
table.body,
p,
td,
th {
  font-size: 16px;
  line-height: 1.3; }

p {
  margin-bottom: 10px;
  Margin-bottom: 10px; }

a {
  color: #2199e8;
  text-decoration: none; }


@media only screen and (max-width: 596px) {
  table.body img {
    width: auto;
    height: auto; }
  table.body center {
    min-width: 0 !important; }
  table.body .container {
    width: 95% !important; }

    @media only screen and (max-width: 600px) {
      body {
        width: auto!important;
      }

    @media only screen and (max-width: 479px) {
			body {
				width: auto!important;
			}
		}
  }
  

  div,
  p,
  a,
  li,
  td {
      -webkit-text-size-adjust: none;
      -ms-text-size-adjust: none;
  }

  img {
      -ms-interpolation-mode:bicubic;
      border: 0;
      line-height: 100%;
      outline: none;
      text-decoration: none;
  }

  #outlook a {
      padding: 0;
  }

  table td {
      border-collapse:collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
  }

  table {
      margin: 0 auto;
  }

  a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
  }

  @media screen and (device-width: 768px) and (device-height: 1024px) {
      body {
          min-width: 701px !important;
      }
  }

/* Email general classes */
  a[href^=tel]{
      color: inherit;
      text-decoration: none;
  }

  a.link:hover {
      text-decoration: underline !important;
  }

  .noDecoration- {
      text-decoration: none !important;
  }

  .im { 
    color: #111216 !important; 
    } 

  @media screen and (max-width:699px) {
      .widthFull- {
          width: 100% !important;
      }
  }

`;

export default styles;
