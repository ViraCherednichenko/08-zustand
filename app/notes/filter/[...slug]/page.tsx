import NotesClient from "./Notes.client";
import type { NoteTag } from "@/types/note";

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const rawTag = slug?.[0];

  const tag: NoteTag | undefined =
    !rawTag || rawTag === "all" ? undefined : (rawTag as NoteTag);

  return <NotesClient tag={tag} />;
}