const bcrypt = require("bcryptjs");

exports.createHash = async (data)=>{
    return await bcrypt.hash(data, 8);
}
exports.compareHash = async (pass,hass)=>{
    return await bcrypt.compare(pass, hass);
}