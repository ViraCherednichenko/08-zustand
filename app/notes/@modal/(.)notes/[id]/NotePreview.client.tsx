"use client";

type Props = {
  noteId: string;
};

export default function NotePreview({ noteId }: Props) {
  return (
    <div style={{ padding: 16 }}>
      <h2>Note preview</h2>
      <p>Note ID: {noteId}</p>
    </div>
  );
}