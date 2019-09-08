import { AirplaneModel } from "./AirplaneModel";

export class Airplane {
  id: number;
  code: string;
  airplaneModelId: number;
  model: AirplaneModel;
  numberOfPassenger: number;
  createdAt: Date;
  updatedAt: Date;
}
