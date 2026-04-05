export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-300 px-6">{children}</div>;
}
