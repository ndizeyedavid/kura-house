import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AdminShell({ children }: Props) {
  const styles = [
    ".admin-shell{ padding: 24px; }",
    ".admin-card{ border: 0; border-radius: 16px; }",
    ".admin-sidebar .btn{ text-align:left; }",
    ".admin-muted{ color: rgba(33,37,41,.65); }",
  ].join("\n");

  return (
    <div className="bg-light min-vh-100">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="container-fluid admin-shell">{children}</div>
    </div>
  );
}
