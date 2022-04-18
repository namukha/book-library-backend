// const express = require('express');
const Task = require('../models/Task')

const create_task = (req, res, next) => {
    const data = req.body
    Task.create(data, function (err, data) {
        if (err)
        res.json({
            success: false,
            data: err
        })
        else res.json({
            success: true,
            data: data
        })
    })
}

const get_task = (req, res, next) => {
    Task.find({}, function (err, data) {
        if (err)
        res.json({
            success: false,
            data: err
        })
        else res.json({
            success: true,
            data: data
        })
    })
}

const update_task = (req, res, next) => {
    const id = req.params.id
    const data = req.body
    Task.updateOne({_id: id}, data, function (err, data) {
        if (err)
        res.json({
            success: false,
            data: err
        })
        else res.json({
            success: true,
            data: data
        })
    })
}

const delete_task = (req, res, next) => {
    const id = req.params.id
    Task.findOneAndDelete({_id: id}, function (err, data) {
        if (err)
        res.json({
            success: false,
            data: err
        })
        else res.json({
            success: true,
            data: data
        })
    })
}

module.exports = {
    create_task,
    get_task,
    update_task,
    delete_task
}