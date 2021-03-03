import ProjectService from '../database/services/project';
import out from '../helpers/response';

class ProjectController {
  static async createProject(req, res) {
    try {
      const { id } = req.user;
      req.body.owner = id;
      const Pexist = ProjectService.findproject({ projectname: req.body.projectname });
      const Uexist = ProjectService.findproject({ owner: id });
      if (Pexist || Uexist) { return out(res, 409, 'project with such a name already exists!', null, 'CONFLICT ERROR'); }
      req.body.labels = [{ name: 'api', color: 'blue' }, { name: 'feature', color: 'green' }, { name: 'bug', color: 'red' }, { name: 'frontend', color: 'dark-grey' }];
      const newProject = await ProjectService.createProject(req.body);
      return out(res, 201, 'Project created successfully!', newProject);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}
export default ProjectController;
