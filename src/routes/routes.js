module.exports = app => {
require("./team.route")(app);
require("./country.route")(app);
require("./selection.route")(app);
require("./coach.route")(app);
};