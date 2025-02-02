import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  sic: {
    type: String,
    required: true
  }
});

const Participant = mongoose.model("Participant", ParticipantSchema);

export default Participant;
