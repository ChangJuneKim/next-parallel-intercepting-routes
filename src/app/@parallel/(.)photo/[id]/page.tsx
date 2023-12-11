import PhotoDetail from "@/app/_components/PhotoDetail";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return <PhotoDetail id={id} />;
}
