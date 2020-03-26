const db = require('../models');

exports.getAll = async () => {
    params = {
        model: db.writings,
        as: 'writings',
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        through: { attributes: [] },
    };
    try {
        return await db.writings.findAll(params).then(writings =>{
            data = writings.map((d) => {
                return d.dataValues;
            })
            result = {
                msg: "ok",
                code: 200,
                data: data,
            }
            return result;
        }).catch (errors =>{
            result = {
               msg: "error",
               code: 400,
               data: errors.message,
         };
         return result;
         });
        
    } catch (error) {
        console.log(error);
        
        result = {
            msg: "error",
            code: 500,
        }
    }
        

}
exports.get = async (data) => {
    try {
        return await db.writings.findOne({
            where:data,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        }).then(writing => {
            
            result = {
                msg: 'ok',
                code: 200,
                data:writing,
            }
            return result;
        }).catch (errors =>{
            result = {
               msg: "error",
               code: 400,
               data: errors.message,
         };
         return result;
         });
    } catch (error) {
        console.log(error);
        
        result = {
            msg: "error",
            code: 500,
        }
        return result;
    }
    
}
exports.getAllByUser = async (id) => {
    try {
        return await db.writings.findAll({
            where: id,
            attributes: { 
                model: db.writings,
                as: 'writing',
                exclude: ['createdAt', 'updatedAt'] },
                through: { attributes: [] },
        }).then(writings => {
            data = writings.map((d) => {
                return d.dataValues;
            })
            result = {
                msg: "ok",
                code: 200,
                data: data,
            }
            return result;
            
        }).catch (errors =>{
            result = {
               msg: "error",
               code: 400,
               data: errors.message,
         };
         return result;
         });
    } catch (error) {
        console.log(error);
        
        result = {
            msg: "error",
            code: 500,
        }
    }
    
}
exports.create = async (data) => {
    const writing = await db.writings.create(data);
   
    try {
        if(writing instanceof db.writings){
            result = {
                msg: "writing created",
                code: 201,
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
exports.update = async (data) => {
    try {
        writing = await this.get({id:data.id});
        
        if(!writing.msg === 'error'){
            throw new Error('No record found');
        }else{
            return writing.data.update(data)
                .then(updatedRecord=>{
                    console.log(`updated record ${JSON.stringify(updatedRecord,null,2)}`)
                    result = {
                        msg: "writing updated",
                        code: 200,
                        data: updatedRecord,
                    };
                    return result;
                })
                .catch((error) => {
                    console.log(error);
                    
                    result = {
                        msg: "error",
                        code: 400,
                        data: error.message,
                    };
                    return result;
                })

        }
    } catch (error) {
        console.log(error);
        
       return result = {
            msg: "error",
            code: 500,
        }
    }
}
exports.delete = async (data) =>{
    writing = this.get({id:data.id});
    console.log(writing);
    try {
        writing = await  db.writings.findOne({where:{id: data.id}});
        if(!writing){
            result = {
                msg: "error",
                code: 404,
                data,
            };
        return result;
        }else{
            return writing.destroy(data).then(deleteRecord =>{
                console.log(`delete record ${JSON.stringify(deleteRecord,null,2)}`)
                    result = {
                        msg: "record deleted",
                        code: 200,
                        data,
                    };
                    return result;
            })
        }
    } catch (error) {
        result = {
            msg: "error",
            code: 500,
            data:error,
        };
        return result;
    }
}