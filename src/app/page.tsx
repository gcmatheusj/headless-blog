import { BlogPost } from "@/components/BlogPost";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BlogPost { 
  title: string,
  image: string,
  handle: string
}

export default async function BlogPage () {
  const articles = await builder.getAll('blog-article', {
    fields: 'data.title,data.handle,data.image',
    limit: 10
  }) as { id: string, data: BlogPost }[];

  return (
    <div className="w-full lg:max-w-5xl mx-auto min-h-screen">
      <h1 className="text-xl font-bold mb-4">Posts Recentes</h1>

      <div className="flex gap-4">
        {articles.map((article) => (
          <BlogPost
            key={article.id}
            title={article.data.title}
            image={article.data.image}
            handle={article.data.handle}
            shortContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laboriosam porro explicabo voluptatum iusto, quibusdam ex reprehenderit nobis debitis tempora dolor suscipit qui quod nihil cum amet hic"
          />
        ))}
      </div>
    </div>
  )
}