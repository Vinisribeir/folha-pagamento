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
import { SignIn } from "@/components/SignIn";

const Login = () => {
  return (
    <main className="flex-col items-center justify-center">
      <Card className="w-[480px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Insira e-mail e senha para acesso</CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="e-mail">E-mail</Label>
          <Input id="e-mail" />
          <br />
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" />
          <br />
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Lembrar de mim
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <SignIn />
          <span>
            <a href="/" className="underline">
              Esqueceu sua senha?
            </a>
          </span>
          <Button>Login</Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Login;
