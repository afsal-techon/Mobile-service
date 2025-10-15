import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      default: null,
    },
    email:{
      type:String,
      required:true
      
    },
    password: {
      type: String,
      required:true
    },
    createdById: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdBy: {
      type: String,
    },
    role: {
      type: String,
      enum: ["User", "BranchAdmin"],
    },

    // access: {
    //   type: [String],
    //   enum: ["Admin", "Reports","Purchase", "Sale", "Menu Setup"],
    //   default: [],
    // }, 
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

userSchema.index({ branchId: 1 });

const User = mongoose.model("User", userSchema);
export default User;

