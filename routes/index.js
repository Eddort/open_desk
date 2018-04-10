import express from 'express'
import dashBoard from './dashBoard'
import auth from './auth'
const $ = express.Router();
// const proxy = express.Router();
// proxy.get('/s', (req, res) => {
// 	res.send('OKKK')
// })
// $.get('/', react.getIndex)
// $.get('/desk', react.getIndex)
// $.get('/test', (req, res) => {
// 	res.send('NE OK')
// })
$.use('/', dashBoard)
$.use('/auth', auth)
$.use('*', (req, res) => res.send('404'))
export default $