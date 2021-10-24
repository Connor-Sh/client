import { DeputyWithDept } from "src/pages/ems-fd/my-deputies";
import { OfficerWithDept } from "src/pages/officer/my-officers";
import type { Bolo, Call911, Citizen, Officer, StatusValue } from "types/prisma";
import create from "zustand";

export type Full911Call = Call911 & { assignedUnits: Officer[] };
export type FullBolo = Bolo & { officer: Officer };
export type FullOfficer = OfficerWithDept & {
  status2: StatusValue;
  citizen: Pick<Citizen, "name" | "surname" | "id"> | null;
};
export type FullDeputy = DeputyWithDept & { status2: StatusValue };

interface DispatchState {
  calls: Full911Call[];
  setCalls: (calls: Full911Call[]) => void;

  bolos: FullBolo[];
  setBolos: (bolos: FullBolo[]) => void;

  activeOfficers: FullOfficer[];
  setActiveOfficers: (officers: FullOfficer[]) => void;

  activeDeputies: FullDeputy[];
  setActiveDeputies: (deputies: FullDeputy[]) => void;

  allOfficers: FullOfficer[];
  setAllOfficers: (officers: FullOfficer[]) => void;
}

export const useDispatchState = create<DispatchState>((set) => ({
  calls: [],
  setCalls: (calls) => set({ calls }),

  bolos: [],
  setBolos: (bolos) => set({ bolos }),

  activeOfficers: [],
  setActiveOfficers: (officers) => set({ activeOfficers: officers }),

  activeDeputies: [],
  setActiveDeputies: (deputies) => set({ activeDeputies: deputies }),

  allOfficers: [],
  setAllOfficers: (officers) => set({ allOfficers: officers }),
}));