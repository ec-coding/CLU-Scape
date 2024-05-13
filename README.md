<p align="center">
</p>
<p align="center">
<img src="https://github.com/ec-coding/CLU-Scape/blob/main/img/clu-scape%20preview.gif" width="75%">
</p>
<h2 align="center">A MongoDB-CRUD web app inspired by TRON: Legacy</h2>
<p align="center">
A full-stack CRUD app that links with MongoDB to read and update quote entries made by the user. 
<br>Inspired by the film: TRON: Legacy.
</p>
<p align="center">
<h3 align="center"><a href="https://clu-scape.cyclic.app/" target="_blank" rel="noreferrer">Website</a></h3>
</p>
<p align="center">
Wallpaper by: <a href="https://www.deviantart.com/sarah-hextall-design/art/Tron-Grid-Wallpaper-1680x1050-264192187" target="_blank" rel="noreferrer">Sarah-Hextall-Design</a>
</p>

## How It's Made:

**Tech used:**
    <img src="https://img.shields.io/static/v1?label=|&message=HTML5&color=285f65&style=plastic&logo=html5"/>
    <img src="https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=plastic&logo=css3"/>
    <img src="https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=3c7f5d&style=plastic&logo=javascript"/>
    <img src="https://img.shields.io/static/v1?label=|&message=BOOTSTRAP&color=316c5e&style=plastic&logo=bootstrap"/>
    <img src="https://img.shields.io/static/v1?label=|&message=NODE.JS&color=cdf998&style=plastic&logo=node.js"/>	
    <img src="https://img.shields.io/static/v1?label=|&message=MONGO-DB&color=cdd148&style=plastic&logo=mongodb"/>
    <img src="https://img.shields.io/static/v1?label=|&message=EXPRESS&color=bbb111&style=plastic&logo=express"/>

## Optimizations
- Add additional update operations to identify & replace additional quote entries.
- Integrate animations upon html element refresh.
- Enable mobile-friendly viewports.

## Lessons Learned:
- EJS (Embedded JavaScript)
    - Using template engine-specific syntax to generate additional HTML via JavaScript

- CSS
    - Experimented with box shadows and background image integration
    - Tested font imports to simulate those used in the TRON: Legacy film

- JavaScript
    - Database handling using MongoDB integration via MongoClient
    - Create operations using POST methods to publish user quote entries
    - Read operations using GET methods to render results on .ejs sheet 
    - Update operations using PUT methods to swap specific quote entries with a designated replacement
    - Delete operations using DELETE methods to remove replacement quotes
