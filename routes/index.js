import express from 'express'
import dashBoard from './dashBoard'
import auth from './auth'
import profile from './profile'
import projects, { existProject } from './projects'

const $ = express.Router()

$.use('/', projects)
$.use('/project/:projectUid', existProject, dashBoard)
$.use('/auth', auth)
$.use('/profile', profile)
$.use('*', (req, res) => res.send('404'))

export default $
