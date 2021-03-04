import mongoose from 'mongoose';

const ProjectSchema = mongoose.Schema({
  projectname: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  labels: [
    {
      type: Object,
      required: true
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  }

});

export default mongoose.model('Project', ProjectSchema);
