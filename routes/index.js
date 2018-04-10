import express from 'express'
import * as react from './react'
const $ = express.Router();

$.get('/', react.getIndex)
$.get('/desk', react.getIndex)
$.get('/test', (req, res, next) => {
	next($.get('/a', (req, res) => res.send('OKKKKK')))
})
export default $