import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import ModalWrapper from "./ModalWrapper";

type Props = {
  params: { id: string };
};

export default function NoteModalPage({ params }: Props) {
  return (
    <ModalWrapper>
      <NoteDetailsClient id={params.id} />
    </ModalWrapper>
  );
}