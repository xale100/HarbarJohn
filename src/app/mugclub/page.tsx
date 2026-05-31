import MugClubApp from "./MugClubApp";

export default async function MugClubPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  if (!token || token !== process.env.MUGCLUB_TOKEN) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#080d08]">
        <p className="text-[#DDD8CC]/20 text-[10px] tracking-widest uppercase">
          not authorized
        </p>
      </div>
    );
  }

  return <MugClubApp token={token} />;
}
