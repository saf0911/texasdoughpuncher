import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div className="container">
    <Head>
     <title>Texas Dough Puncher</title>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <meta charSet="utf-8" />
    </Head>
    <div className="wrapper">
      <div className="imgContainer">
        <img src= "/static/normanWonder.jpg" className="box header"></img>
        <h1 className="headerText">Texas Dough Puncher</h1>
      </div>
      <img src= "/static/DavidNorman.jpg" className="box sidebar"></img>
      <img src="/static/book.jpeg" className="box sidebar2"></img>
      <div className="box bookContainer">
        <h2 className="box bookTitle">Bread on the Table</h2>
        <p className="box bookText">The debut cookbook from cult favorite Austin bakery and beer garden Easy Tiger,
        featuring recipes from author David Norman’s time spent exploring bread traditions
        throughout Europe and North America, plus menu ideas for incorporating homemade
        bread into everyday meals.
        <br/>
        <br/>
        In this highly anticipated cookbook, culinary instructor and baker David Norman
        explores the European breadmaking traditions that inspire him most–from the rye
        breads of France to the saltless ciabattas of Italy to the traditional Christmas
        loaves of Scandinavia. Norman also offers recipes for traditional foods to
        accompany these regional specialties, so home bakers can showcase their freshly
        made breads alongside a traditional Swedish breakfast spread, oysters with
        mignonette, or country pâté, to name a few examples. With rigorous,
        detailed instructions plus showstopping photography, this book will surprise
        and delight bakers of all stripes.
        </p>

      </div>
      <div className="box content">
        <h2>David Norman </h2>
        <p className="contentText">
          Selected as one of the Top Ten bread bakers in the country by Dessert
          Professional Magazine, DAVID NORMAN is the Head Doughpuncher, Culinary Director
          and a partner at Easy Tiger Bake Shop & Beer Garden. In nearly 30 flour-dusted
          years, his route has included stints at some of the country’s best bread bakeries
          from Seattle (Grand Central Bakery) to New York City (TriBakery, Bouley Bakery)
          and included teaching professional bread courses at the French Culinary Institute
          and the San Francisco Baking Institute. David is currently hard at work writing
          Bread on the Table.
         </p>
      </div>
      <div className="footer">
        <h4>Contact</h4>
        <p>tele: 512-555-0101</p>
        <p>can: size ten on a string</p>
        <p>pigeon: carrier prefer spotted</p>
        <p>In person: Just leave some baked goods out he will find them</p>
      </div>

    </div>


    <style jsx global> {`
      @font-face {
        font-family: 'Smokum-Regular';
        src: url("/static/Smokum-Regular.ttf") format('truetype');
      }

      #__next { height: 150vh;
      margin: 0%;
      padding: 0%;
      }

      html {
       height: 100%;
       margin: 0%;
       padding: 0%;
     }

     body {
       height: 100%;
       margin: 0%;
       padding: 0%;
     }

     h2 {
       text-align: center;
       font-family: Smokum-Regular;
       font-size: 250%;
     }
     h4 {
       text-align: center;
       font-family: Smokum-Regular;
       font-size: 250%;
     }
      .container {
        height: 100%;
      }

      .box {
        font-size: 125%;
      }

      .wrapper {
        display: grid;
        grid-template-rows: auto;
        grid-template-areas:
         "header"
         "bookContainer"
         "sidebar2"
         "content"
         "sidebar"
         "footer";
         width: 100%;
         // height: 100%;
         color: #444;
      }

      .imgContainer {
        position: relative;
        grid-area: header;
        margin-top: -10%;
        margin-bottom: -2%;
      }

      .header {
          height: auto;
          max-width: 100%;
      }



      .sidebar {
        grid-area: sidebar;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 100%;
        height: 100%;
        padding: 0px;
        margin: 0px;
        background-color: #fff9d0;
    }

    .sidebar2 {
        grid-area: sidebar2;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px;
        margin: 0px;
    }

    .bookContainer {
        grid-area: bookContainer;
        width: 100%;
        height: 100%;
        margin: 0%;
        padding: 0%;
        background-color: black;
        color: #b54c1d;
    }

    .bookTitle {
      font-family: Smokum-Regular;
      margin-top: 5%;
      font-size: 250%;
    }

    .bookText {
      padding: 0 5% 5% 5%;
    }

    .content {
        grid-area: content;
        width: 100%;
        height: 100%;
        color: #b54c1d;
        background-color: #fff9d0;
        padding: 0px;
        margin: 0px;
    }

    .contentText {
      padding: 3%;
    }

    .footer {
      grid-area: footer;
      background-color: black;
      color: #b54c1d;
      padding: 0 5% 5% 5%;
      }
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
      .wrapper {
        display: grid;
        grid-template-columns: auto;
        grid-template-areas:
        "header"
        "bookContainer"
        "sidebar2"
        "content"
        "sidebar"
        "footer";
        }
        .headerText {
          top: 10%;
          left: 10%;
          color: black;
          position: absolute;
          font-size: 300%;
          font-family: Smokum-Regular;
        }
        .sidebar2 {
            grid-area: sidebar2;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 100%;
            padding: 0px;
            margin: 0px;
        }
    }


    @media only screen and (min-width: 480px) and (max-width: 768px)  {
    .wrapper {
      display: grid;
      grid-template-columns: auto;
      grid-template-areas:
        "header"
        "bookContainer"
        "sidebar2"
        "content"
        "sidebar"
        "footer";
      }
      .headerText {
        top: 15%;
        left: 25%;
        color: black;
        position: absolute;
        font-size: 300%;
        font-family: Smokum-Regular;
      }
      .sidebar {
        grid-area: sidebar;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 100%;
        padding: 0px;
        margin: 0px;
        background-color: #fff9d0;
    }
      .sidebar2 {
          grid-area: sidebar2;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 100%;
          padding: 0px;
          margin: 0px;
      }
    }

    @media only screen and (min-width: 768px)  {
      .wrapper {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            "header  header  header"
            "bookContainer  bookContainer  sidebar2"
            "sidebar content content"
            "footer footer footer";
      }
      .headerText {
        top: 20%;
        left: 65%;
        color: black;
        position: absolute;
        font-size: 300%;
        font-family: Smokum-Regular;
      }
      .sidebar2 {
          grid-area: sidebar2;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 100%;
          height: 100%;
          padding: 0px;
          margin: 0px;
      }
    }
    `}  </style>


  </div>
)

export default Home
