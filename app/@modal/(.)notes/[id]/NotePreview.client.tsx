import NotePreview from "./NotePreview.client";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ModalNotePage({ params }: Props) {
  const { id } = await params;
  return <NotePreview noteId={id} />;
}