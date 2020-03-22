// import users from "./models/users";

const db = require('../models');

const getAllProfile = async () =>{
    // console.log(db);
    include = {
        model: db.Profile,
        as: 'Profiles',
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        through: { attributes: [] },
    };
    try {
        const data = await db.Profile.findAll(include);
            result = {
                msg: "ok",
                code: 200,
                data,
            };

        return result;

    } catch (error) {
        result = {
            msg: "error",
            code: 500,
        }
        return result;
    }

}
module.exports = getAllProfile();
// exports.getAllUsers;

