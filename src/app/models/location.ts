class regiao {
  id: number = 0;
  sigla: string = '';
  nome: string = '';
}

class UF {
  id: number = 0;
  sigla: string = '';
  nome: string = '';
  regiao: regiao = new regiao();
}

export class LocationApi {
  id: number = 0;
  nome: string = '';
  UF: UF = new UF();
}
