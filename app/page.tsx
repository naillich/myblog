import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import me from "./public/me2.jpeg";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Alberto Ornelas
      </h1>
      <Image
        src={me}
        alt="Me"
        width={200}
        quality={100}
        className="h-200 w-200 flex-none rounded-full bg-gray-50"
      />
      <hr className="my-4 border-gray-300" />
      <p className="mb-4">
        {`Hi there! I'm Alberto Ornelas, a passionate Systems Engineer with +2 years of
        experience in designing, implementing, and optimizing complex systems. My
        journey in engineering has allowed me to work across various industries,
        including package delivery services, e-commerce, restaurants, invoice
        management, and promotional and giveway applications, where I have honed 
        my skills in system integration, automation, and data management.`}
      </p>
      <p className="mb-4">
        {`I thrive on problem-solving and enjoy tackling challenges that require
        innovative solutions. My approach combines technical expertise with a deep
        understanding of user needs, ensuring that the systems I develop are both
        efficient and user-friendly.`}
      </p>
      <p className="mb-4">
        {`When I'm not working on systems engineering projects, you can find me
        exploring new technologies, watchings sports and reading about finances
        .I'm always eager to connect with fellow professionals and share insights, so
        feel free to reach out!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
