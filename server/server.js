// import path from 'path';
const path = require('path');
// import fs from 'fs';
const fs = require('fs');
// import express from 'express';
const express = require('express');
// import React, { Profiler } from 'react';
const React = require('react');
// import ReactDOMServer from 'react-dom/server';
const ReactDOMServer = require('react-dom/server');
// import StaticRouter from 'react-router-dom';
const StaticRouter = require('react-router-dom');

// import App from '../src/App';
const App = require('../src/App');

const PORT = 8080
const app = express()
const router = express.Router()

app.use('/build', express.static('build'));

app.get('*', (req,res)=>{
    const context ={}
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const indexFile = path.resolve('./build/index.html')
    fs.readFile(indexFile,utf-8,(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).send('oops!', 'error!')
        }
        return res.send(data.replace(`<div id="root"></div>`,`<div id="root">${app}</div>`))
    })
})

router.use(express.static(path.resolve(__dirname,'..','build'),{maxAge: '10d'}))

app.listen(PORT,()=>{
    console.log("SSR port is :"+PORT);
})
