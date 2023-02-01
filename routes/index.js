'use strict';
const express = require('express');
const router = express.Router();

const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const Creates = require('../models/creates');
dayjs.extend(utc);
dayjs.extend(timezone);

/* GET home page. */
router.get('/', async (req, res, next) => {
  const title = 'tailwind シミュレーター';
  if (req.user) {
    const tmpcreates = await Creates.findAll({
      where: {
        createdBy: req.user.id
      },
      order: [['updatedAt', 'DESC']]
    });
    tmpcreates.forEach((creates) => {
      tmpcreates.formattedUpdatedAt = dayjs(tmpcreates.updatedAt).tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm');
    });
    res.render('index', {
      title: title,
      user: req.user,
      creates: tmpcreates
    });
  } else {
    res.render('index', { title: title, user: req.user });
  }
});

module.exports = router;
