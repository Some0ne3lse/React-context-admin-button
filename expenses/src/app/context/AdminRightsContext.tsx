import { createContext } from "react";

export type AdminContextType = {
  value: boolean;
  toggleValue: () => void;
};

export const AdminRightsContext = createContext<AdminContextType>({
  value: false,
  toggleValue: () => {},
});
