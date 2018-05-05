const styles = `
@-webkit-keyframes iyLoxj{0%{opacity:0.3;}50%{opacity:1;}100%{opacity:0.3;}} @keyframes iyLoxj{0%{opacity:0.3;}50%{opacity:1;}100%{opacity:0.3;}}
@import url("https://p.typekit.net/p.css?s=1&k=huf6cwu&ht=tk&f=5178.5310.10879.10880.10884.10885.15586.15587&a=13011269&app=typekit&e=css"); @font-face{font-family:"meta";src:url("https://use.typekit.net/af/25ecc8/00000000000000003b9b06f7/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/25ecc8/00000000000000003b9b06f7/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/25ecc8/00000000000000003b9b06f7/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");font-style:normal;font-weight:700;} @font-face{font-family:"meta";src:url("https://use.typekit.net/af/e05dc6/00000000000000003b9b06f2/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/e05dc6/00000000000000003b9b06f2/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/e05dc6/00000000000000003b9b06f2/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");font-style:normal;font-weight:500;} @font-face{font-family:"futura-pt";src:url("https://use.typekit.net/af/acc301/00000000000000000001008f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/acc301/00000000000000000001008f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/acc301/00000000000000000001008f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");font-style:normal;font-weight:500;} @font-face{font-family:"futura-pt";src:url("https://use.typekit.net/af/bb43f7/000000000000000000010090/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff2"),url("https://use.typekit.net/af/bb43f7/000000000000000000010090/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff"),url("https://use.typekit.net/af/bb43f7/000000000000000000010090/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("opentype");font-style:italic;font-weight:500;} @font-face{font-family:"futura-pt";src:url("https://use.typekit.net/af/0fe518/000000000000000000013365/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/0fe518/000000000000000000013365/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/0fe518/000000000000000000013365/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");font-style:normal;font-weight:400;} @font-face{font-family:"futura-pt";src:url("https://use.typekit.net/af/90af1a/000000000000000000010095/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/90af1a/000000000000000000010095/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/90af1a/000000000000000000010095/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");font-style:italic;font-weight:400;} @font-face{font-family:"futura-pt";src:url("https://use.typekit.net/af/670570/000000000000000000012192/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/670570/000000000000000000012192/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/670570/000000000000000000012192/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");font-style:normal;font-weight:600;} @font-face{font-family:"futura-pt";src:url("https://use.typekit.net/af/9a613b/000000000000000000012193/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff2"),url("https://use.typekit.net/af/9a613b/000000000000000000012193/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff"),url("https://use.typekit.net/af/9a613b/000000000000000000012193/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("opentype");font-style:italic;font-weight:600;} @font-face{font-family:'-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif;font-weight:400;font-style:normal;} .tk-meta{font-family:"meta",serif;} .tk-futura-pt{font-family:"futura-pt",sans-serif;} *,*:before,*:after{box-sizing:inherit;margin:0;padding:0;font-size:inherit;} :root{-ms-overflow-style:-ms-autohiding-scrollbar;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;cursor:default;font-size:0.625rem;line-height:1.4;} body{font-family:'futura-pt', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif;font-size:1.6rem;margin:0;color:#111216;font-weight:400;}



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

table.container table.row {
  display: table; }

td.columns,
td.column,
th.columns,
th.column {
  margin: 0 auto;
  Margin: 0 auto;
  padding-left: 16px;
  padding-bottom: 16px; }
  td.columns .column,
  td.columns .columns,
  td.column .column,
  td.column .columns,
  th.columns .column,
  th.columns .columns,
  th.column .column,
  th.column .columns {
    padding-left: 0 !important;
    padding-right: 0 !important; }
    td.columns .column center,
    td.columns .columns center,
    td.column .column center,
    td.column .columns center,
    th.columns .column center,
    th.columns .columns center,
    th.column .column center,
    th.column .columns center {
      min-width: none !important; }

td.columns.last,
td.column.last,
th.columns.last,
th.column.last {
  padding-right: 16px; }

td.columns table:not(.button),
td.column table:not(.button),
th.columns table:not(.button),
th.column table:not(.button) {
  width: 100%; }

td.large-1,
th.large-1 {
  width: 32.33333px;
  padding-left: 8px;
  padding-right: 8px; }

td.large-1.first,
th.large-1.first {
  padding-left: 16px; }

td.large-1.last,
th.large-1.last {
  padding-right: 16px; }

.collapse > tbody > tr > td.large-1,
.collapse > tbody > tr > th.large-1 {
  padding-right: 0;
  padding-left: 0;
  width: 48.33333px; }

.collapse td.large-1.first,
.collapse th.large-1.first,
.collapse td.large-1.last,
.collapse th.large-1.last {
  width: 56.33333px; }

td.large-1 center,
th.large-1 center {
  min-width: 0.33333px; }

.body .columns td.large-1,
.body .column td.large-1,
.body .columns th.large-1,
.body .column th.large-1 {
  width: 8.33333%; }

td.large-2,
th.large-2 {
  width: 80.66667px;
  padding-left: 8px;
  padding-right: 8px; }

td.large-2.first,
th.large-2.first {
  padding-left: 16px; }

td.large-2.last,
th.large-2.last {
  padding-right: 16px; }

.collapse > tbody > tr > td.large-2,
.collapse > tbody > tr > th.large-2 {
  padding-right: 0;
  padding-left: 0;
  width: 96.66667px; }

.collapse td.large-2.first,
.collapse th.large-2.first,
.collapse td.large-2.last,
.collapse th.large-2.last {
  width: 104.66667px; }

td.large-2 center,
th.large-2 center {
  min-width: 48.66667px; }

.body .columns td.large-2,
.body .column td.large-2,
.body .columns th.large-2,
.body .column th.large-2 {
  width: 16.66667%; }

td.large-3,
th.large-3 {
  width: 129px;
  padding-left: 8px;
  padding-right: 8px; }

td.large-3.first,
th.large-3.first {
  padding-left: 16px; }

td.large-3.last,
th.large-3.last {
  padding-right: 16px; }

.collapse > tbody > tr > td.large-3,
.collapse > tbody > tr > th.large-3 {
  padding-right: 0;
  padding-left: 0;
  width: 145px; }

.collapse td.large-3.first,
.collapse th.large-3.first,
.collapse td.large-3.last,
.collapse th.large-3.last {
  width: 153px; }

td.large-3 center,
th.large-3 center {
  min-width: 97px; }

.body .columns td.large-3,
.body .column td.large-3,
.body .columns th.large-3,
.body .column th.large-3 {
  width: 25%; }

td.large-4,
th.large-4 {
  width: 177.33333px;
  padding-left: 8px;
  padding-right: 8px; }

td.large-4.first,
th.large-4.first {
  padding-left: 16px; }

td.large-4.last,
th.large-4.last {
  padding-right: 16px; }

.collapse > tbody > tr > td.large-4,
.collapse > tbody > tr > th.large-4 {
  padding-right: 0;
  padding-left: 0;
  width: 193.33333px; }

.collapse td.large-4.first,
.collapse th.large-4.first,
.collapse td.large-4.last,
.collapse th.large-4.last {
  width: 201.33333px; }

td.large-4 center,
th.large-4 center {
  min-width: 145.33333px; }

.body .columns td.large-4,
.body .column td.large-4,
.body .columns th.large-4,
.body .column th.large-4 {
  width: 33.33333%; }

td.large-5,
th.large-5 {
  width: 225.66667px;
  padding-left: 8px;
  padding-right: 8px; }

td.large-5.first,
th.large-5.first {
  padding-left: 16px; }

td.large-5.last,
th.large-5.last {
  padding-right: 16px; }

.collapse > tbody > tr > td.large-5,
.collapse > tbody > tr > th.large-5 {
  padding-right: 0;
  padding-left: 0;
  width: 241.66667px; }

.collapse td.large-5.first,
.collapse th.large-5.first,
.collapse td.large-5.last,
.collapse th.large-5.last {
  width: 249.66667px; }

td.large-5 center,
th.large-5 center {
  min-width: 193.66667px; }

.body .columns td.large-5,
.body .column td.large-5,
.body .columns th.large-5,
.body .column th.large-5 {
  width: 41.66667%; }

td.large-6,
th.large-6 {
  width: 274px;
  padding-left: 8px;
  padding-right: 8px; }

td.large-6.first,
th.large-6.first {
  padding-left: 16px; }

td.large-6.last,
th.large-6.last {
  padding-right: 16px; }

.collapse > tbody > tr > td.large-6,
.collapse > tbody > tr > th.large-6 {
  padding-right: 0;
  padding-left: 0;
  width: 290px; }

.collapse td.large-6.first,
.collapse th.large-6.first,
.collapse td.large-6.last,
.collapse th.large-6.last {
  width: 298px; }

td.large-6 center,
th.large-6 center {
  min-width: 242px; }

.body .columns td.large-6,
.body .column td.large-6,
.body .columns th.large-6,
.body .column th.large-6 {
  width: 50%; }

td.large-7,
th.large-7 {
  width: 322.33333px;
  padding-left: 8px;
  padding-right: 8px; }

td.large-7.first,
th.large-7.first {
  padding-left: 16px; }

td.large-7.last,
th.large-7.last {
  padding-right: 16px; }

.collapse > tbody > tr > td.large-7,
.collapse > tbody > tr > th.large-7 {
  padding-right: 0;
  padding-left: 0;
  width: 338.33333px; }

.collapse td.large-7.first,
.collapse th.large-7.first,
.collapse td.large-7.last,
.collapse th.large-7.last {
  width: 346.33333px; }

td.large-7 center,
th.large-7 center {
  min-width: 290.33333px; }

.body .columns td.large-7,
.body .column td.large-7,
.body .columns th.large-7,
.body .column th.large-7 {
  width: 58.33333%; }

td.large-8,
th.large-8 {
  width: 370.66667px;
  padding-left: 8px;
  padding-right: 8px; }

td.large-8.first,
th.large-8.first {
  padding-left: 16px; }

td.large-8.last,
th.large-8.last {
  padding-right: 16px; }

.collapse > tbody > tr > td.large-8,
.collapse > tbody > tr > th.large-8 {
  padding-right: 0;
  padding-left: 0;
  width: 386.66667px; }

.collapse td.large-8.first,
.collapse th.large-8.first,
.collapse td.large-8.last,
.collapse th.large-8.last {
  width: 394.66667px; }

td.large-8 center,
th.large-8 center {
  min-width: 338.66667px; }

.body .columns td.large-8,
.body .column td.large-8,
.body .columns th.large-8,
.body .column th.large-8 {
  width: 66.66667%; }

td.large-9,
th.large-9 {
  width: 419px;
  padding-left: 8px;
  padding-right: 8px; }

td.large-9.first,
th.large-9.first {
  padding-left: 16px; }

td.large-9.last,
th.large-9.last {
  padding-right: 16px; }

.collapse > tbody > tr > td.large-9,
.collapse > tbody > tr > th.large-9 {
  padding-right: 0;
  padding-left: 0;
  width: 435px; }

.collapse td.large-9.first,
.collapse th.large-9.first,
.collapse td.large-9.last,
.collapse th.large-9.last {
  width: 443px; }

td.large-9 center,
th.large-9 center {
  min-width: 387px; }

.body .columns td.large-9,
.body .column td.large-9,
.body .columns th.large-9,
.body .column th.large-9 {
  width: 75%; }

td.large-10,
th.large-10 {
  width: 467.33333px;
  padding-left: 8px;
  padding-right: 8px; }

td.large-10.first,
th.large-10.first {
  padding-left: 16px; }

td.large-10.last,
th.large-10.last {
  padding-right: 16px; }

.collapse > tbody > tr > td.large-10,
.collapse > tbody > tr > th.large-10 {
  padding-right: 0;
  padding-left: 0;
  width: 483.33333px; }

.collapse td.large-10.first,
.collapse th.large-10.first,
.collapse td.large-10.last,
.collapse th.large-10.last {
  width: 491.33333px; }

td.large-10 center,
th.large-10 center {
  min-width: 435.33333px; }

.body .columns td.large-10,
.body .column td.large-10,
.body .columns th.large-10,
.body .column th.large-10 {
  width: 83.33333%; }

td.large-11,
th.large-11 {
  width: 515.66667px;
  padding-left: 8px;
  padding-right: 8px; }

td.large-11.first,
th.large-11.first {
  padding-left: 16px; }

td.large-11.last,
th.large-11.last {
  padding-right: 16px; }

.collapse > tbody > tr > td.large-11,
.collapse > tbody > tr > th.large-11 {
  padding-right: 0;
  padding-left: 0;
  width: 531.66667px; }

.collapse td.large-11.first,
.collapse th.large-11.first,
.collapse td.large-11.last,
.collapse th.large-11.last {
  width: 539.66667px; }

td.large-11 center,
th.large-11 center {
  min-width: 483.66667px; }

.body .columns td.large-11,
.body .column td.large-11,
.body .columns th.large-11,
.body .column th.large-11 {
  width: 91.66667%; }

td.large-12,
th.large-12 {
  width: 564px;
  padding-left: 8px;
  padding-right: 8px; }

td.large-12.first,
th.large-12.first {
  padding-left: 16px; }

td.large-12.last,
th.large-12.last {
  padding-right: 16px; }

.collapse > tbody > tr > td.large-12,
.collapse > tbody > tr > th.large-12 {
  padding-right: 0;
  padding-left: 0;
  width: 580px; }

.collapse td.large-12.first,
.collapse th.large-12.first,
.collapse td.large-12.last,
.collapse th.large-12.last {
  width: 588px; }

td.large-12 center,
th.large-12 center {
  min-width: 532px; }

.body .columns td.large-12,
.body .column td.large-12,
.body .columns th.large-12,
.body .column th.large-12 {
  width: 100%; }

td.large-offset-1,
td.large-offset-1.first,
td.large-offset-1.last,
th.large-offset-1,
th.large-offset-1.first,
th.large-offset-1.last {
  padding-left: 64.33333px; }

td.large-offset-2,
td.large-offset-2.first,
td.large-offset-2.last,
th.large-offset-2,
th.large-offset-2.first,
th.large-offset-2.last {
  padding-left: 112.66667px; }

td.large-offset-3,
td.large-offset-3.first,
td.large-offset-3.last,
th.large-offset-3,
th.large-offset-3.first,
th.large-offset-3.last {
  padding-left: 161px; }

td.large-offset-4,
td.large-offset-4.first,
td.large-offset-4.last,
th.large-offset-4,
th.large-offset-4.first,
th.large-offset-4.last {
  padding-left: 209.33333px; }

td.large-offset-5,
td.large-offset-5.first,
td.large-offset-5.last,
th.large-offset-5,
th.large-offset-5.first,
th.large-offset-5.last {
  padding-left: 257.66667px; }

td.large-offset-6,
td.large-offset-6.first,
td.large-offset-6.last,
th.large-offset-6,
th.large-offset-6.first,
th.large-offset-6.last {
  padding-left: 306px; }

td.large-offset-7,
td.large-offset-7.first,
td.large-offset-7.last,
th.large-offset-7,
th.large-offset-7.first,
th.large-offset-7.last {
  padding-left: 354.33333px; }

td.large-offset-8,
td.large-offset-8.first,
td.large-offset-8.last,
th.large-offset-8,
th.large-offset-8.first,
th.large-offset-8.last {
  padding-left: 402.66667px; }

td.large-offset-9,
td.large-offset-9.first,
td.large-offset-9.last,
th.large-offset-9,
th.large-offset-9.first,
th.large-offset-9.last {
  padding-left: 451px; }

td.large-offset-10,
td.large-offset-10.first,
td.large-offset-10.last,
th.large-offset-10,
th.large-offset-10.first,
th.large-offset-10.last {
  padding-left: 499.33333px; }

td.large-offset-11,
td.large-offset-11.first,
td.large-offset-11.last,
th.large-offset-11,
th.large-offset-11.first,
th.large-offset-11.last {
  padding-left: 547.66667px; }

td.expander,
th.expander {
  visibility: hidden;
  width: 0;
  padding: 0 !important; }

table.container.radius {
  border-radius: 0;
  border-collapse: separate; }

.block-grid {
  width: 100%;
  max-width: 580px; }
  .block-grid td {
    display: inline-block;
    padding: 8px; }

.up-2 td {
  width: 274px !important; }

.up-3 td {
  width: 177px !important; }

.up-4 td {
  width: 129px !important; }

.up-5 td {
  width: 100px !important; }

.up-6 td {
  width: 80px !important; }

.up-7 td {
  width: 66px !important; }

.up-8 td {
  width: 56px !important; }

table.text-center,
th.text-center,
td.text-center,
h1.text-center,
h2.text-center,
h3.text-center,
h4.text-center,
h5.text-center,
h6.text-center,
p.text-center,
span.text-center {
  text-align: center; }

table.text-left,
th.text-left,
td.text-left,
h1.text-left,
h2.text-left,
h3.text-left,
h4.text-left,
h5.text-left,
h6.text-left,
p.text-left,
span.text-left {
  text-align: left; }

table.text-right,
th.text-right,
td.text-right,
h1.text-right,
h2.text-right,
h3.text-right,
h4.text-right,
h5.text-right,
h6.text-right,
p.text-right,
span.text-right {
  text-align: right; }

span.text-center {
  display: block;
  width: 100%;
  text-align: center; }

@media only screen and (max-width: 596px) {
  .small-float-center {
    margin: 0 auto !important;
    float: none !important;
    text-align: center !important; }
  .small-text-center {
    text-align: center !important; }
  .small-text-left {
    text-align: left !important; }
  .small-text-right {
    text-align: right !important; } }

img.float-left {
  float: left;
  text-align: left; }

img.float-right {
  float: right;
  text-align: right; }

img.float-center,
img.text-center {
  margin: 0 auto;
  Margin: 0 auto;
  float: none;
  text-align: center; }

table.float-center,
td.float-center,
th.float-center {
  margin: 0 auto;
  Margin: 0 auto;
  float: none;
  text-align: center; }

.hide-for-large {
  display: none !important;
  mso-hide: all;
  overflow: hidden;
  max-height: 0;
  font-size: 0;
  width: 0;
  line-height: 0; }
  @media only screen and (max-width: 596px) {
    .hide-for-large {
      display: block !important;
      width: auto !important;
      overflow: visible !important;
      max-height: none !important;
      font-size: inherit !important;
      line-height: inherit !important; } }

table.body table.container .hide-for-large * {
  mso-hide: all; }

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
  font-family: Helvetica, Arial, sans-serif;
  font-weight: normal;
  padding: 0;
  margin: 0;
  Margin: 0;
  text-align: left;
  line-height: 1.3; }

h1,
h2,
h3,
h4,
h5,
h6 {
  color: inherit;
  word-wrap: normal;
  font-family: Helvetica, Arial, sans-serif;
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
  p.lead {
    font-size: 20px;
    line-height: 1.6; }
  p.subheader {
    margin-top: 4px;
    margin-bottom: 8px;
    Margin-top: 4px;
    Margin-bottom: 8px;
    font-weight: normal;
    line-height: 1.4;
    color: #8a8a8a; }

small {
  font-size: 80%;
  color: #cacaca; }

a {
  color: #2199e8;
  text-decoration: none; }
  a:hover {
    color: #147dc2; }
  a:active {
    color: #147dc2; }
  a:visited {
    color: #2199e8; }

pre {
  background: #fff;
  margin: 30px 0;
  Margin: 30px 0; }
  pre code {
    color: #cacaca; }
    pre code span.callout {
      color: #8a8a8a;
      font-weight: bold; }
    pre code span.callout-strong {
      color: #ff6908;
      font-weight: bold; }

table.hr {
  width: 100%; }
  table.hr th {
    height: 0;
    max-width: 580px;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid #0a0a0a;
    border-left: 0;
    margin: 20px auto;
    Margin: 20px auto;
    clear: both; }

.stat {
  font-size: 40px;
  line-height: 1; }
  p + .stat {
    margin-top: -16px;
    Margin-top: -16px; }

span.preheader {
  display: none !important;
  visibility: hidden;
  mso-hide: all !important;
  font-size: 1px;
  color: #fff;
  line-height: 1px;
  max-height: 0px;
  max-width: 0px;
  opacity: 0;
  overflow: hidden; }

table.menu.text-center a {
  text-align: center; }

.menu[align="center"] {
  width: auto !important; }

body.outlook p {
  display: inline !important; }

@media only screen and (max-width: 596px) {
  table.body img {
    width: auto;
    height: auto; }
  table.body center {
    min-width: 0 !important; }
  table.body .container {
    width: 95% !important; }
  table.body .columns,
  table.body .column {
    height: auto !important;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 16px !important;
    padding-right: 16px !important; }
    table.body .columns .column,
    table.body .columns .columns,
    table.body .column .column,
    table.body .column .columns {
      padding-left: 0 !important;
      padding-right: 0 !important; }
  table.body .collapse .columns,
  table.body .collapse .column {
    padding-left: 0 !important;
    padding-right: 0 !important; }
  td.small-1,
  th.small-1 {
    display: inline-block !important;
    width: 8.33333% !important; }
  td.small-2,
  th.small-2 {
    display: inline-block !important;
    width: 16.66667% !important; }
  td.small-3,
  th.small-3 {
    display: inline-block !important;
    width: 25% !important; }
  td.small-4,
  th.small-4 {
    display: inline-block !important;
    width: 33.33333% !important; }
  td.small-5,
  th.small-5 {
    display: inline-block !important;
    width: 41.66667% !important; }
  td.small-6,
  th.small-6 {
    display: inline-block !important;
    width: 50% !important; }
  td.small-7,
  th.small-7 {
    display: inline-block !important;
    width: 58.33333% !important; }
  td.small-8,
  th.small-8 {
    display: inline-block !important;
    width: 66.66667% !important; }
  td.small-9,
  th.small-9 {
    display: inline-block !important;
    width: 75% !important; }
  td.small-10,
  th.small-10 {
    display: inline-block !important;
    width: 83.33333% !important; }
  td.small-11,
  th.small-11 {
    display: inline-block !important;
    width: 91.66667% !important; }
  td.small-12,
  th.small-12 {
    display: inline-block !important;
    width: 100% !important; }
  .columns td.small-12,
  .column td.small-12,
  .columns th.small-12,
  .column th.small-12 {
    display: block !important;
    width: 100% !important; }
  table.body td.small-offset-1,
  table.body th.small-offset-1 {
    margin-left: 8.33333% !important;
    Margin-left: 8.33333% !important; }
  table.body td.small-offset-2,
  table.body th.small-offset-2 {
    margin-left: 16.66667% !important;
    Margin-left: 16.66667% !important; }
  table.body td.small-offset-3,
  table.body th.small-offset-3 {
    margin-left: 25% !important;
    Margin-left: 25% !important; }
  table.body td.small-offset-4,
  table.body th.small-offset-4 {
    margin-left: 33.33333% !important;
    Margin-left: 33.33333% !important; }
  table.body td.small-offset-5,
  table.body th.small-offset-5 {
    margin-left: 41.66667% !important;
    Margin-left: 41.66667% !important; }
  table.body td.small-offset-6,
  table.body th.small-offset-6 {
    margin-left: 50% !important;
    Margin-left: 50% !important; }
  table.body td.small-offset-7,
  table.body th.small-offset-7 {
    margin-left: 58.33333% !important;
    Margin-left: 58.33333% !important; }
  table.body td.small-offset-8,
  table.body th.small-offset-8 {
    margin-left: 66.66667% !important;
    Margin-left: 66.66667% !important; }
  table.body td.small-offset-9,
  table.body th.small-offset-9 {
    margin-left: 75% !important;
    Margin-left: 75% !important; }
  table.body td.small-offset-10,
  table.body th.small-offset-10 {
    margin-left: 83.33333% !important;
    Margin-left: 83.33333% !important; }
  table.body td.small-offset-11,
  table.body th.small-offset-11 {
    margin-left: 91.66667% !important;
    Margin-left: 91.66667% !important; }
  table.body table.columns td.expander,
  table.body table.columns th.expander {
    display: none !important; }
  table.body .right-text-pad,
  table.body .text-pad-right {
    padding-left: 10px !important; }
  table.body .left-text-pad,
  table.body .text-pad-left {
    padding-right: 10px !important; }








    @media only screen and (max-width: 640px) {
      body {
        width: auto!important;
      }
      table[class=full2] {
        width: 100%!important;
        clear: both;
      }
      table[class=mobile2] {
        width: 100%!important;
        padding-left: 20px;
        padding-right: 20px;
        clear: both;
      }
      table[class=fullCenter2] {
        width: 100%!important;
        text-align: center!important;
        clear: both;
      }
      td[class=fullCenter2] {
        width: 100%!important;
        text-align: center!important;
        clear: both;
      }
      td[class=pad15] {
        width: 100%!important;
        padding-left: 15px;
        padding-right: 15px;
        clear: both;
      }
    }


    @media only screen and (max-width: 479px) {
			body {
				width: auto!important;
			}
			table[class=full2] {
				width: 100%!important;
				clear: both;
			}
			table[class=mobile2] {
				width: 100%!important;
				padding-left: 20px;
				padding-right: 20px;
				clear: both;
			}
			table[class=fullCenter2] {
				width: 100%!important;
				text-align: center!important;
				clear: both;
			}
			td[class=fullCenter2] {
				width: 100%!important;
				text-align: center!important;
				clear: both;
			}
			table[class=full] {
				width: 100%!important;
				clear: both;
			}
			table[class=mobile] {
				width: 100%!important;
				padding-left: 20px;
				padding-right: 20px;
				clear: both;
			}
			table[class=fullCenter] {
				width: 100%!important;
				text-align: center!important;
				clear: both;
			}
			td[class=fullCenter] {
				width: 100%!important;
				text-align: center!important;
				clear: both;
			}
			td[class=pad15] {
				width: 100%!important;
				padding-left: 15px;
				padding-right: 15px;
				clear: both;
			}
			.erase {
				display: none;
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

  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
      width: 100%;
      line-height: 100%;
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

  .ReadMsgBody {
      width: 100%;
  }

     .myButton {
      background-color:#efb22d;
      -moz-border-radius:29px;
      -webkit-border-radius:29px;
      border-radius:0px;
      display:inline-block;
      cursor:pointer;
      color:#ffffff;
      font-family:'Varela Round', Arial, sans-serif;
      font-size:17px;
      padding:10px 14px;
      text-decoration:none;
      text-align: center;

  }
  .myButton:hover {
      background-color:#27404e;
  }
  .myButton:active {
      position:relative;
      top:1px;
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

  @media screen and (max-width:699px) {
      .widthFull- {
          width: 100% !important;
      }
  }

  
`;

export default styles;
