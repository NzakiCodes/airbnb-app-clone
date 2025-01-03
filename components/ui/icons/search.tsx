import { Path, Svg, SvgProps } from "react-native-svg";

function SearchIcon(props: SvgProps) {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 13.0206C6.5 9.41937 9.41937 6.5 13.0206 6.5C16.6218 6.5 19.5412 9.41937 19.5412 13.0206C19.5412 16.6218 16.6218 19.5412 13.0206 19.5412C9.41937 19.5412 6.5 16.6218 6.5 13.0206ZM13.0206 5C8.59094 5 5 8.59094 5 13.0206C5 17.4502 8.59094 21.0412 13.0206 21.0412C15.0813 21.0412 16.9605 20.2641 18.381 18.9869L25.6686 26.2744L26.7293 25.2138L19.3992 17.8837C20.4293 16.5346 21.0412 14.8491 21.0412 13.0206C21.0412 8.59094 17.4502 5 13.0206 5Z"
        fill={props.stroke ?? "#717171"}
        strokeWidth={0.5}
      />
    </Svg>
  );
}
SearchIcon.title = "search";
const search = SearchIcon;

export { search };
