// global.d.ts or a similar file

type ProfileSpecs = {
  fullName: string;
  email: string;
  about: string;
  website: string;
  _id: string | number;
};

type ProfilesDataSpecs = {
  profilesCount: number;
  responseMessage: string;
};

// declare interface FormEvent<T extends EventTarget = HTMLFormElement>
//   extends Event {
//   target: T;
// }
