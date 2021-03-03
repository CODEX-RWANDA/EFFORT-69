/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import projectSchema from './schemas/project/project';

export const createProject = (req, res, next) => (
  validator(projectSchema, req.body, res, next)
);
