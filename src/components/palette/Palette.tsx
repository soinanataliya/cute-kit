import { cn } from "../../helpers/class-names";
import "./palette.css";

export interface PaletteProps {
  color: "primary" | "secondary" | "accent" | "extra1" | "extra2";
}

const Palette = ({ color }: PaletteProps) => {
  return <div className={cn(`palette ${color}`)}></div>;
};

export default Palette;
