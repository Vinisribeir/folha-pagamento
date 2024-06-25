import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Indicadores = () => {
  return (
    <Card className="w-[1440px]">
      <CardHeader>
        <CardTitle className="flex flex-col items-center justify-center">
          Referente ao Mês:XX-XXXX
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>DARF PREV.+IRRF</TableHead>
              <TableHead>FGTS</TableHead>
              <TableHead>eSocial</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Feito POr</TableHead>
              <TableHead>Boleto</TableHead>
              <TableHead>Ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>Sim</TableCell>
              <TableCell>Sim</TableCell>
              <TableCell>Sim</TableCell>
              <TableCell>Sim</TableCell>
              <TableCell>12/12/2012</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>?</TableCell>
              <TableCell>
                <Button type="submit">Editar</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Indicadores;
