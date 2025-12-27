export type AdminTab = "overview" | "create_event" | "events" | "messages";

export type MessageStatus = "NEW" | "READ";

export type EventStatus = "DRAFT" | "PUBLISHED";

export type Message = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: MessageStatus;
};

export type Event = {
  id: string;
  title: string;
  category: string;
  dateTime: string;
  location: string;
  coverImageUrl: string | null;
  shortSummary: string;
  fullDescription: string;
  status: EventStatus;
  createdAt: string;
  updatedAt: string;
};
