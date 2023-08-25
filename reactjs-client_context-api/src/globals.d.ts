type ProfileSpecs = {
  fullName: string;
  email: string;
  about: string;
  website: string;
  _id?: string | number;
};

type ProfilesDataSpecs = {
  profiles: ProfileSpecs[];
  profilesCount: number;
  responseMessage: string;
};

type ChildProp = {
  children: React.ReactNode;
};

type HomeContextProps = {
  showModal: boolean;
  handleHideModal: () => void;
  handleDeleteProfile: () => void;
  isProfileDeleted: boolean;
  setIsProfileDeleted: React.Dispatch<React.SetStateAction<boolean>>;
  setProfilesData: React.Dispatch<
    React.SetStateAction<ProfilesDataSpecs | null>
  >;
  profilesData: ProfilesDataSpecs | null;
  handleSetProfile: (id: number | string) => void;
  handleShowModal: () => void;
};
