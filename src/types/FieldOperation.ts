import Operation from "@/models/Operation";

export default interface FieldOperation extends Operation {
  timestamp: number;
  localeName: string;
}
