export default function MugClubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 bg-[#080d08] overflow-y-auto">
      {children}
    </div>
  );
}
