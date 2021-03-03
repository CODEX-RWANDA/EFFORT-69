import Joi from 'joi';

export default Joi.object().keys({
  projectname: Joi.string().min(3).max(100).required()
    .error(() => 'Project name is required Ex: EFFORT-PROJect. Names with characters less than 3 won\'')

}).options({ allowUnknown: false });
