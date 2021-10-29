import fs from "fs";
import path from "path";
import { PartnerType } from './types/partnerType'

const ps = fs.readFileSync(
    path.join(__dirname, "partners.json"),
    "utf-8"
  );
const partners:PartnerType[] = JSON.parse(ps);

export default partners;