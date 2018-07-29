import React from "react";
import { render } from "react-dom";
import { Route } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import {
   Stitch,
   RemoteMongoClient,
   GoogleRedirectCredential,
   FacebookRedirectCredential
} from "mongodb-stitch-browser-sdk";

//require("../static/todo.scss");

let appId = "ge_aviation_dash-qplgr";
