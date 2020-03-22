// import users from "./models/users";

const db = require('../models');

exports.getAllUsers = async () =>{
        // console.log(db);
        params = {
            model: db.Users,
            as: 'Users',
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            through: { attributes: [] },
        };
        return await db.Users.findAll(params);
    }

exports.getUser = async (data) =>{
    return await db.Users.findOne({
        where:data,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

}
exports.createUser= async (data)=>{
   console.log(data);
   
   try {
      const user = await db.Users.create(data);

      if(user instanceof db.Users){
         result = {
               msg: "ok user created",
               code: 201,
               data,
         };
         return result;
      }else{
         result = {
               msg: "error",
               code: 400,
         }
         return result;
      }
      
   } catch (error) {
      result = {
         msg: "error",
         code: 500,
      }
      return result;
   }
 
}
exports.updateUser= (data)=>{
    // console.log(data);
    try {
        
       return  users =db.Users.findOne({where:{id: data.id}})
            .then(record => {
                if(!record){
                    throw new Error('No record found')
                }

                return record.update(data).then( updatedRecord =>{
                    console.log(`updated record ${JSON.stringify(updatedRecord,null,2)}`)
                    result = {
                        msg: "user updated",
                        code: 200,
                        data,
                    };
                    return result;
                })
                
            })
            .catch((error) => {
                result = {
                    msg: "user updated",
                    code: 200,
                    data: error,
                };
                return result;
            })
            
        
    } catch (error) {
        console.log(error);
        
        result = {
            msg: "error",
            code: 500,
        }
        return result;
    }
 
}

exports.deleteUser= (data)=>{

       return  users =db.Users.findOne({where:{id: data.id}})
            .then(record => {
                if(!record){
                    result = {
                        msg: "error",
                        code: 404,
                        data,
                    };
                    return result;
                }

                return record.destroy(data).then( deleteRecord =>{
                    console.log(`delete record ${JSON.stringify(deleteRecord,null,2)}`)
                    result = {
                        msg: "user deleted",
                        code: 200,
                        data,
                    };
                    return result;
                })
                
            })
            .catch((error) => {
                result = {
                    msg: "error",
                    code: 500,
                    data:error,
                };
                return result;
            })
 
}