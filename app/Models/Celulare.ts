import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Celulare extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nome: string;

  @column()
  public marca: string;

  @column()
  public preco: Number;

  @column()
  public dataLancamento: Date;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
