'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/user');
const csrf = require('csurf');
const Creates = require('../models/creates');
const { ajaxTransport } = require('jquery');
const csrfProtection = csrf({ cookie: true });

router.get('/new', authenticationEnsurer, csrfProtection, (req, res, next) => {
  res.render('new', { user: req.user, csrfToken: req.csrfToken(), creates: new Creates});
});

router.post('/', async (req, res, next) => {
  const createId = uuidv4();
  const updatedAt = new Date();
  creates = await Creates.create({
    createId: createId,
    createName: req.body.createName.slice(0, 255) || '（名称未設定）',
    createdBy: req.user.id,
    updatedAt: updatedAt
  });
})

router.get('/edit', authenticationEnsurer, csrfProtection, async (req, res, next) => {
    res.render('create', {
      title: req.body.createName,
      user: req.user,
      csrfToken: req.csrfToken()
    });
});



module.exports = router;