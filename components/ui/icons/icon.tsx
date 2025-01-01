import { SvgProps } from "react-native-svg";
import * as icons from "./index";

export type IconName = keyof typeof icons;
export interface Props {
  icon: IconName;
  className?: SvgProps["className"];
}

export default function Icon(props: Props & SvgProps) {
  const { icon, className } = props;
  const IconComp = icons[icon];
  if (IconComp) return <IconComp className={className} {...props} />;
  throw new Error(`Unknown icon "${icon}"`);
}
