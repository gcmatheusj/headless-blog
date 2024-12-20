import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BlogArticlePageProps {
  params: Promise<{ handle: string }>
}

export default async function BlogArticlePage ({
  params
}: BlogArticlePageProps) {
  const { handle } = await params;

  const builderModelName = 'blog-article';

  const article = await builder.get(builderModelName, {
    userAttributes: {
      urlPath: `/blog/${handle}`
    }
  }).toPromise()

  return (
    <div className="w-full lg:max-w-5xl mx-auto bg-white px-6">
      <RenderBuilderContent content={article} model={builderModelName} />
    </div>
  )
}