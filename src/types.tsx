export type UniqProps = {
  setComponents: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ActiveComponentProps = {
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
};

export type HomeProps = {
  setComponents: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveComponent: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export type Hprops = {
  setComponents: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveComponent: React.Dispatch<React.SetStateAction<string | undefined>>;
  user: any;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails | undefined>>;
  userDetails: UserDetails;
};

export type UserDetails = {
  email: string;
  points: number;
  nick: string;
};

export type LoginProps = {
  setComponents: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveComponent: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export type User = {
  nick: string;
  email: string;
  rank: number;
};
