const db = require('../models');

exports.getAllLetters = async () => {
    params = {
        model: db.letter,
        as: 'letter',
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        through: { attributes: [] },
        include: 'lettersWritings'
    };
    try {
        return await db.letter.findAll(params).then(letters =>{
            data = letters.map((d) => {
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
exports.getLetter = async (data) => {
    try {
        return await db.letter.findOne({
            where:data,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        }).then(letter => {
            
            result = {
                msg: 'ok',
                code: 200,
                data:letter,
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
exports.getAllLettersByUser = async (id) => {
    try {
        return await db.letter.findAll({
            where: id,
            attributes: { 
                model: db.letter,
                as: 'letter',
                exclude: ['createdAt', 'updatedAt'] },
                through: { attributes: [] },
        }).then(letters => {
            data = letters.map((d) => {
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
exports.createLetters = async (data) => {
    const letter = await db.letter.create(data);
   
    try {
        if(letter instanceof db.letter){
            result = {
                msg: "letter created",
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
exports.updateLetter = async (data) => {
    try {
        letter = await this.getLetter({id:data.id});
        console.log(letter);
        
        if(!letter){
            throw new Error('No record found');
        }else{
            return letter.update(data)
                .then(updatedRecord=>{
                    console.log(`updated record ${JSON.stringify(updatedRecord,null,2)}`)
                    result = {
                        msg: "user updated",
                        code: 200,
                        data,
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
        
        result = {
            msg: "error",
            code: 500,
        }
    }
}
exports.deleteLetter = async (data) =>{
    letter = this.getLetter({id:data.id});
    console.log(letter);
    try {
        letter = await  db.letter.findOne({where:{id: data.id}});
        if(!letter){
            result = {
                msg: "error",
                code: 404,
                data,
            };
        return result;
        }else{
            return letter.destroy(data).then(deleteRecord =>{
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