<template>
  <div class="mt-8">
    <div class="mt-2">
      <h2
        class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize"
      >
        Technical skills
      </h2>

      <ul class="flex flex-wrap gap-4 items-center">
        
        <li class="flex items-center" title="Python">
          <Python class="h-10 w-10"></Python>
        </li>
        <li class="flex items-center" title="PowerBI">
          <Powerbi class="h-10 w-10"></Powerbi>
        </li>
        
        <li class="flex items-center" title="Tableau">
          <Tableau class="h-10 w-10"></Tableau>
        </li>
        <li class="flex items-center" title="Microsoft Excel">
          <Excel class="h-10 w-10"></Excel>
        </li>
<!--         
        <li class="flex items-center" title="MySQL">
          <Mysql class="h-10 w-10"></Mysql>
        </li> -->
        <li class="flex items-center" title="PostgreSQL">
          <Postgresql class="h-10 w-10"></Postgresql>
        </li>
        <li class="flex items-center" title="SQL">
          <Sql class="h-10 w-10"></Sql>
        </li>
        <li class="flex items-center" title="Javascript">
          <Javascript class="h-10 w-10"></Javascript>
        </li>
        <li class="flex items-center" title="Jupyter">
          <Jupyter class="h-10 w-10"></Jupyter>
        </li>
        <li class="flex items-center" title="Matlab">
          <Matlab class="h-10 w-10" ></Matlab>
        </li>
        <li class="flex items-center" title="OpenCV">
          <OpenCV class="h-10 w-10"></OpenCV>
        </li>
        <!-- <li class="flex items-center" title="R">
          <Rlogo class="h-10 w-10"></Rlogo>
        </li> -->
        
      </ul>
    </div>
    <div class="mt-4">
      <h2
        class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize"
      > Other Tools
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
       
        <li class="flex items-center" title="Google Analytics">
          <GoogleAnalytics class="h-10 w-10"></GoogleAnalytics>
        </li>
        <li class="flex items-center" title="Google Cloud">
          <GoogleCloud class="h-10 w-10"></GoogleCloud>
        </li>
        <li class="flex items-center" title="Firebase">
          <Firebase class="h-10 w-10"></Firebase>
        </li>
        <li class="flex items-center" title="Jira">
          <Jira class="h-10 w-10"></Jira>
        </li>
        <li class="flex items-center" title="Confluence">
          <Confluence class="h-10 w-10"></Confluence>
        </li>
        <!-- <li class="flex items-center" title="Html">
          <Html class="h-10 w-10 rounded-sm drop-shadow-sm"></Html>
        </li>
        <li class="flex items-center" title="Css">
          <Css class="h-10 w-10 rounded-sm drop-shadow-sm"></Css>
        </li>
        <li class="flex items-center" title="React">
          <React class="h-10 w-10"></React>
        </li>
        <li class="flex items-center" title="Node">
          <Node class="h-10 w-10"></Node>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import Javascript from "../assets/devicon/javascript.svg?inline";
import Html from "../assets/devicon/html.svg?inline";
import Css from "../assets/devicon/css.svg?inline";
import Vuejs from "../assets/devicon/vuejs.svg?inline";
import TailwindCss from "../assets/devicon/tailwindcss.svg?inline";
import Nuxt from "../assets/devicon/nuxt.svg?inline";
import Bootstrap from "../assets/devicon/bootstrap.svg?inline";
import Laravel from "../assets/devicon/laravel.svg?inline";
import Node from "../assets/devicon/node.svg?inline";
import Python from "../assets/devicon/python.svg?inline";
import Rlogo from "../assets/devicon/rlogo.svg?inline";
import Matlab from "../assets/devicon/matlab.svg?inline";
import Powerbi from "../assets/devicon/powerbi.svg?inline";
import React from "../assets/devicon/react.svg?inline";
import Excel from "../assets/devicon/excel.svg?inline";
import Tableau from "../assets/devicon/tableau.svg?inline";
import Mysql from "../assets/devicon/mysql.svg?inline";
import Postgresql from "../assets/devicon/postgresql.svg?inline";
import OpenCV from "../assets/devicon/opencv.svg?inline";
import Sql from "../assets/devicon/sql.svg?inline";
import GoogleAnalytics from "../assets/devicon/googleanalytics.svg?inline";
import GoogleCloud from "../assets/devicon/googlecloud.svg?inline";
import Firebase from "../assets/devicon/firebase.svg?inline";
import Jira from "../assets/devicon/jira.svg?inline";
import Confluence from "../assets/devicon/confluence.svg?inline";
import Jupyter from "../assets/devicon/jupyter.svg?inline";

export default {
  components: {
    Javascript,
    Html,
    Css,
    Bootstrap,
    Vuejs,
    TailwindCss,
    Nuxt,
    Laravel,
    Node,
    Python,
    Rlogo,
    Matlab,
    Powerbi,
    React,
    Excel,
    Tableau,
    Mysql,
    Postgresql,
    OpenCV,
    Sql,
    GoogleAnalytics,
    GoogleCloud,
    Firebase,
    Jira,
    Confluence,
    Jupyter,
  },
};
</script>
