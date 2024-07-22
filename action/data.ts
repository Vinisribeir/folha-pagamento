"use server";

import connectDB from "@/lib/db";
import { Data } from "@/models/Data";
import { redirect } from "next/navigation";

const registerData = async (formData: FormData) => {
  const nome = formData.get("nome");
  const cnpj = formData.get("cnpj") as string;
  const email = formData.get("emailcadastro") as string;
  const darf_prev = formData.get("darf_prev") as string;
  const fgts = formData.get("fgts") as string;
  const esocial = formData.get("esocial") as string;
  const boleto = formData.get("boleto") as string;
  const analista = formData.get("feito_por") as string;

  if (!nome) {
    throw new Error("Nome é obrigatório");
  }

  await connectDB();

  const existingData = await Data.findOne({ cnpj });
  if (existingData) throw new Error("CNPJ existe");
  await Data.create({
    nome,
    cnpj,
    email,
    darf_prev,
    fgts,
    esocial,
    boleto,
    analista,
  });
  console.log("data created");
  redirect("/dashboard");
};

export { registerData };
