import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },

    logoUrl: {
      type: String,
      required: true,
    },

    jobPosition: {
      type: String,
      required: true,
    },

    monthlySalry: {
      type: Number,
      required: true,
    },

    jobType: {
      type: String,
      required: true,
    },

    isRemote: {
      type: Boolean,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    jobDescription: {
      type: String,
      required: true,
    },

    aboutCompany: {
      type: String,
      required: true,
    },

    skills: {
      type: Array,
      required: true,
    },

    refUserId: {
      type: mongoose.ObjectId,
    },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const job = mongoose.model("Job", jobSchema);

export default job;
