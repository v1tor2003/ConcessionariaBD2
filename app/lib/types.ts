import { RowDataPacket } from "mysql2"

export interface Func extends RowDataPacket {
  id_func: string        
  usuario_func: string
  senha_func: string
  salario_func:number
  cargo_func : string        
  id_detalhepessoa_fk: number
}

export interface Details {
  nome_pessoa: string
  nascimento_pessoa: string
  phone_pessoa: string
}

export interface FuncDetails extends Func {}
export interface FuncDetails extends Details {}

export interface Carro extends RowDataPacket {
  id_carro: number
  id_cor: number
  id_versao: number
  modelo: string
  ano_fab: number
  quantidade: number
  nome_versao: string
  nome_cor: string
  preco: number
}

export interface Cor extends RowDataPacket {
  id_cor: number
  nome_cor: string
  preco_cor: number
}

export interface Cliente extends RowDataPacket {
  id_cliente: number
}

export interface Cliente extends Details {}