import Joi from 'joi'

const gameSchema = Joi.object({
    id: Joi.string(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required()
})

export default gameSchema;