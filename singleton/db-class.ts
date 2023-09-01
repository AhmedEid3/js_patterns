// Creational pattern: Singleton

let instance: ConnectionDB | null = null;

class ConnectionDB {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  connect() {
    console.log('Connect to MongoDB');
  }

  disconnect() {
    console.log('Disconnect MongoDB');
  }
}

export default Object.freeze(new ConnectionDB());
