// Creational pattern: Prototype

export default class Prototype {
  constructor(private name: string, private salary: number, private experience: number) {}

  getSalary() {
    return this.salary;
  }

  getExperience() {
    return this.experience;
  }

  getName() {
    return this.name;
  }

  clone() {
    return new Prototype(this.name, this.salary, this.experience);
  }
}
