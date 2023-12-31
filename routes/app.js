import express from 'express'
import { handleShortId } from '../controllers/user.controller.js'
import {Url} from '../models/url.model.js'

const router = express.Router()

router.post('/', handleShortId)

router.get('/', function(req, res) {
    res.render('index')
})


router.get('/:shortId', async function(req, res) {
    const shortId = req.params.shortId;
    const entry = await Url.findOne(
        {shortId: shortId}
    )
    res.redirect(entry?.redirectUrl)
})

export default router