import * as Icons from "react-icons/fa";

export const DynamicFaIcon = ({ name }: { name: keyof typeof Icons }) => {
  const IconComponent = Icons[name];

  return <IconComponent style={{ fill: "#fff", fontSize: "2.5rem" }} />;
};
