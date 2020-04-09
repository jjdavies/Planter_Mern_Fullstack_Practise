const express = require('express')
const router = express.Router()

const Planter = require('../../models/Planter')

router.get('/', (req, res)=>{
    console.log('request received')
    Planter.find()
    .then(planter => res.json(planter))
})

router.post('/', (req, res)=>{
    console.log('posty')
    const newPlanter = new Planter({
        gridrow:req.body.gridrow,
        gridcol:req.body.gridcol,
        status:req.body.status,
        change:0,
        newstatus: req.body.newstatus,
        owner: "James"

    })
    newPlanter.save().then(planter => res.json(planter))
})

module.exports = router