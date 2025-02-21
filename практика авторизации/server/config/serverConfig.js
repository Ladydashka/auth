const express = require('express');
const cors = require('cors');

const serverConfig = app => {
	app.use(cors());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
};

module.exports = serverConfig;
