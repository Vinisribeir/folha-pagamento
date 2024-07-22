import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  nome: { type: String },
  cnpj: { type: String, unique: true },
  email: { type: String },
  darf: { type: String },
  fgts: { type: String },
  esocial: { type: String },
  boleto: { type: String },
  analista: { type: String },
  status: { type: String, default: "Ativo" },
  role: { type: String, default: "Analista" },
  createdAt: { type: Date, default: Date.now },
});

export const Data = mongoose.models?.User || mongoose.model("Data", dataSchema);
