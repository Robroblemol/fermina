const db = require('../models');

exports.getAll = async (data) => {
    params = {
        where: data,
        model: db.writings,
        as: 'writings',
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        through: { attributes: [] },
        include: ['lettersWritings','likes'],
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
            model: db.writings,
            as: 'writings',
            where:data,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: ['lettersWritings','likes'],

        }).then(writing => {
        //  isLiked = await this.getLikes({idUser:data.idUser})  ; 
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
                // include: 'lettersWritings',
                include: ['lettersWritings','likes'],
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
            console.log(writing);
            
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
exports.setLikes = async(data) =>{
    const likesWriting = await db.likesWriting.create(data);
    try {
        if(likesWriting instanceof db.likesWriting){
            result = {
                msg: "like created",
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

exports.getLikes = async(data) =>{
    try {
        return await db.likesWriting.findOne({
            model: db.likesWriting,
            as: 'likesWriting',
            where:data,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        }).then(likesWriting => {
            
            result = {
                msg: 'ok',
                code: 200,
                data:likesWriting,
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
exports.deleteLike = async (data) =>{
    // like = await this.getlikes({id:data.id});
    console.log(data);
    try {
        like = await  db.likesWriting.findOne({where: data});
        console.log('like= '+like);
        
        if(!like){
            result = {
                msg: "error",
                code: 404,
                data,
            };
        return result;
        }else{
            return like.destroy(data).then(deleteRecord =>{
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

