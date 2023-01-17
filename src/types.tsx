export type UniqProps = {
  setComponents: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ActiveComponentProps = {
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
};

export type WelcomeProps = {
  setComponents: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveComponent: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export type UserDetails = {
  nick: string;
  email: string;
  points: number;
  id: string;
};

export type HomeProps = {
  setComponents: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveComponent: React.Dispatch<React.SetStateAction<string | undefined>>;
  user: any;
  userDetails?: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails | undefined>>;
  rank: any[];
  allQuizes: any[];
  allUsers: any[];
};

export type PrivateRouteProps = {
  user: any;
  children: JSX.Element;
};

export type RankProps = {
  setComponents: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveComponent: React.Dispatch<React.SetStateAction<string | undefined>>;
  rank: any[];
};

export type QuizesProps = {
  setComponents: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveComponent: React.Dispatch<React.SetStateAction<string | undefined>>;
  allQuizes: any[];
};

export type QuizProps = {
  setComponents: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveComponent: React.Dispatch<React.SetStateAction<string | undefined>>;
  allQuizes: any[];
  userDetails?: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails | undefined>>;
  setQuizEnded: React.Dispatch<React.SetStateAction<boolean>>;
  quizEnded: boolean;
};

export type Answers = {
  answer: string;
  correct: number;
};

export type QuizQuestion = {
  question: string;
  answers: { answer: string; correct: number }[];
};

export type DataTypes = any[];

// easy: { data: any };
// medium: { data: any };
// hard: { data: any };
