// lib/dexieClient.ts
import Dexie from 'dexie';

export interface GearItem {
  id?: number;
  name: string;
  weight: number;
  // add additional fields as needed
}

export class GearDB extends Dexie {
  public gearItems: Dexie.Table<GearItem, number>;

  public constructor() {
    super('GearDB');
    this.version(1).stores({
      gearItems: '++id,name,weight'
      // Additional tables can be defined here.
    });
    this.gearItems = this.table('gearItems');
  }
}

export const db = new GearDB();
