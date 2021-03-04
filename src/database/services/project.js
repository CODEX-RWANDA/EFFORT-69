import project from '../modals/project';

class ProjectService {
  static async createProject(newProject) {
    try {
      return await project.create(newProject);
    } catch (error) {
      throw error;
    }
  }

  static async findproject(Project) {
    try {
      return await project.findOne(Project);
    } catch (error) {
      throw error;
    }
  }
}
export default ProjectService;
