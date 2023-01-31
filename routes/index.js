'use strict';
const express = require('express');
const router = express.Router();

const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

/* GET home page. */
router.get('/', async (req, res, next) => {
  const title = 'tailwind シミュレーター';
  if (req.user) {
    const Creates = await Creates.findAll({
      where: {
        createdBy: req.user.id
      },
      order: [['updatedAt', 'DESC']]
    });
    creates.forEach((creates) => {
      creates.formattedUpdatedAt = dayjs(schedule.updatedAt).tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm');
    });
  } else {
    res.render('index', { title: title, user: req.user });
  }
});

module.exports = router;
