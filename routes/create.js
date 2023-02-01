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
  res.render('new', { user: req.user, csrfToken: req.csrfToken() });
});

router.post('/', async (req, res, next) => {
  const createId = uuidv4();
  const updatedAt = new Date();
  await Creates.create({
    createId: createId,
    createName: req.body.createsName.slice(0, 255) || '（名称未設定）',
    html: req.body.html,
    createdBy: req.user.id,
    updatedAt: updatedAt
  });
});

router.get('/:createId', authenticationEnsurer, async (req, res, next) => {
  const tmpcreates = await Creates.findOne({
    include: [
      {
        model: User,
        attributes: ['userId', 'username']
      }],
    where: {
      tmpcreates: req.params.createId
    },
    order: [['updatedAt', 'DESC']]
  });
  res.render('created', {
    user: req.user,
    creates: tmpcreates,
  });
  if (tmpcreates) {
  } else {
    const err = new Error('指定された予定は見つかりません');
    err.status = 404;
    next(err);
  }
});

router.get('/create', authenticationEnsurer, csrfProtection, async (req, res, next) => {
  const creates = await Creates.findOne({
    where: {
      createId: req.params.createId
    }
  });
  if (isMine(req, creates)) { // 作成者のみが編集フォームを開ける
    res.render('create', {
      user: req.user,
      creates: creates,
      csrfToken: req.csrfToken()
    });
  } else {
    const err = new Error('指定された予定がない、または、予定する権限がありません');
    err.status = 404;
    next(err);
  }
});

function isMine(req, creates) {
  return creates && parseInt(creates.createdBy) === parseInt(req.user.id);
}

module.exports = router;