
var models = require('../models');
var logger = require('../services/logger_service');
var utils = require('../utils');



function sendRequest(route,data, next) {
    try {
        switch (route) {

            case 'getAllUsers':
                models.users.getAllUsers(data, next);
                break;
        }
    } catch (e) {
        logger.error("Exception:" )  ;
        logger.error(e.stack);
        utils.serverException(e, next);
    }
}

exports.sendRequest = sendRequest;