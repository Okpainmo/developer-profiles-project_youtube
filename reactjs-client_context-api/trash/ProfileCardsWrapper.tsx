// // import React from 'react'

// import ProfileCard from './ProfileCard';

// // type HandleShowModalSpecs = (): void => {}

// type ProfileSpecs = {
//   fullName: string;
//   email: string;
//   about: string;
//   website: string;
//   _id: string | number;
// };

// type ProfilesDataSpecs = {
//   profiles: ProfileSpecs[];
//   profilesCount: number;
//   responseMessage: string;
// };

// type PageProps = {
//   profilesData: ProfilesDataSpecs | null;
//   handleShowModal: () => void;
//   handleSetProfile: (_id: number | string) => void;
// };

// function ProfileCardsWrapper({
//   profilesData,
//   handleShowModal,
//   handleSetProfile,
// }: PageProps) {
//   // console.log(profilesData);

//   if (!profilesData) {
//     return (
//       <p className='my-40 text-center text-gray-400 text-[20px] mx-auto'>
//         Loading developer profiles...
//       </p>
//     );
//   }

//   if (profilesData && profilesData.profiles.length < 1) {
//     return (
//       <p className='my-40 text-center text-gray-400 text-[20px] mx-auto'>
//         No profiles added yet!!! <br /> Please add add one or more profiles to
//         see them here.
//       </p>
//     );
//   }

//   if (profilesData && profilesData.profiles.length > 0) {
//     return (
//       <section
//         className='profile-cards-wrapper mt-8 sm:mt-20 flex flex-col gap-6 md:mx-auto md:gap-y-12 justify-center md:gap-x-16 md:flex md:flex-wrap md:flex-row'
//         id='profileCardsWrapper'
//       >
//         {profilesData.profiles.map((profile) => {
//           const { _id } = profile;

//           return (
//             <ProfileCard
//               key={_id}
//               developerProfile={profile}
//               handleShowModal={handleShowModal}
//               handleSetProfile={handleSetProfile}
//             />
//           );
//         })}
//       </section>
//     );
//   }
// }

// export default ProfileCardsWrapper;
