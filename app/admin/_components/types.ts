export type AdminTab = "overview" | "create_event" | "messages";

export type Message = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: "new" | "read";
};
