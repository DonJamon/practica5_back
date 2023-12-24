import { ConductorModelType } from "../db/conductor.ts";
import { Conductor } from "../types.ts";

export const conductorModelToConductor = (conductorModel: ConductorModelType): Conductor => {
  return {
    name: conductorModel.name,
    mail: conductorModel.mail,
    username: conductorModel.username,
    travels: conductorModel.travels,
  };
};