import NotesClient from "./Notes.client";
import type { NoteTag } from "@/types/note";

type PageProps = {
  params: {
    slug?: string[];
  };
};

export default function Page({ params }: PageProps) {
  const rawTag = params.slug?.[0];

  const tag: NoteTag | undefined =
    !rawTag || rawTag === "all" ? undefined : (rawTag as NoteTag);

  return <NotesClient tag={tag} />;
}