import { nanoid } from "nanoid"
import { Url } from "../models/url.model.js"

async function handleShortId(req, res){
    const shortId = nanoid(8)
    const body = req.body
    if(!body.url) return res.status(400).json({message: "URL is required"})

    await Url.create({
        shortId: shortId,
        redirectUrl: body.url,
    })

    res.render('urlCopy', {shortId: "https://urlshortner-production-f439.up.railway.app/"+shortId})
}

export {handleShortId}