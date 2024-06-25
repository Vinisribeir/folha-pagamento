import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Cadastro = () => {
  return (
    <Card className="w-[1440px]">
      <CardHeader>
        <CardTitle>Cadastro</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 grid-cols-3">
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" />
          </div>
          <div>
            <Label htmlFor="CNPJ">CNPJ</Label>
            <Input id="CNPJ" />
          </div>
          <div>
            <Label htmlFor="emailcadastro">E-mail</Label>
            <Input id="emailcadastro" />
          </div>
        </div>
        <br />
        <div className="grid gap-4 grid-cols-3">
          <div>
            <Label htmlFor="darf_prev">DARF PREV. +IRRF</Label>
            <Input id="darf_prev" />
          </div>
          <div>
            <Label htmlFor="FGTS">FGTS</Label>
            <Input id="FGTS" />
          </div>
          <div>
            <Label htmlFor="esocial">eSocial</Label>
            <Input id="esocial" />
          </div>
        </div>
        <div className="grid gap-4 grid-cols-*">
          <div>
            <Label htmlFor="boleto">Boleto</Label>
            <Input id="boleto" />
          </div>
        </div>
      </CardContent>
      <br />
      <CardFooter className="flex justify-between">
        <div>
          <Label htmlFor="feito_por">Feito Por</Label>
          <Input id="feito_por" />
        </div>
        <div>
          <br />
          <Button type="submit">Cadastro</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Cadastro;
