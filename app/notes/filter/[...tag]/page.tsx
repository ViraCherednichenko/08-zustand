import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

type Props = {
  params: {
    tag?: string[];
  };
};

export default async function FilteredNotesPage({ params }: Props) {
  const slug = params.tag?.[0] ?? "all";
  const tag = slug === "all" ? undefined : slug;

  // ⬇️ ВАЖЛИВО: правильні аргументи
  const data = await fetchNotes(
    1,        // page
    12,       // perPage (або те число, яке ти вже використовуєш у проєкті)
    undefined,
    tag
  );

  return <NoteList notes={data.notes} />;
}
