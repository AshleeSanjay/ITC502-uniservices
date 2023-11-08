import Link from "next/link";

interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  profileLink?: string;
}

interface TeamSectionProps {
  members: TeamMember[];
}

const TeamCard: React.FC<TeamMember> = ({ name, title, imageUrl, profileLink }) => (
  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
    <div className="flex flex-col">
      <Link href={profileLink || '#'}>
        <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
          src={imageUrl}
          alt={name}
        />
      </Link>
      <div className="text-center mt-6">
        <h1 className="text-gray-900 dark:text-white text-xl font-bold mb-1">
          {name}
        </h1>
        <div className="text-gray-700 dark:text-white font-light mb-2">
          {title}
        </div>
      </div>
    </div>
  </div>
);

const TeamSection: React.FC<TeamSectionProps> = ({ members }) => (
  <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black py-10">
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="container max-w-7xl px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h1 className="text-gray-900 dark:text-white text-4xl font-bold mb-8">
                Meet the Team
              </h1>
              <p className="text-gray-700 dark:text-white text-lg font-light">
                With over 100 years of combined experience, we've got a well-seasoned team at the helm.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {members.map(member => <TeamCard key={member.name} {...member} />)}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamSection;
