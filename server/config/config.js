const host = process.env.HOST || 'localhost',
    host_db = process.env.HOST_DB || 'localhost',
    port = process.env.PORT || 4000,
    port_db = process.env.PORT_DB || 27017,
    SECRET_USER_TOKEN = 'securesecretusertoken',
    pathdb = `mongodb://c02-user:c02-890319@${host_db}:${port_db}/c02`;

module.exports = {
    pathdb,
    host,
    port
}