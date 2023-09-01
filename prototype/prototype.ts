// Creational pattern: Prototype

export default class Prototype {
  private name: string;
  private salary: number;
  private experience: number;

  constructor(name: string, salary: number, experience: number) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
  }

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
