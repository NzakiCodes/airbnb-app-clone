import { Path, Svg, SvgProps } from "react-native-svg";

function MessageIcon(props: SvgProps) {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M25 6H7C5.89543 6 5 6.89543 5 8V20.6047C5 21.7092 5.89543 22.6047 7 22.6047H12.1434C12.7968 22.6047 13.4089 22.9238 13.7831 23.4595L15.3593 25.7163C15.7776 26.3152 16.676 26.2781 17.0434 25.6468L18.2355 23.5986C18.5936 22.9832 19.252 22.6047 19.964 22.6047H25C26.1046 22.6047 27 21.7092 27 20.6047V8C27 6.89543 26.1046 6 25 6Z"
        strokeWidth="1.8"
      />
    </Svg>
  );
}
MessageIcon.title = "message";
const message = MessageIcon;

export { message };
