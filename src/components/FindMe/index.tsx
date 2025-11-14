import { SocialLink } from "../SocialLink";

type imageType = {
  url: string;
  name: string;
  width: number;
  height: number;
};

type contactType = {
  displayText: string;
  icon: imageType;
  id: string;
  link: string;
  platform: string;
  type: string;
};

interface FindMeProps {
  title: string;
  contacts: contactType[];
}

export function FindMe({ title, contacts }: FindMeProps) {
  return (
    <div id="find-me" className="space-y-12">
      <h2 className="w-fit font-yeseva text-5xl text-primary-500 relative after:content-[''] after:absolute after:left-23 after:-bottom-1 after:w-[75%] after:h-px after:bg-primary-500">
        {title}
      </h2>

      <div className="grid grid-cols-3 gap-8 gap-x-24 md:grid-cols-2">
        {contacts.map((contact) => (
          <SocialLink
            key={contact.id}
            link={{
              href: contact.link,
              text: contact.displayText,
              type: contact.type,
            }}
            image={{
              src: contact.icon.url,
              alt: contact.icon.name,
              width: contact.icon.width,
              height: contact.icon.height,
            }}
          />
        ))}
      </div>
    </div>
  );
}
