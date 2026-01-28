type Props = {
  params: Promise<{ id: string }>;
};

export default async function ModalNotePage({ params }: Props) {
  const { id } = await params;

  return (
    <div style={{ padding: 16 }}>
      <h2>Note preview</h2>
      <p>Note ID: {id}</p>
    </div>
  );
}