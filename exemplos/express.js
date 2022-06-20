// const express = require('express')
import express from 'express';
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3333)