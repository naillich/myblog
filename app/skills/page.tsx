import { skills } from "./data";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Skills</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {skills.map((person) => (
          <li
            key={person.description}
            className="flex justify-between gap-x-6 py-5"
          >
            <div className="flex min-w-0 gap-x-4">
              {person.icon}
              {/* <img
                alt=""
                src={person.imageUrl}
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
              /> */}
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.description}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.level}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
