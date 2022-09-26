import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Celulare from "App/Models/Celulare";

export default class extends BaseSeeder {
  public async run() {
    await Celulare.createMany([
      {
        nome: "Moto One",
        marca: "Motorola",
        preco: 1499.99,
        dataLancamento: new Date(2018, 10, 1),
      },
      {
        nome: "iPhone 12",
        marca: "Apple",
        preco: 4399.99,
        dataLancamento: new Date(2020, 10, 13),
      },
      {
        nome: "S20",
        marca: "Samsung",
        preco: 1999.99,
        dataLancamento: new Date(2020, 2, 11),
      },
      {
        nome: "Redmi Note 9",
        marca: "Xiaomi",
        preco: 1249.99,
        dataLancamento: new Date(2020, 6, 1),
      },
      {
        nome: "K61",
        marca: "LG",
        preco: 1079.99,
        dataLancamento: new Date(2020, 2, 18),
      },
    ]);
  }
}
